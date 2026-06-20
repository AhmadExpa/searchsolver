import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3000;

let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key.includes("MY_GEMINI_API_KEY") || key === "") {
      throw new Error("GEMINI_API_KEY is not configured.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST Backend Endpoint for 5-Minute AI Restaurant Audit
app.post("/api/audit", async (req, res) => {
  const { companyName, websiteUrl, role, challenge, postingFrequency, location = "UK" } = req.body;

  if (!companyName || !websiteUrl) {
    return res.status(400).json({ error: "Restaurant Name and Website/Link are required." });
  }

  const prompt = `You are the Lead Restaurant Conversion & Social Media Growth Coach at Markadeo UK.
A restaurant has requested an urgent 5-minute sales & engagement recovery audit.

Here are the target restaurant details:
- Restaurant Name: "${companyName}"
- Website / Brand Link: "${websiteUrl}"
- Core Submitter Role: "${role}"
- Main Revenue Obstacle/Pain Point: "${challenge}"
- Current Social Posting Frequency: "${postingFrequency}"
- Primary Target Location: "${location}"

Create a highly-focused, direct, punchy, and professional Audit Report.
Avoid generic marketing fluff or AI-style introductory greetings. Get straight to the analysis.

Your response must be structured into exactly these four headers using clear, high-contrast Markdown formatting:

### 1. THE REVENUE LEAKS ANALYSIS
Provide a 2-3 sentence analysis of exactly why their current setup (considering their role "${role}", hurdle "${challenge}", and social frequency "${postingFrequency}") is causing them to lose prospective mid-week covers and direct sales on their high-street location. Identify commission leaks to aggregators.

### 2. DIVERGING FROM HIGH-COMMISSION CHANNELS
Explain 2 actionable, non-obvious ways they can deflect customers from delivery apps (with 30% commissions) directly to booking tables or ordering direct using daily high-retention content and local SEO.

### 3. THE 30-DAY DAILY SOCIAL COMMAND ROUTEMAP
Outline a direct 3-step blueprint for daily posting (e.g., foodie reels, micro-engagements, local search keywords) custom-styled for "${companyName}". State exactly what they should publish and how to drive comment-to-booking automated sequences.

### 4. SUMMARY RECOMMENDATIONS
Add a brief 1-2 sentence final summary detailing their potential growth rate.
At the very end, add this exact phrasing: "To immediately execute this elite daily engagement & local search turnaround framework with zero stress, contact Markadeo to handle everything for you."`;

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const report = response.text || "Unable to generate analysis right now.";
    return res.json({ report, success: true, isMock: false });
  } catch (error: any) {
    console.log("No valid GEMINI_API_KEY or model error, serving high-fidelity local marketing turnaround simulation report:");
    console.log(error.message);

    // Fallback: Custom high-fidelity mock output tailored dynamically to their selections.
    // This allows the app to be fully interactive and robust for mock parameters as well.
    const fallbackReport = `### 1. THE REVENUE LEAKS ANALYSIS
Based on your role as **${role}** at **${companyName}**, your primary obstacle (**${challenge}**) combined with a **${postingFrequency}** social presence is costing you substantial high-street footfall. Without constant daily video reels, your restaurant is virtually invisible to local diners whose visual memory decays within 48 hours. You are currently leaking upwards of 30% in margin fees to third-party delivery aggregators.

### 2. DIVERGING FROM HIGH-COMMISSION CHANNELS
*   **Direct-to-Table Reservation Hooks:** Deploy instant-booking incentives (like a complimentary chef's treat or signature mid-week drink) on your high-speed dynamic mobile menu to convert viewers into confirmed seats.
*   **Local Postcode Geo-Mapping:** Secure your postcodes in the Google Maps Local 3-Pack so nearby residents looking for regional eats map directly to your brand, bypassing commission networks.

### 3. THE 30-DAY DAILY SOCIAL COMMAND ROUTEMAP
1.  **Daily Slow-Motion Foodie Reels:** Record and publish 15-second high-appetite reels every single day showing sizzles, pours, and chef-behind-the-scenes techniques.
2.  **Automated Comment-to-DM Reservation Sequences:** Deploy interactive comment triggers (e.g., DM us the word 'RESERVE' on our daily post) that instantly sends the direct reservation flow into their Instagram inbox.
3.  **Local Office Conquesting:** Distribute location-precise 3-mile geo-fenced visual posts targeting major local corporate headquarters during lunch-decision hours.

### 4. SUMMARY RECOMMENDATIONS
With consistent daily publishing and local listing optimization, **${companyName}** can meaningfully grow weekly table covers and reclaim sales currently lost to commission-heavy aggregators (which typically charge around 30%).

To immediately execute this elite daily engagement & local search turnaround framework with zero stress, contact Markadeo to handle everything for you.`;

    return res.json({ 
      report: fallbackReport, 
      success: true, 
      isMock: true, 
      errorWarning: "Demo Simulation Active"
    });
  }
});

// Configure Vite middleware or static files serving
async function bootstrapServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Markadeo] Server running on http://localhost:${PORT}`);
  });
}

bootstrapServer();
