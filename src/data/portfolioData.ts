import { Experience, Project, Recommendation, Service, SkillCategory, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sanjay Dharan',
  titles: [
    'Data Analyst',
    'Data Engineer',
    'Automation Specialist',
    'Business Intelligence',
    'Web Developer'
  ],
  headline: 'Turning raw business data and repetitive processes into dashboards, automated workflows, scalable systems, and better business decisions.',
  location: 'Chennai, Tamil Nadu, India',
  phone: '+91 93607 34551',
  phoneFormatted: '+91 93607 34551',
  email: 'sanjaydharand@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/sanjay-dharan-99736321b/',
  linkedinRecommendationsUrl: 'https://www.linkedin.com/in/sanjay-dharan-99736321b/details/recommendations/',
  portfolioUrl: 'https://sanjay-dharan.netlify.app/',
  heroImage: 'https://i.ibb.co/2YWsLTp5/Sanjay-Image-Linkedin.jpg',
  yearsExperience: '2+',
  availability: 'Available for freelance consulting, full-time opportunities, and high-impact contract projects in Chennai / Remote.',
  summaryBio: `I am a data and analytics professional with 2+ years of hands-on experience across advanced analysis, dashboard development, KPI automation, data preparation, and analytics engineering. I specialize in working with Python, SQL, Tableau, Power BI, Streamlit, modern databases, and cloud data platforms to turn complex business questions into practical, maintainable, and revenue-driving solutions.`
};

export const VERIFIED_METRICS = [
  {
    value: '15%',
    label: 'Pipeline Velocity',
    detail: 'Statistical customer journey analysis at EY contributed to a 15% pipeline velocity increase.',
    company: 'EY GDS'
  },
  {
    value: '20%',
    label: 'Conversion Boost',
    detail: 'Customer segment behavior models at Tacheon drove data-driven GTM decisions improving conversions by 20%.',
    company: 'Tacheon'
  },
  {
    value: '30%',
    label: 'Query Cost Reduction',
    detail: 'Optimized SQL queries and analytical data models on Google BigQuery, cutting cloud processing costs by 30%.',
    company: 'Tacheon'
  },
  {
    value: '40%',
    label: 'Data-Prep Automation',
    detail: 'Automated recurring supply chain report generation at Hyundai, reducing manual data-prep effort by 40%.',
    company: 'Hyundai'
  },
  {
    value: '50%',
    label: 'Audit Cycle Reduction',
    detail: 'Identified process bottlenecks and delivered automated risk analytics reducing audit review cycles by 50%.',
    company: 'Hyundai'
  },
  {
    value: '30%',
    label: 'False-Positive Drop',
    detail: 'Implemented statistical outlier detection in vendor compliance, reducing false positives by 30%.',
    company: 'Vendor Project'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'ey',
    company: 'Ernst & Young GDS',
    companyLogoKey: 'ey',
    role: 'Associate Software Engineer – Data & Analytics',
    duration: 'June 2025 – August 2026',
    location: 'Chennai, Tamil Nadu',
    context: 'Spearheaded end-to-end data visualization dashboards, statistical customer journey analysis, and automated KPI generation for enterprise stakeholders.',
    responsibilities: [
      'Designed, developed, and maintained enterprise data visualization dashboards using Tableau, Python (Pandas, NumPy), and SQL to support strategic decision-making and track revenue performance.',
      'Conducted advanced statistical analysis on large datasets around customer journeys, applying models to pinpoint exact drop-off stages.',
      'Contributed directly through data analysis to a 15% improvement in pipeline velocity.',
      'Translated ambiguous requirements from commercial and product leadership into structured, actionable reporting and analytics architectures.',
      'Automated recurring reports and KPI generation pipelines through Python and AWS-based data preparation workflows.',
      'Enforced rigorous data-quality protocols, automated schema validation, and data cleaning across large-scale datasets.',
      'Prepared executive documentation, technical playbooks, and supported bug fixes and performance tuning for existing analytics pipelines.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'AWS S3', 'AWS Lambda', 'Excel', 'Automated Reporting', 'Data Quality'],
    verifiedImpact: [
      {
        metric: '15% Increase',
        description: 'In sales pipeline velocity through customer journey statistical analysis and drop-off modeling.'
      },
      {
        metric: '100% Automated',
        description: 'Recurring KPI and executive revenue reporting workflows via scheduled Python/AWS pipelines.'
      }
    ]
  },
  {
    id: 'tacheon',
    company: 'Tacheon Business Growth Consulting',
    companyLogoKey: 'tacheon',
    role: 'Data Analyst Intern',
    duration: 'September 2024 – March 2025',
    location: 'Chennai, Tamil Nadu',
    context: 'Built marketing ROI models, customer segmentation algorithms, and BigQuery data pipelines driving go-to-market decisions and cloud cost efficiency.',
    responsibilities: [
      'Designed and delivered high-impact data visualization dashboards using Python, SQL, and Google BigQuery.',
      'Automated recurring KPI generation for marketing ROI, multi-touch conversion rates, and revenue trends across client portfolios.',
      'Performed advanced statistical clustering and behavioral analysis to isolate high-intent customer segments.',
      'Directly contributed to data-driven GTM strategy adjustments yielding a verified 20% improvement in conversion rates.',
      'Built recurring automated data-wrangling workflows using Pandas and NumPy for cross-functional stakeholders.',
      'Engineered and optimized complex SQL queries and analytical schema designs in Google BigQuery, reducing cloud processing and query execution costs by 30%.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Google BigQuery', 'Looker Studio', 'Statistical Modeling', 'Cost Optimization'],
    verifiedImpact: [
      {
        metric: '20% Boost',
        description: 'In customer conversion rates from high-intent segment identification and targeted analytics.'
      },
      {
        metric: '30% Cost Cut',
        description: 'In Google BigQuery cloud data querying and processing costs through query optimization and schema tuning.'
      }
    ]
  },
  {
    id: 'hyundai',
    company: 'Hyundai Motor India Ltd.',
    companyLogoKey: 'hyundai',
    role: 'Data Analyst Intern – Supply Chain & Audit Analytics',
    duration: 'March 2024 – September 2024',
    location: 'Chennai, Tamil Nadu',
    context: 'Engineered operational risk heatmaps, automated supply chain data pipelines, and anomaly detection models for internal audit teams.',
    responsibilities: [
      'Designed interactive Power BI and Tableau dashboards tracking operational KPIs, supply chain risk heatmaps, and audit findings.',
      'Engineered custom Streamlit analytics applications utilizing Python and SQL for rapid scenario simulation.',
      'Automated recurring report generation, reducing manual data-preparation effort by 40%.',
      'Cleaned, wrangled, and harmonized massive multi-system supply chain datasets from disparate legacy databases.',
      'Identified critical process bottlenecks and delivered data-backed workflow recommendations that helped slash audit review cycles by 50%.',
      'Applied statistical anomaly detection to vendor transactions, uncovering procurement irregularities and preventing compliance drift.'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Streamlit', 'Excel', 'Supply Chain Analytics', 'Anomaly Detection'],
    verifiedImpact: [
      {
        metric: '40% Effort Saved',
        description: 'Reduction in manual data-preparation effort across recurring operational reports.'
      },
      {
        metric: '50% Faster Audits',
        description: 'Reduction in internal audit review cycles through streamlined risk dashboards and automated outlier flags.'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'vendor-analytics',
    title: 'Vendor Analytics & Compliance KPI Platform',
    category: 'Analytics & BI',
    year: '2024',
    tagline: 'Statistical outlier detection and automated risk scoring for procurement audits.',
    problem: 'Procurement and compliance teams spent days manually reviewing thousands of vendor invoices and compliance filings, struggling with high false-positive rates and delayed risk intervention.',
    solution: 'Engineered an automated end-to-end analytics and KPI platform with Python, SciPy, SQL, Streamlit, and Power BI that statistically evaluates vendor anomalies and flags high-risk transactions.',
    approach: [
      'Engineered automated ETL pipelines ingesting multi-source procurement records.',
      'Implemented robust statistical distribution modeling (SciPy, Statsmodels) to establish dynamic anomaly thresholds instead of rigid rule checks.',
      'Built interactive Streamlit and Power BI dashboards featuring risk heatmaps, outlier deep dives, and audit drill-downs.',
      'Created structured audit logging and automated compliance report generation.'
    ],
    technologies: ['Python', 'Jupyter', 'SciPy', 'Statsmodels', 'SQL', 'Streamlit', 'Power BI', 'ETL Pipelines'],
    impact: [
      'Reduced false-positive risk alerts by 30% through statistical outlier calibration.',
      'Supported a verified 50% reduction in manual audit review cycles.',
      'Provided instantaneous risk visibility across thousands of supplier accounts.'
    ],
    skillsDemonstrated: ['Statistical Modeling', 'Outlier Detection', 'KPI Automation', 'Streamlit UI', 'Executive Reporting'],
    featured: true,
    proofBadge: 'Verified Resume Project'
  },
  {
    id: 'data-prep-infrastructure',
    title: 'Automated Data Preparation & Analytics Infrastructure',
    category: 'Data Engineering & Pipelines',
    year: '2025',
    tagline: 'Scalable data wrangling and quality enforcement pipelines on AWS & Snowflake.',
    problem: 'Recurring commercial analytics required multi-gigabyte datasets to be manually downloaded, cleaned, transformed, and validated across disparate teams, causing reporting bottlenecks and data drift.',
    solution: 'Architected an automated, reliable data preparation workflow combining Python, Pandas, NumPy, AWS services, and Snowflake to automate ingestion, schema normalization, and quality checks.',
    approach: [
      'Designed modular Python data-cleansing scripts containerized and triggered via AWS serverless workflows.',
      'Built automated data validation layers checking for null anomalies, type mismatches, and duplicate records prior to loading.',
      'Transformed unstructured and semi-structured payloads into clean dimensional data marts within Snowflake.',
      'Connected downstream BI endpoints to automatically refreshed and validated data marts.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'AWS S3', 'AWS Lambda', 'Snowflake', 'SQL', 'Data Quality Protocols'],
    impact: [
      'Eliminated manual spreadsheet reconciliation across cross-functional commercial teams.',
      'Ensured 99.9% clean data compliance across downstream BI dashboards and financial reports.',
      'Established a maintainable, self-healing pipeline architecture with automated error alerting.'
    ],
    skillsDemonstrated: ['Data Pipeline Architecture', 'AWS Serverless', 'Snowflake Data Modeling', 'Automated QA', 'Data Wrangling'],
    featured: true,
    proofBadge: 'Enterprise Infrastructure'
  },
  {
    id: 'market-analytics-platform',
    title: 'Commercial Market Analytics & Visualization Platform',
    category: 'Analytics & BI',
    year: '2025',
    tagline: 'Cohort segmentation and pricing intelligence dashboard for executive strategy.',
    problem: 'Stakeholders lacked a unified, interactive framework to understand market share shifts, competitor pricing benchmarks, customer lifetime value, and cohort retention dynamics.',
    solution: 'Designed an interactive analytics and visualization platform using Tableau, Python, and SQL that models market dynamics, pricing sensitivity, and behavioral cohorts.',
    approach: [
      'Executed behavioral cohort analysis clustering accounts by acquisition period, usage volume, and retention rate.',
      'Built dynamic pricing sensitivity models in Python to forecast margin outcomes under varying discount structures.',
      'Developed high-density Tableau executive dashboards featuring dynamic parameter switching, drill-downs, and trend forecasts.',
      'Structured technical documentation and conducted stakeholder training sessions.'
    ],
    technologies: ['Tableau', 'Python', 'SQL', 'Pandas', 'Cohort Analysis', 'Pricing KPIs', 'Statistical Segmentation'],
    impact: [
      'Equipped commercial leadership with real-time visibility into high-yield customer segments.',
      'Unified fragmented sales data into a single source of truth for quarterly strategy planning.',
      'Enabled rapid sensitivity simulations for new product pricing rollouts.'
    ],
    skillsDemonstrated: ['Cohort Analysis', 'Pricing Intelligence', 'Tableau Advanced Design', 'Stakeholder Requirement Translation'],
    featured: true,
    proofBadge: 'Verified Resume Project'
  },
  {
    id: 'flora-farming',
    title: 'Flora Farming — Microgreens & Sustainable Agritech Platform',
    category: 'Web & Digital Solutions',
    year: '2024',
    tagline: 'Production digital platform for fresh microgreens, recurring memberships & community B2B orders.',
    problem: 'A rapidly scaling fresh-food brand required a modern, mobile-first production web presence to showcase organic microgreens, manage apartment community subscriptions, and drive B2B restaurant inquiries.',
    solution: 'Planned information architecture, designed intuitive product catalog flows, implemented responsive frontend experiences, configured SEO foundations, and deployed the production site.',
    approach: [
      'Structured clean information architecture separating retail consumers, residential apartment bulk orders, and commercial B2B inquiries.',
      'Implemented high-performance responsive UI optimized for mobile shoppers (sub-2s load time).',
      'Built seamless WhatsApp and direct lead capture CTAs connecting buyers to sales dispatch.',
      'Handled production deployment, meta SEO configuration, performance audits, and cross-browser QA.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO Foundations', 'Deployment QA'],
    impact: [
      'Delivered a 100% production-ready web platform supporting live customer acquisition.',
      'Achieved seamless mobile responsiveness across 320px to 4K displays with high Lighthouse performance scores.',
      'Streamlined customer inquiry journeys directly to business fulfillment channels.'
    ],
    skillsDemonstrated: ['End-to-End Web Development', 'Mobile Optimization', 'Conversion Architecture', 'SEO & Performance Tuning'],
    featured: true,
    liveUrl: 'https://www.florafarming.in/',
    proofBadge: 'Live Production Website',
    industry: 'Agriculture / D2C Healthy Food'
  },
  {
    id: 'uyirveda-healthcare',
    title: 'Uyirveda Health Care — Ayurvedic Clinic & Consultation Portal',
    category: 'Web & Digital Solutions',
    year: '2024',
    tagline: 'Healthcare information architecture and digital consultation booking portal.',
    problem: 'A premier Ayurvedic healthcare provider required a trustworthy, comprehensive digital portal to explain treatment protocols, showcase authentic wellness products, and facilitate doctor consultations.',
    solution: 'Designed healthcare-oriented information architecture, structured treatment pathways, implemented accessible responsive layouts, and established reliable booking touchpoints.',
    approach: [
      'Architected dedicated treatment sections (Panchakarma, chronic ailments, lifestyle wellness) with clear clinical explanations.',
      'Built accessible, high-contrast UI tailored for patients across diverse age demographics.',
      'Integrated streamlined consultation inquiry forms and direct WhatsApp emergency/appointment links.',
      'Conducted extensive mobile responsiveness testing and deployed to secure production hosting.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible Design', 'Healthcare IA', 'SEO Optimization'],
    impact: [
      'Transformed offline consultation requests into a streamlined digital pipeline.',
      'Enhanced patient trust through transparent treatment guides and certified doctor profiles.',
      'Live in production serving patients across Tamil Nadu.'
    ],
    skillsDemonstrated: ['Information Architecture', 'Healthcare UX', 'Responsive Web Design', 'Production QA & Deployment'],
    featured: true,
    liveUrl: 'https://uyirveda.in/',
    proofBadge: 'Live Production Website',
    industry: 'Healthcare / Wellness'
  },
  {
    id: 'quotation-automation-tool',
    title: 'B2B Quotation Automation & Calculation Engine',
    category: 'Automation & Tools',
    year: '2024',
    tagline: 'Automated quotation generation with dynamic GST, tiered discounts, and branded PDF generation.',
    problem: 'B2B suppliers (electrical, hardware, construction) spend up to 45 minutes calculating taxes, discounts, and drafting manual quotation documents in Word/Excel, resulting in math errors and slow sales response times.',
    solution: 'Engineered an automated quotation system where sales reps select clients and items from master databases, automatically apply GST/tax rules, and generate branded, print-ready PDF proposals in under 60 seconds.',
    approach: [
      'Built structured Customer and Product Master database schemas for instant item auto-fill.',
      'Implemented robust calculation logic handling multi-tier GST rates (5%, 12%, 18%, 28%), volume discounts, shipping, and payment terms.',
      'Created one-click PDF generation engine adhering to exact company branding and sequential quotation numbering.',
      'Built revision history, quotation search, and email/WhatsApp dispatch integrations.'
    ],
    technologies: ['Python / TypeScript', 'PDF Generation', 'GST Engine', 'SQL / State Management', 'Workflow Automation'],
    impact: [
      'Cut quotation drafting time from 40+ minutes to less than 2 minutes per proposal.',
      'Eliminated calculation discrepancies, incorrect tax brackets, and unapproved discount errors.',
      'Standardized corporate sales documentation with instant search and revision audits.'
    ],
    skillsDemonstrated: ['Business Process Automation', 'Financial Calculation Logic', 'PDF Automation', 'Internal Tooling'],
    featured: true,
    proofBadge: 'High-Demand B2B Tool'
  },
  {
    id: 'youtube-comments-analyzer',
    title: 'YouTube Comment Analyzer & Sentiment AI Engine',
    category: 'Analytics & BI',
    year: '2024',
    tagline: 'Automated video audience feedback extraction, sentiment clustering, and thematic synthesis.',
    problem: 'Content creators and marketing teams struggle to analyze thousands of unstructured video comments to understand audience sentiment, content objections, and product requests.',
    solution: 'Developed an interactive Streamlit application that fetches YouTube comments via API and processes them through NLP and LLM workflows to extract sentiment breakdowns and thematic clusters.',
    approach: [
      'Connected YouTube Data API for batch comment extraction and metadata parsing.',
      'Implemented sentiment classification and thematic topic modeling.',
      'Built interactive Streamlit dashboards visualizing positive/negative trends, frequent keyword clouds, and audience consensus.',
      'Provided exportable executive summary reports.'
    ],
    technologies: ['Streamlit', 'Python', 'NLP', 'Sentiment Analysis', 'API Integration', 'LLM Workflow'],
    impact: [
      'Delivered instant audience sentiment diagnostics on videos with 10,000+ comments.',
      'Enabled data-driven content optimization and audience sentiment tracking over time.'
    ],
    skillsDemonstrated: ['Streamlit Prototyping', 'NLP Analytics', 'API Pipelines', 'Data Visualization'],
    featured: false,
    liveUrl: 'https://youtube-comments-ai-analyzer.streamlit.app',
    proofBadge: 'AI & Streamlit App'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'data-analytics-bi',
    number: '01',
    title: 'Data Analytics & Business Intelligence',
    shortTagline: 'Transform raw sales, marketing, and customer records into actionable strategic clarity.',
    iconName: 'BarChart3',
    category: 'Analytics',
    problem: 'Your business generates sales, marketing, and inventory transactions every day, but leadership still relies on intuition or outdated summaries because the data is disconnected and unanalyzed.',
    solution: 'I clean, structure, and model your commercial data, defining meaningful KPIs and identifying revenue trends, customer segments, churn indicators, and operational bottlenecks.',
    outcome: 'Clear, quantifiable answers to your most urgent business questions, enabling confident revenue, marketing, and expansion decisions.',
    deliverables: [
      'Comprehensive Sales & Revenue Analytics',
      'Customer Segmentation & Cohort Analysis',
      'Marketing Campaign ROI & Attribution Tracking',
      'Inventory Movement & Stock Turnover Modeling',
      'Operational Efficiency & Bottleneck Diagnostics',
      'Statistical Trend & Forecasting Reports'
    ],
    exampleScenario: {
      inputs: 'Messy CSV exports of e-commerce orders, customer IDs, marketing spend, and inventory logs.',
      transformation: 'Clean data wrangling, joining customer lifecycles, calculating gross margins per SKU, and modeling repeat purchase curves.',
      outputs: 'Interactive executive dashboard displaying high-margin product champions, high-risk churn cohorts, and marketing channel profitability.'
    },
    targetIndustries: ['E-commerce', 'Retail', 'SaaS', 'Manufacturing', 'Healthcare', 'Distribution']
  },
  {
    id: 'dashboard-development',
    number: '02',
    title: 'Executive & Operational Dashboard Development',
    shortTagline: 'One single, reliable source of truth instead of juggling dozens of Excel spreadsheets.',
    iconName: 'LayoutDashboard',
    category: 'Analytics',
    problem: 'Managers and founders spend hours every Monday opening 10 different spreadsheets, copy-pasting numbers, and trying to figure out what happened last week.',
    solution: 'I design and deploy custom, live dashboards in Tableau, Power BI, Streamlit, or web-based portals that connect directly to your data sources with automatic refreshes.',
    outcome: 'Instant, real-time visibility into revenue, pipeline, team productivity, and operational KPIs on mobile and desktop.',
    deliverables: [
      'Executive Leadership Overview Dashboards',
      'Daily/Weekly Sales & Revenue Performance Dashboards',
      'Supply Chain & Operations Tracking Dashboards',
      'Customer Support & SLA Compliance Monitors',
      'Mobile-Optimized KPI Snapshots',
      'Interactive Filter & Drill-down Views'
    ],
    exampleScenario: {
      inputs: 'Multiple regional sales spreadsheets and accounting software records.',
      transformation: 'Automated data unification pipeline with dynamic metric definitions and role-based views.',
      outputs: 'A live Power BI or Tableau dashboard accessible to executives with one-click drill-downs by region, rep, and product.'
    },
    targetIndustries: ['Corporate Leadership', 'Sales Organizations', 'Logistics', 'Retail Chains', 'SMEs']
  },
  {
    id: 'data-reporting-automation',
    number: '03',
    title: 'Data & Reporting Workflow Automation',
    shortTagline: 'Eliminate repetitive manual spreadsheet work and deliver scheduled, error-free reports.',
    iconName: 'Cpu',
    category: 'Automation',
    problem: 'Skilled team members spend 10–15 hours every week manually downloading files, formatting columns, calculating formulas, and emailing PDFs to stakeholders.',
    solution: 'I build automated Python, cloud, and script-based workflows that automatically ingest source files, clean and transform data, calculate metrics, and generate formatted reports.',
    outcome: 'Zero wasted hours on manual data entry, 100% elimination of calculation mistakes, and automatic delivery on schedule.',
    deliverables: [
      'Automated Excel / CSV Ingestion & Processing',
      'Scheduled Daily/Weekly PDF & Excel Report Generators',
      'Automated Email & Slack/Teams KPI Delivery',
      'Multi-Sheet Data Consolidation Pipelines',
      'Automated Financial & Operational Reconciliation',
      'Data Integrity & Schema Validation Scripts'
    ],
    exampleScenario: {
      inputs: '5 daily Excel dumps from different branch locations emailed every evening.',
      transformation: 'A Python script automatically triggers, standardizes date/currency formats, merges rows, validates totals, and flags discrepancies.',
      outputs: 'Consolidated master dataset updated in the cloud and a clean executive PDF summary emailed directly to directors by 8:00 AM.'
    },
    targetIndustries: ['Finance & Accounting', 'Audit & Compliance', 'Operations', 'Agencies', 'Retail']
  },
  {
    id: 'etl-data-pipelines',
    number: '04',
    title: 'ETL / Data Pipelines & System Integration',
    shortTagline: 'Dependable data ingestion, transformation, and warehouse loading across all your tools.',
    iconName: 'Network',
    category: 'Engineering',
    problem: 'Your business data lives siloed in payment gateways, CRM systems, ERPs, flat files, and web databases without a unified repository.',
    solution: 'I architect robust Extract-Transform-Load (ETL) pipelines using Python, SQL, AWS, and modern cloud databases to continuously sync and structure your data.',
    outcome: 'A unified, clean, and reliable data foundation ready for dashboards, machine learning, and business intelligence without manual intervention.',
    deliverables: [
      'API-to-Database Automated Ingestion Connectors',
      'Scheduled Batch & Incremental Data Pipelines',
      'Cloud Storage & Data Lake Ingestion (AWS S3, GCP)',
      'Data Warehouse Modeling (BigQuery, Snowflake, SQL Server)',
      'Automated Pipeline Failure Alerting & Recovery',
      'End-to-End Data Lineage & Schema Documentation'
    ],
    exampleScenario: {
      inputs: 'Shopify sales API, Razorpay payment gateway webhooks, and Google Ads spend.',
      transformation: 'Automated ETL worker cleaning timestamps, unifying customer IDs, and calculating true net customer acquisition cost.',
      outputs: 'Clean, centralized dimensional data warehouse updated every hour.'
    },
    targetIndustries: ['E-commerce', 'Fintech', 'SaaS', 'Modern Enterprises', 'Multi-System Operations']
  },
  {
    id: 'data-modularization-optimization',
    number: '05',
    title: 'Data Modularization & SQL Query Optimization',
    shortTagline: 'Faster query speeds, lower cloud infrastructure bills, and clean maintainable models.',
    iconName: 'Zap',
    category: 'Engineering',
    problem: 'Slow queries, bloated database tables, and unoptimized SQL scripts drive up cloud billing on BigQuery/Snowflake while causing dashboards to lag.',
    solution: 'I audit, modularize, and index your database architectures, refactoring complex queries and consolidating redundant business calculations into clean data modules.',
    outcome: 'Up to 30–50% reduction in cloud data processing costs and near-instant dashboard loading times.',
    deliverables: [
      'Comprehensive SQL Query Performance Audit',
      'BigQuery & Snowflake Cost Reduction Optimization',
      'Reusable Data Modularization & View Architectures',
      'Table Indexing, Partitioning & Clustering Strategy',
      'Elimination of Redundant Calculation Code',
      'Documentation of Core Business Logic Definitions'
    ],
    exampleScenario: {
      inputs: 'Expensive, 500-line legacy SQL queries scanning terabytes of unpartitioned data on BigQuery.',
      transformation: 'Restructured with CTEs, partitioned tables by date, clustered by client ID, and pre-aggregated daily summaries.',
      outputs: 'Query run times dropped from 45s to 2s, cutting cloud querying costs by 30%.'
    },
    targetIndustries: ['Cloud-First Companies', 'BigQuery/Snowflake Users', 'Data Engineering Teams']
  },
  {
    id: 'database-design-setup',
    number: '06',
    title: 'Database Architecture & Data Migration',
    shortTagline: 'Graduate safely from fragile spreadsheet dependencies to scalable relational databases.',
    iconName: 'Database',
    category: 'Engineering',
    problem: 'Your team has outgrown Google Sheets and Excel, experiencing version conflicts, accidental data deletion, and row limit constraints.',
    solution: 'I design, build, and deploy clean relational and NoSQL database structures (PostgreSQL, SQL Server, MongoDB) tailored to your operational workflows.',
    outcome: 'Secure, multi-user, backup-protected data storage that scales seamlessly with your business transactions.',
    deliverables: [
      'Relational Database Schema Design & Normalization',
      'Migration from Spreadsheets to SQL / Cloud Databases',
      'Role-Based Access Control & Security Policies',
      'Master Data Management (Customer, Product, Vendor Masters)',
      'Automated Backup & Disaster Recovery Setup',
      'Structured Database Migration Scripts & Documentation'
    ],
    exampleScenario: {
      inputs: '20+ shared Google Sheets managed by 15 sales reps with frequent data overwrites.',
      transformation: 'Modeled a normalized PostgreSQL database with strict foreign keys, validation constraints, and user roles.',
      outputs: 'Robust centralized database with zero data corruption and instant multi-user read/write access.'
    },
    targetIndustries: ['Growing SMEs', 'Service Companies', 'Logistics', 'Wholesale Distributors']
  },
  {
    id: 'data-cleaning-quality',
    number: '07',
    title: 'Data Cleaning & Automated Quality Assurance',
    shortTagline: 'Bad data creates bad reporting and costly decisions. I build automated cleansing filters.',
    iconName: 'CheckCircle2',
    category: 'Engineering',
    problem: 'Customer records are filled with duplicate phone numbers, misspelled cities, missing tax IDs, and inconsistent date formats that ruin reporting accuracy.',
    solution: 'I build automated data cleansing and validation rules that detect anomalies, standardize formats, deduplicate entries, and quarantine corrupted rows.',
    outcome: 'Pristine master datasets that stakeholders can trust 100% for accounting, audits, and business strategy.',
    deliverables: [
      'Automated Fuzzy Matching & Deduplication Workflows',
      'Missing Value Imputation & Anomaly Quarantining',
      'Format Normalization (Names, Phones, GSTIN, Addresses)',
      'Automated Data Quality Scorecards & Audit Logs',
      'Legacy Data Cleansing & Historical Harmonization',
      'Pre-Ingestion Schema Validation Guardrails'
    ],
    exampleScenario: {
      inputs: '50,000 legacy customer records with duplicate phone numbers, casing errors, and broken postal codes.',
      transformation: 'Applied automated Python regex, deduplication algorithms, and address validation routines.',
      outputs: 'Standardized, deduplicated clean customer master with a 100% verified schema score.'
    },
    targetIndustries: ['Healthcare', 'Auditing & Compliance', 'Banking/Fintech', 'Retail', 'Education']
  },
  {
    id: 'business-process-automation',
    number: '08',
    title: 'Business Process & Workflow Automation',
    shortTagline: 'Connect your business apps to run tasks automatically without human intervention.',
    iconName: 'Workflow',
    category: 'Automation',
    problem: 'Customer inquiries, invoice processing, inventory updates, and order confirmations require manual copying between email, CRM, and accounting software.',
    solution: 'I architect end-to-end process automations integrating APIs, webhooks, and custom scripts to synchronize operations seamlessly.',
    outcome: 'Immediate operational speed, higher customer satisfaction, and lower administrative overhead.',
    deliverables: [
      'Multi-App Operational Workflow Integration',
      'Automated Invoice & Receipt Parsing',
      'Customer Onboarding & Notification Triggers',
      'Automated Inventory Threshold Alerts (WhatsApp / Email)',
      'Approval Workflow & Status Tracking Automations',
      'Custom Python / API Automation Scripts'
    ],
    exampleScenario: {
      inputs: 'A new customer fills out a web form for a service booking.',
      transformation: 'The workflow creates a CRM record, generates a preliminary service estimate, notifies the account manager on WhatsApp, and schedules a follow-up task.',
      outputs: 'Zero manual hand-offs with an instant response sent to the customer in under 10 seconds.'
    },
    targetIndustries: ['Service Businesses', 'Agencies', 'Manufacturing', 'Real Estate', 'Logistics']
  },
  {
    id: 'automated-quotation-systems',
    number: '09',
    title: 'Automated Quotation & Proposal Systems',
    shortTagline: 'Generate branded, tax-accurate B2B quotations and invoices in under 60 seconds.',
    iconName: 'FileSpreadsheet',
    category: 'Automation',
    problem: 'Sales teams in electrical, hardware, and manufacturing sectors spend 30–60 minutes manually calculating GST, discounts, and drafting quotations in Word.',
    solution: 'I build custom quotation engines featuring customer master auto-fills, multi-tier GST logic, discount calculators, and one-click PDF generation.',
    outcome: 'Sales reps respond to customer inquiries 10x faster with 100% math accuracy and professional company branding.',
    deliverables: [
      'Customer & Product Master Catalog Integration',
      'Automated Multi-Rate GST & Tax Calculation Engine',
      'Tiered Volume Discount & Shipping Logic',
      'One-Click Branded PDF Generation & Printing',
      'Quotation Versioning, Search & Revision Tracking',
      'Direct Email / WhatsApp Proposal Dispatch'
    ],
    exampleScenario: {
      inputs: 'Hardware distributor needing to quote 20 electrical components with mixed 18% and 28% GST plus 5% bulk discount.',
      transformation: 'Sales rep selects customer and clicks items; engine calculates taxes, adds terms, and formats PDF.',
      outputs: 'Professional, numbered quotation PDF generated and sent via WhatsApp to the client in under 45 seconds.'
    },
    targetIndustries: ['Electrical & Hardware Suppliers', 'Construction Suppliers', 'B2B Manufacturers', 'Equipment Distributors']
  },
  {
    id: 'web-development',
    number: '10',
    title: 'End-to-End Responsive Web Development',
    shortTagline: 'High-performance, mobile-optimized, and SEO-ready websites that turn visitors into clients.',
    iconName: 'Globe',
    category: 'Web & Tools',
    problem: 'Your current website is slow, looks broken on mobile phones, lacks clear service positioning, or fails to generate business inquiries.',
    solution: 'I plan, design, develop, test, and deploy modern, responsive web platforms built with React, TypeScript, Tailwind CSS, and robust SEO architecture.',
    outcome: 'A fast, trustworthy, and conversion-optimized digital home that looks stunning on every screen from mobile to desktop.',
    deliverables: [
      'Full-Stack & SPA Web Development (React, TypeScript, Tailwind)',
      'Mobile-First Responsive Layouts & Performance Tuning',
      'Clear Information Architecture & Value-Proposition Copy',
      'Integrated Contact, Lead Capture & WhatsApp Triggers',
      'Technical SEO Foundations, Meta Tags & Sitemap Setup',
      'Production Deployment, Domain Setup & QA Testing'
    ],
    exampleScenario: {
      inputs: 'A growing healthcare clinic or agricultural brand with no modern web presence.',
      transformation: 'Designed brand architecture, built responsive product/service catalogs, integrated direct appointment CTAs, and deployed with sub-2s speed.',
      outputs: 'Live, high-converting production website (e.g., Flora Farming, Uyirveda Health Care).'
    },
    targetIndustries: ['Healthcare & Clinics', 'Direct-to-Consumer Brands', 'Professional Services', 'Consultants', 'Startups']
  },
  {
    id: 'custom-internal-tools',
    number: '11',
    title: 'Custom Internal Tools & Utility Portals',
    shortTagline: 'Purpose-built software tools tailored specifically to how your team actually works.',
    iconName: 'Wrench',
    category: 'Web & Tools',
    problem: 'Off-the-shelf software is either too expensive, overly complicated, or missing the exact workflow your team needs every day.',
    solution: 'I build lightweight, focused internal tools (Streamlit web apps, React management panels, calculation engines) that solve your specific operational bottlenecks.',
    outcome: 'Streamlined team productivity without paying high monthly SaaS subscription fees for unused features.',
    deliverables: [
      'Custom Data Upload & Validation Portals',
      'Interactive Streamlit Operational Utilities',
      'Employee Calculation & Rate Calculators',
      'Internal Audit & Quality Checklist Tools',
      'Lightweight CRM / Lead Management Interfaces',
      'Secure User Authentication & Export Utilities'
    ],
    exampleScenario: {
      inputs: 'Operations team needing to verify vendor bills against purchase orders with custom tolerance rules.',
      transformation: 'Built a lightweight internal web tool where staff upload invoices, review flagged differences, and approve with one click.',
      outputs: 'Audit cycle time dropped by 50% with complete historical action logging.'
    },
    targetIndustries: ['Operational Teams', 'Audit & Compliance', 'Field Sales', 'Logistics', 'SMEs']
  },
  {
    id: 'analytics-kpi-consulting',
    number: '12',
    title: 'Analytics Consulting & KPI Architecture Design',
    shortTagline: 'Define what metrics actually matter before spending money on dashboards or software.',
    iconName: 'Compass',
    category: 'Analytics',
    problem: 'Companies track dozens of vanity metrics that do not guide action, while lacking visibility into the numbers that directly determine profit and survival.',
    solution: 'I work with founders and leadership to audit existing reporting, eliminate vanity noise, establish standardized KPI definitions, and map out a practical analytics roadmap.',
    outcome: 'Complete clarity on what numbers to track, who owns them, and what specific action to take when a metric moves.',
    deliverables: [
      'Comprehensive Reporting & Metrics Audit',
      'Executive KPI Dictionary with Standardized Formulas',
      'Data Gap Identification & Collection Recommendations',
      'Prioritized 90-Day Analytics & Automation Roadmap',
      'Tool Selection Guidance (Power BI vs Tableau vs Streamlit vs Custom)',
      'Executive Stakeholder Training & Governance Framework'
    ],
    exampleScenario: {
      inputs: 'A scaling SME struggling with conflicting sales numbers between finance and sales departments.',
      transformation: 'Audited metric formulas, aligned definitions of "Gross Revenue", "Net Churn", and "Lead Qualified", and designed an unified KPI scorecard.',
      outputs: 'A unified single-page executive scorecard with zero discrepancy between department heads.'
    },
    targetIndustries: ['Founders & CEOs', 'Operations Directors', 'Growing Startups', 'SME Management']
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  // 1. EY
  {
    id: 'saurabh-goyal',
    name: 'Saurabh Goyal',
    role: 'Technology Enthusiast',
    company: 'Ernst & Young GDS',
    companyKey: 'ey',
    relationship: 'Senior Colleague; collaborated on integration and API development initiatives',
    date: 'August 5, 2026',
    linkedinUrl: 'https://www.linkedin.com/in/technology-enthusiast-saurabhgoyal/',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/C5603AQFe5hLvKQXizw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1622067286009?e=1787788800&v=beta&t=-e-TlN83RsbzBqc05IQFcyr20--Iz_4U7BpYkNGw3Kw',
    quote: `I've had the pleasure of working with Sanjay on integration and API development initiatives. He is a dependable professional with strong technical skills, excellent problem-solving abilities, and a proactive approach to ownership and delivery. Sanjay consistently demonstrates accountability, adaptability, and attention to detail. He works effectively across teams, communicates clearly, and delivers high-quality solutions aligned with business objectives. His willingness to take initiative and support team success makes him a valuable contributor to any organization. I highly recommend Sanjay and look forward to seeing his continued growth and success.`,
    highlightPhrase: 'A dependable professional with strong technical skills, excellent problem-solving abilities, and a proactive approach to ownership and delivery.',
    verified: true
  },
  {
    id: 'kishor',
    name: 'Kishor',
    role: 'Technology Architect | Cloud Integrations for Insurance & BFSI | Ex-Oracle, Dell, Skillsoft & Calyx',
    company: 'Ernst & Young GDS',
    companyKey: 'ey',
    relationship: 'Managed Sanjay directly at EY',
    date: 'August 8, 2026',
    linkedinUrl: 'https://www.linkedin.com/in/kishor-nrpt/',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/C5603AQF2fDUWpBWRKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517403884557?e=1787788800&v=beta&t=KBWAac7nZ9KTbVA2U6ck2QaNf-RRyIOrU2ihu-2m3qo',
    quote: `I highly recommend Sanjay Dharan. He joined our team as a fresher and immediately made an impact on our AWS insurance integration projects. Despite his background being in data science, he adapted fast and was exceptionally good at using AI tools to find smart solutions to whatever we were working on. Most importantly, he was a completely dependable teammate who was always available when we needed him. Sanjay is leaving to follow his passion at a data science startup, and I know he will be an excellent asset to them.`,
    highlightPhrase: 'Adapted fast and was exceptionally good at using AI tools to find smart solutions... a completely dependable teammate.',
    verified: true
  },
  // 2. Tacheon
  {
    id: 'arthitha-ravindran',
    name: 'Arthitha Ravindran',
    role: 'Senior Growth Lead',
    company: 'Tacheon Business Growth Consulting',
    companyKey: 'tacheon',
    relationship: 'Worked closely on growth analytics and GTM strategy models',
    date: 'March 2025',
    linkedinUrl: 'https://www.linkedin.com/in/sanjay-dharan-99736321b/details/recommendations/',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQE19lYyrxNbbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694519643727?e=1788998400&v=beta&t=eAzFduR0mg7bTb_ie3dJm5yquBwTxef0MPSNDL8n_uE',
    quote: `I've had the pleasure of working closely with Sanjay, and I can confidently say he is one of the most proactive and dedicated professionals I've come across. He consistently goes above and beyond to ensure things get done, often stepping outside of his immediate responsibilities to solve problems and support the team. What truly sets him apart is his ability to maintain a positive and lively atmosphere, even during high-pressure situations. He's a true team player who not only brings solutions to the table but also brings people together...`,
    highlightPhrase: 'One of the most proactive and dedicated professionals... consistently goes above and beyond to ensure things get done.',
    verified: true
  },
  // 3. Hyundai
  {
    id: 'vishnu-bhaskara',
    name: 'Vishnu Bhaskara',
    role: 'Team Lead, Operational Audit',
    company: 'Hyundai Motor India Ltd.',
    companyKey: 'hyundai',
    relationship: 'Team Lead during 6-month Data Analytics internship',
    date: 'September 2024',
    linkedinUrl: 'https://www.linkedin.com/in/sanjay-dharan-99736321b/details/recommendations/',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGt14ofB2op2g/profile-displayphoto-crop_800_800/B56Zn2QeHjIsAI-/0/1760773138885?e=1788998400&v=beta&t=-y9cgoSsObCrOKBBxFuDOL5mvl8kCGiTEmFByI1UJO8',
    quote: `Sanjay worked in Hyundai Motors India as a part of an internship program for 6 months. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed data analytics project on time. I'm grateful to have worked with Mr. Sanjay and highly recommend him to any company.`,
    highlightPhrase: 'Consistently gave 100 percent effort... played a significant role in ensuring we completed data analytics projects on time.',
    verified: true
  },
  {
    id: 'adithya-kanakraj',
    name: 'Adithya Kanakraj',
    role: 'Domain Head, Internal Audit',
    company: 'Hyundai Motor India Ltd.',
    companyKey: 'hyundai',
    relationship: 'Supervised Sanjay in Data Analytics & Operational Audit',
    date: 'September 2024',
    linkedinUrl: 'https://www.linkedin.com/in/sanjay-dharan-99736321b/details/recommendations/',
    avatarUrl: 'https://media.licdn.com/dms/image/v2/C5603AQHesBIGsZXwxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1595674596449?e=1788998400&v=beta&t=dfHcAnr-o_Rv2Avmn0GIXqtNYrOmAWSCQ6Rb1uOdcMY',
    quote: `I had the pleasure of supervising Sanjay during his internship in Data Analytics. He demonstrated exceptional skills in data analysis and visualization, and Python programming. Sanjay showcased strong problem-solving abilities, a positive learning mindset, and quick adaptability. He has the skills, passion, and potential to excel. I confidently endorse Sanjay...`,
    highlightPhrase: 'Demonstrated exceptional skills in data analysis, visualization, and Python... strong problem-solving abilities and adaptability.',
    verified: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data & Analytics',
    description: 'Statistical modeling, cohort wrangling, regression analysis, and empirical inference.',
    skills: [
      { name: 'Python (Pandas, NumPy)', proficiency: 'Core', highlight: true },
      { name: 'Advanced SQL', proficiency: 'Core', highlight: true },
      { name: 'SciPy & Statsmodels', proficiency: 'Advanced', highlight: true },
      { name: 'Data Wrangling & Cleaning', proficiency: 'Core', highlight: true },
      { name: 'Statistical Modeling', proficiency: 'Core', highlight: true },
      { name: 'Cohort & Funnel Analysis', proficiency: 'Advanced', highlight: true },
      { name: 'Trend & Outlier Detection', proficiency: 'Core', highlight: true },
      { name: 'Hypothesis Testing', proficiency: 'Advanced' },
      { name: 'Matplotlib & Seaborn', proficiency: 'Advanced' },
      { name: 'Jupyter Notebooks', proficiency: 'Core' }
    ]
  },
  {
    title: 'BI & Visualization',
    description: 'Executive dashboards, interactive filtering, KPI generation, and stakeholder reporting.',
    skills: [
      { name: 'Tableau', proficiency: 'Core', highlight: true },
      { name: 'Power BI', proficiency: 'Core', highlight: true },
      { name: 'Streamlit', proficiency: 'Core', highlight: true },
      { name: 'KPI Architecture Design', proficiency: 'Core', highlight: true },
      { name: 'End-to-End Dashboard Design', proficiency: 'Core', highlight: true },
      { name: 'Looker Studio', proficiency: 'Advanced' },
      { name: 'Advanced Excel & Power Query', proficiency: 'Core' },
      { name: 'Apache Superset', proficiency: 'Familiar' }
    ]
  },
  {
    title: 'Data Engineering & Databases',
    description: 'Scalable data models, query optimization, data warehouse architectures, and schema design.',
    skills: [
      { name: 'Google BigQuery', proficiency: 'Core', highlight: true },
      { name: 'Snowflake', proficiency: 'Advanced', highlight: true },
      { name: 'PostgreSQL / SQL Server', proficiency: 'Core', highlight: true },
      { name: 'SQL Query Optimization', proficiency: 'Core', highlight: true },
      { name: 'ETL Pipeline Design', proficiency: 'Core', highlight: true },
      { name: 'Schema Normalization', proficiency: 'Advanced' },
      { name: 'MongoDB / NoSQL', proficiency: 'Advanced' },
      { name: 'Oracle Database', proficiency: 'Familiar' }
    ]
  },
  {
    title: 'Automation & Cloud',
    description: 'Script-based automation, cloud storage pipelines, serverless triggers, and data quality enforcement.',
    skills: [
      { name: 'Python Automation Scripts', proficiency: 'Core', highlight: true },
      { name: 'AWS S3 & Lambda', proficiency: 'Advanced', highlight: true },
      { name: 'AWS EC2', proficiency: 'Advanced' },
      { name: 'Data Quality Protocols', proficiency: 'Core', highlight: true },
      { name: 'Recurring Report Scheduling', proficiency: 'Core', highlight: true },
      { name: 'Microsoft Azure Fundamentals', proficiency: 'Advanced' },
      { name: 'Git / GitHub CI/CD', proficiency: 'Core' }
    ]
  },
  {
    title: 'Web & Digital Solutions',
    description: 'Full responsive web development, internal tool creation, SEO foundations, and conversion design.',
    skills: [
      { name: 'React & TypeScript', proficiency: 'Core', highlight: true },
      { name: 'Tailwind CSS', proficiency: 'Core', highlight: true },
      { name: 'REST APIs & Webhooks', proficiency: 'Advanced', highlight: true },
      { name: 'Information Architecture', proficiency: 'Advanced' },
      { name: 'Quotation Generation Logic', proficiency: 'Core', highlight: true },
      { name: 'SEO & Performance Tuning', proficiency: 'Advanced' },
      { name: 'Cross-Device QA & Deployment', proficiency: 'Core' }
    ]
  },
  {
    title: 'Professional Strengths',
    description: 'Bridging commercial goals with technical execution, documentation, and stakeholder ownership.',
    skills: [
      { name: 'Business Requirement Translation', proficiency: 'Core', highlight: true },
      { name: 'Cross-Functional Stakeholder Comms', proficiency: 'Core', highlight: true },
      { name: 'Structured Documentation & Playbooks', proficiency: 'Core', highlight: true },
      { name: 'Proactive Ownership & Delivery', proficiency: 'Core', highlight: true },
      { name: 'Adaptability in High-Pace Teams', proficiency: 'Core', highlight: true },
      { name: 'Practical Problem Solving', proficiency: 'Core', highlight: true }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) – Artificial Intelligence & Data Science',
    institution: 'KPR Institute of Engineering and Technology',
    university: 'Anna University, Tamil Nadu',
    duration: '2021 – 2025',
    location: 'Tamil Nadu, India',
    coursework: [
      'Applied Mathematics for Data Analytics',
      'Probability & Statistical Inference',
      'Machine Learning & Predictive Modeling',
      'Database Management Systems & SQL',
      'Data Structures & Algorithms',
      'Data Warehousing & Business Intelligence'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    verified: true
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    verified: true
  },
  {
    title: 'GitHub Copilot Certification',
    issuer: 'Microsoft / GitHub',
    verified: true
  },
  {
    title: 'Acquiring and Managing Data',
    issuer: 'NASSCOM FutureSkills Prime',
    verified: true
  },
  {
    title: 'AWS S3 & Kubernetes Fundamentals',
    issuer: 'Coursera',
    verified: true
  },
  {
    title: 'Advanced Python Development',
    issuer: 'Xebia',
    verified: true
  }
];

export const PROBLEM_SOLVER_CARDS = [
  {
    icon: 'TrendingUp',
    question: 'Need to understand your true sales & customer trends?',
    answer: 'I build unified analytics models and executive KPI dashboards that highlight top SKUs, customer churn risks, and profitable growth channels.',
    actionLabel: 'Explore Analytics Solutions',
    targetServiceId: 'data-analytics-bi'
  },
  {
    icon: 'Clock',
    question: 'Spending 10+ hours every week preparing Excel reports?',
    answer: 'I automate the entire pipeline: automatic data extraction, cleaning, calculation, and formatted PDF/dashboard distribution before you start your day.',
    actionLabel: 'Automate My Reporting',
    targetServiceId: 'data-reporting-automation'
  },
  {
    icon: 'Layers',
    question: 'Is your business data scattered across files and apps?',
    answer: 'I centralize, clean, and structure your records into a dependable database or cloud data warehouse that your entire team can trust.',
    actionLabel: 'Structure My Data',
    targetServiceId: 'etl-data-pipelines'
  },
  {
    icon: 'FileText',
    question: 'Preparing B2B customer quotations manually in Word?',
    answer: 'I create automated quotation engines with master product auto-fills, GST calculations, and instant branded PDF generation in 60 seconds.',
    actionLabel: 'Build Quotation System',
    targetServiceId: 'automated-quotation-systems'
  },
  {
    icon: 'Globe',
    question: 'Need a fast, professional, high-converting website?',
    answer: 'I plan, build, test, and deploy modern responsive web platforms with clear positioning, mobile perfection, and integrated lead capture.',
    actionLabel: 'Build My Website',
    targetServiceId: 'web-development'
  },
  {
    icon: 'LayoutDashboard',
    question: 'Does management lack clear real-time visibility?',
    answer: 'I build clean, focused executive dashboards in Tableau, Power BI, or Streamlit with direct drill-downs and zero spreadsheet clutter.',
    actionLabel: 'Design Executive Dashboard',
    targetServiceId: 'dashboard-development'
  }
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Tell Me The Problem',
    description: 'We connect to understand your specific business bottleneck, data sources, spreadsheets, or web objectives.'
  },
  {
    step: '02',
    title: 'Practical Solution Proposal',
    description: 'I outline the most efficient technical architecture, timeline, and deliverables—focusing on ROI, not unnecessary complexity.'
  },
  {
    step: '03',
    title: 'Development & Pipeline Build',
    description: 'I build the analytics model, automation pipeline, dashboard, database, or responsive web application with clean, maintainable code.'
  },
  {
    step: '04',
    title: 'Rigorous Testing & Validation',
    description: 'We validate calculations, edge cases, mobile responsiveness, and data integrity against your real operational records.'
  },
  {
    step: '05',
    title: 'Deployment & Documentation',
    description: 'I deploy the solution, train your team, and provide structured documentation and playbooks so your workflow runs seamlessly.'
  },
  {
    step: '06',
    title: 'Continuous Improvement',
    description: 'As your business scales, we refine data models, add automated triggers, and expand capabilities.'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Business Thinking + Technical Execution',
    description: 'I first understand what commercial outcome you need (revenue visibility, hours saved, faster audit cycle), then build the exact right data or software solution.'
  },
  {
    title: 'Automation Mindset',
    description: 'I actively hunt down repetitive manual work, fragile spreadsheet copy-pasting, and disconnected hand-offs, replacing them with reliable code.'
  },
  {
    title: 'Data-Driven Reality',
    description: 'The goal is never just another dashboard. The goal is clean data, fewer mistakes, actionable signal, and faster leadership decisions.'
  },
  {
    title: 'End-to-End Ownership',
    description: 'From understanding messy client requirements to data engineering, UI development, automated testing, and production deployment—I take full delivery accountability.'
  },
  {
    title: 'Clear Communication & Documentation',
    description: 'Endorsed by senior leaders at EY, Tacheon, and Hyundai for proactive ownership, quick adaptability, and clear stakeholder communication.'
  }
];
