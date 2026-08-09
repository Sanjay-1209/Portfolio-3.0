export type SkillCategory = {
  id: string;
  label: string;
  short: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    short: "DATA",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Node.js",
      "Java",
      "Google Apps Script",
      "Shell Scripting",
    ],
  },
  {
    id: "databases",
    label: "Databases & Cloud Warehousing",
    short: "CLOUD",
    skills: [
      "Advanced SQL",
      "Google BigQuery",
      "AWS S3",
      "AWS Lambda",
      "AWS DynamoDB",
      "Snowflake",
      "Oracle",
      "SSIS",
      "Cloud Functions",
      "Cloud Storage",
    ],
  },
  {
    id: "bi",
    label: "BI & Data Visualization",
    short: "BI",
    skills: [
      "Looker Studio",
      "Streamlit — Advanced",
      "Power BI",
      "Microsoft Excel",
      "Pivot Tables",
      "VLOOKUP",
      "Advanced Formulas",
    ],
  },
  {
    id: "ai",
    label: "AI & Generative AI",
    short: "AI",
    skills: [
      "Prompt Engineering",
      "RAG Concepts",
      "Gemini API",
      "LLM Summarization",
      "Vertex AI",
      "GitHub Copilot",
    ],
  },
  {
    id: "methodologies",
    label: "Data Methodologies",
    short: "ENGINEERING",
    skills: [
      "ETL Pipeline Development",
      "Statistical Analysis",
      "Regression Analysis",
      "Forecasting",
      "Trend Analysis",
      "A/B Testing",
      "Cohort Analysis",
      "Data Cleaning",
      "Data Integrity",
    ],
  },
  {
    id: "other",
    label: "Other",
    short: "AUTOMATION",
    skills: ["REST APIs", "Azure Fundamentals", "Agile / Scrum"],
  },
];
