export type ProjectItem = {
  id: string;
  number: string;
  name: string;
  organization: string;
  status: "Internal Tool" | "Live" | "Project";
  problem: string;
  whatIBuilt: string;
  how: string;
  impact: string | null;
  technologies: string[];
  liveUrl?: string;
  conceptual?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "vendor-audit",
    number: "01",
    name: "Vendor Audit & Compliance Dashboard",
    organization: "Hyundai Motor India",
    status: "Internal Tool",
    problem:
      "Procurement and vendor data needed structured monitoring to catch anomalies before they became compliance issues.",
    whatIBuilt:
      "An AI-powered audit system assisting anomaly detection, risk heatmaps and compliance tracking for the internal audit team.",
    how: "Built with regression-based rules and statistical outlier analysis to support anomaly detection and audit intelligence.",
    impact: "Directly contributed to a 50% reduction in audit review cycles.",
    technologies: ["Python", "SQL", "Streamlit", "Statistical Analysis", "Risk Heatmaps"],
    conceptual: true,
  },
  {
    id: "revenue-intelligence",
    number: "02",
    name: "Dynamic Revenue Intelligence Dashboard",
    organization: "Tacheon",
    status: "Internal Tool",
    problem:
      "Clients needed real-time visibility into revenue, customer growth and order trends without manual report building.",
    whatIBuilt:
      "A real-time analytics dashboard tracking revenue, customer growth and order trends with interactive drill-downs and automated scheduled queries.",
    how: "Built using Google BigQuery and Looker Studio, with scheduled queries keeping data continuously fresh.",
    impact: "Helped reduce cloud querying costs by 60% across client accounts.",
    technologies: ["BigQuery", "Looker Studio", "SQL", "Analytics", "Scheduled Queries"],
  },
  {
    id: "youtube-analyzer",
    number: "03",
    name: "YouTube Comment Analyzer AI",
    organization: "Personal Project",
    status: "Live",
    problem:
      "Reading through hundreds of YouTube comments manually to understand audience sentiment is slow and inconsistent.",
    whatIBuilt:
      "A tool that fetches, analyzes and summarizes YouTube comments to provide structured insights — including sentiment analysis and theme extraction.",
    how: "Built with the Gemini API and Streamlit, with secure authentication, Razorpay integration and database connectivity.",
    impact: "Live, publicly usable tool with functioning sentiment and theme extraction.",
    technologies: ["Gemini API", "Streamlit", "Sentiment Analysis", "Razorpay", "Authentication"],
    liveUrl: "https://youtube-comments-ai-analyzer.streamlit.app",
  },
  {
    id: "quotation-automation",
    number: "04",
    name: "Quotation Automation Tool",
    organization: "Personal Project",
    status: "Project",
    problem:
      "Manually generating client quotations — with GST logic and pricing calculations — was repetitive and error-prone.",
    whatIBuilt:
      "An end-to-end AI-powered automation system for client quotation generation, integrating GST logic, pricing calculations and PDF generation.",
    how: "Built using the Gemini API to process inputs and structure output into final PDF quotations.",
    impact: "Reduced manual effort by 90%.",
    technologies: ["Gemini API", "PDF Generation", "GST Logic", "Automation"],
  },
];
