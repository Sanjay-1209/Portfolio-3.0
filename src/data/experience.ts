export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  timeline: string;
  location: string;
  yearLabel: string;
  vibe: string;
  sections: { title: string; body: string[] }[];
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "ey",
    company: "Ernst & Young GDS",
    role: "Associate Software Engineer",
    timeline: "June 2025 – Present",
    location: "Chennai",
    yearLabel: "2025 → PRESENT",
    vibe: "System-oriented. Precise. Engineering-focused.",
    sections: [
      {
        title: "System Automation",
        body: [
          "Applied automation and data analytics skills to client-facing systems in a consulting and compliance environment.",
        ],
      },
      {
        title: "Data Handling",
        body: [
          "Worked with structured datasets — JSON, CSV, Parquet, and Excel — for validation, reporting and test data generation using Node.js and Python.",
        ],
      },
      {
        title: "Pipeline Optimization",
        body: [
          "Collaborated with senior analysts to standardize SQL workflows on Google BigQuery, reducing query runtimes and improving reporting cycle consistency.",
        ],
      },
      {
        title: "Data Validation",
        body: [
          "Performed consistency checks for Looker Studio dashboards across financial and operational datasets before stakeholder consumption.",
        ],
      },
      {
        title: "Support & Monitoring",
        body: [
          "Supported documentation, test planning and pipeline monitoring for internal analytics systems. Used GitHub Copilot to accelerate development.",
        ],
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "SQL",
      "BigQuery",
      "Looker Studio",
      "JSON",
      "CSV",
      "Parquet",
      "Excel",
      "GitHub Copilot",
    ],
  },
  {
    id: "tacheon",
    company: "Tacheon Business Growth Consulting",
    role: "Data Analyst Intern",
    timeline: "September 2024 – March 2025",
    location: "Chennai",
    yearLabel: "2024 → 2025",
    vibe: "Dynamic. Dashboard and data-pipeline energy.",
    sections: [
      {
        title: "Dashboard Development",
        body: [
          "Built dynamic Looker Studio dashboards visualizing KPIs such as vendor performance, revenue trends, and customer retention for 3 different clients.",
        ],
      },
      {
        title: "ETL & Pipeline Optimization",
        body: [
          "Debugged and optimized SQL-based ETL pipelines on Google BigQuery. Ensured uninterrupted data flow and reduced cloud querying costs by 60%.",
        ],
      },
      {
        title: "AI Automation",
        body: [
          "Built AI-powered tools using the Gemini API, Python and GCP — integrating LLM-based summarization and content generation.",
        ],
      },
      {
        title: "Workflow Optimization",
        body: [
          "Implemented workflow automation for task reports, reminders, and approvals across 25+ employees using Google Apps Script and SQL.",
        ],
      },
      {
        title: "API Integration",
        body: [
          "Integrated Razorpay APIs to automate transaction tracking, improving reconciliation accuracy by 25%.",
        ],
      },
    ],
    technologies: [
      "BigQuery",
      "SQL",
      "Looker Studio",
      "Gemini API",
      "Python",
      "GCP",
      "Google Apps Script",
      "Razorpay API",
      "ETL",
      "LLM Automation",
    ],
  },
  {
    id: "hyundai",
    company: "Hyundai Motor India Ltd.",
    role: "Analyst Intern — Supply Chain & Audit",
    timeline: "March 2024 – September 2024",
    location: "Chennai",
    yearLabel: "2024",
    vibe: "Analytical. Structured. Industrial.",
    sections: [
      {
        title: "Process Automation",
        body: [
          "Created and deployed multiple Streamlit-based internal dashboards, including a Leave Application System and fraud detection tools — reducing manual analysis effort by 40%.",
        ],
      },
      {
        title: "Fraud Detection — PRPO Analyzer",
        body: [
          "Designed AI-based fraud detection models using Python and SQL to monitor procurement trends, strengthen compliance, and detect anomalies.",
        ],
      },
      {
        title: "Risk Visualization",
        body: [
          "Developed risk heatmaps and process KPIs. Presented findings in internal audit meetings — outputs supported leadership recommendations.",
        ],
      },
      {
        title: "Deployment",
        body: [
          "Independently handled front-end logic, deployment and GCP connectivity for Streamlit-based tools, resulting in a 50% reduction in audit review cycles.",
        ],
      },
    ],
    technologies: [
      "Python",
      "SQL",
      "Streamlit",
      "GCP",
      "Data Analytics",
      "Supply Chain Analytics",
      "Audit Analytics",
      "Fraud Detection",
      "Risk Analysis",
      "Statistical Analysis",
    ],
  },
];
