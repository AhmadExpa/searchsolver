/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './searchsolver/Layout';
import Home from './searchsolver/pages/Home';
import ServicesPage from './searchsolver/pages/ServicesPage';
import WebAppDesign from './searchsolver/pages/WebAppDesign';
import Work from './searchsolver/pages/Work';
import About from './searchsolver/pages/About';
import Contact from './searchsolver/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/web-app-design" element={<WebAppDesign />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to home for any unknown route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
