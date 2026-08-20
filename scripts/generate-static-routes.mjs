import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const sourcePath = path.join(distDir, 'index.html');
if (!fs.existsSync(sourcePath)) {
  console.error('dist/index.html not found. Run Vite build first.');
  process.exit(1);
}

const base = fs.readFileSync(sourcePath, 'utf8');
const origin = 'https://sanjay-dharan.netlify.app';

const routes = {
  about: {
    title: 'About Sanjay Dharan — Data, Automation & Website Solutions',
    description: 'About Sanjay Dharan, a Chennai-based website, data and automation professional with enterprise experience across EY, Tacheon and Hyundai.',
    summary: 'Sanjay Dharan is a Chennai-based Website Developer, Data Analyst, Data Engineer and Automation Specialist with 2+ years of production experience across enterprise analytics, automation and digital solutions.'
  },
  experience: {
    title: 'Experience — Sanjay Dharan | EY, Tacheon & Hyundai',
    description: 'Enterprise data analytics, engineering and automation experience with verified production outcomes across EY GDS, Tacheon and Hyundai.',
    summary: 'Professional experience across EY GDS, Tacheon and Hyundai, including analytics, dashboards, cloud data work, KPI automation, supply-chain reporting and audit analytics with quantified outcomes.'
  },
  projects: {
    title: 'Projects & Case Studies — Websites, Analytics & Automation | Sanjay Dharan',
    description: 'Explore live websites, analytics projects, dashboards, automation tools and production case studies by Sanjay Dharan.',
    summary: 'Selected work includes the live Flora Farming and Uyirveda Health Care websites, enterprise analytics projects, data automation systems, a B2B quotation engine and other business tools.'
  },
  services: {
    title: 'Website Development, Data Analytics & Automation Services — Sanjay Dharan',
    description: 'Priority website-development service plus data analytics, dashboards, ETL, database, reporting automation, API integration and custom internal tools.',
    summary: 'Priority service: end-to-end responsive website development covering information architecture, mobile-first UI/UX, React and TypeScript, SEO, lead capture, performance, QA and deployment. Additional services include analytics, BI, data engineering and automation.'
  },
  recommendations: {
    title: 'Professional Recommendations — Sanjay Dharan',
    description: 'Professional recommendations and references from colleagues across EY, Tacheon and Hyundai.',
    summary: 'Professional recommendations are organized by EY, Tacheon and Hyundai to provide direct evidence of collaboration, delivery quality and professional impact.'
  },
  'work-with-me': {
    title: 'Work With Sanjay — Website, Data & Automation Projects',
    description: 'Start a website development, analytics, dashboard, automation or custom business solution project with Sanjay Dharan.',
    summary: 'Use the project inquiry workflow to scope website development, analytics, dashboard, data engineering, automation or custom business-tool requirements.'
  },
  contact: {
    title: 'Contact Sanjay Dharan — Chennai / Remote',
    description: 'Contact Sanjay Dharan for responsive website development, data analytics, business intelligence, automation and consulting.',
    summary: 'Contact Sanjay Dharan for website development, data, analytics and automation engagements in Chennai or remotely.'
  }
};

const escapeHtml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const [route, meta] of Object.entries(routes)) {
  const url = `${origin}/${route}`;
  let html = base
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);

  const routeSnapshot = `<noscript><main><h1>${escapeHtml(meta.title)}</h1><p>${escapeHtml(meta.summary)}</p><p>Canonical portfolio: <a href="${url}">${url}</a></p></main></noscript>`;
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, routeSnapshot);

  const targetDir = path.join(distDir, route);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html);
}

console.log(`Generated ${Object.keys(routes).length} static route entry points.`);
