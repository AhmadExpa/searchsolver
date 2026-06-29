import { spawn } from 'node:child_process';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(repoRoot, 'public', 'assets', 'portfolio');

const imageExts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const groups = [
  {
    category: 'banners',
    sourceRoot: 'Banners.',
    maxWidth: 1600,
    quality: 78,
  },
  {
    category: 'brand',
    sourceRoot: 'Brand and Identity-20260627T214553Z-3-001./Brand and Identity',
    maxWidth: 1200,
    quality: 74,
  },
  {
    category: 'ebook',
    sourceRoot: 'Ebook and magazine-20260628T153953Z-3-001./Ebook and magazine',
    maxWidth: 1200,
    quality: 74,
  },
  {
    category: 'logo',
    sourceRoot: 'logo design-20260627T214555Z-3-001./logo design',
    maxWidth: 1200,
    quality: 74,
  },
  {
    category: 'social',
    sourceRoot: 'social media-20260627T214556Z-3-001./social media',
    maxWidth: 1000,
    quality: 72,
  },
];

function slugify(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unit = 0;

  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }

  return `${size.toFixed(size >= 10 || unit === 0 ? 0 : 1)} ${units[unit]}`;
}

async function findImages(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(root, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
      continue;
    }

    if (entry.isFile() && imageExts.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function runFfmpeg({ input, output, maxWidth, quality }) {
  const scaleFilter = `scale='min(${maxWidth},iw)':-2`;
  const args = [
    '-hide_banner',
    '-loglevel',
    'error',
    '-y',
    '-i',
    input,
    '-vf',
    scaleFilter,
    '-c:v',
    'libwebp',
    '-lossless',
    '0',
    '-quality',
    String(quality),
    '-compression_level',
    '6',
    '-preset',
    'picture',
    '-an',
    output,
  ];

  return new Promise((resolve, reject) => {
    const child = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';

    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });

    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`ffmpeg failed for ${input}\n${stderr}`));
    });
  });
}

async function main() {
  let totalInputBytes = 0;
  let totalOutputBytes = 0;
  let totalFiles = 0;

  await mkdir(outputRoot, { recursive: true });

  for (const group of groups) {
    const sourceRoot = path.join(repoRoot, group.sourceRoot);
    const outputDir = path.join(outputRoot, group.category);
    await mkdir(outputDir, { recursive: true });

    const files = await findImages(sourceRoot);

    for (const file of files) {
      const relative = path.relative(sourceRoot, file);
      const slug = relative
        .split(path.sep)
        .map(slugify)
        .filter(Boolean)
        .join('-');
      const output = path.join(outputDir, `${slug}.webp`);
      const inputStats = await stat(file);

      await runFfmpeg({
        input: file,
        output,
        maxWidth: group.maxWidth,
        quality: group.quality,
      });

      const outputStats = await stat(output);
      totalInputBytes += inputStats.size;
      totalOutputBytes += outputStats.size;
      totalFiles += 1;

      console.log(`${group.category}/${path.basename(output)} ${formatBytes(inputStats.size)} -> ${formatBytes(outputStats.size)}`);
    }
  }

  const saved = totalInputBytes - totalOutputBytes;
  const percent = totalInputBytes > 0 ? Math.round((saved / totalInputBytes) * 100) : 0;

  console.log(`\nOptimized ${totalFiles} images.`);
  console.log(`Source total: ${formatBytes(totalInputBytes)}`);
  console.log(`Output total: ${formatBytes(totalOutputBytes)}`);
  console.log(`Saved: ${formatBytes(saved)} (${percent}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
