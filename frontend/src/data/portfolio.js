export const profile = {
  name: "Vaibhav Mankar",
  title: "Data Analytics Engineer",
  positioning: "Power BI • SQL • Python • Data Automation • Microsoft Fabric",
  summary:
    "I build business-facing analytics, BI dashboards and data automation workflows that turn raw data into usable decisions.",
  location: "India",
  email: "vaibhavmankar57@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhav-mankar-792b561b8/",
  github: "https://github.com/vaibhavmankar05",
  resume:  "/resume/Vaibhav_Mankar_BI_Analytics_Engineer.pdf"
};

export const skills = [
  {
    group: "Business Intelligence",
     items: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Power BI Service",
      "RLS",
      "Tableau"
    ]
  },

  {
    group: "Data & SQL",
    items: [
      "SQL",
      "Joins",
      "Window Functions",
      "Subqueries",
      "Views",
      "Stored Procedures",
      "Excel"
    ]
  },
  {
    group: "Python & Data Automation",
    items: [
      "Python",
      "Pandas",
      "Requests",
      "BeautifulSoup",
      "Selenium",
      "Playwright",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    group: "Web Scraping & Data Extraction",
    items: [
      "Web Scraping",
      "Browser Automation",
      "Dynamic Websites",
      "Data Extraction",
      "API Integration",
      "Document Sourcing",
      "Proxy Infrastructure",
      "Data Cleaning"
    ]
  },
  {
    group: "Data Engineering",
      items: [
          "Microsoft Fabric",
          "Azure Data Factory",
          "Databricks",
          "Delta Lake",
          "Apache Spark",
          "Databricks Workflows",
          "Jobs",
          "Unity Catalog",
          "Lakehouse",
          "Workspace",
          "Compute & Clusters",
          "ETL",
          "Data Pipelines",
          "PostgreSQL"
        ]

  },
  {
    group: "AI & Computer Vision",
    items: [
      "Generative AI",
      "RAG",
      "LLM APIs",
      "YOLO",
      "Ultralytics",
      "OpenCV",
      "FFmpeg",
      "Computer Vision"
    ]
  },
  {
    group: "Application & Real-time Systems",
    items: [
      "React",
      "FastAPI",
      "REST APIs",
      "Leaflet",
      "OpenStreetMap",
      "MQTT",
      "LoRaWAN",
      "BLE",
      "Real-time Tracking"
    ]
  }
];

export const projects = [
  {
    id: "fmcg-analytics",
    category: "BI",
    title: "FMCG Sales Analytics Dashboard",
    summary:
      "Business-facing Power BI dashboard for sales performance, product trends, regional analysis and KPI monitoring.",
    proof: [
      "Power Query transformations",
      "Data modeling and relationships",
      "DAX measures",
      "Interactive business reporting"
    ],
    stack: ["Power BI", "SQL", "Excel", "DAX"],
    link: "https://github.com/vaibhavmankar05/FMCG-Power-BI-Dashboard"
  },

  {
    id: "healthcare-analytics",
    category: "BI",
    title: "Healthcare Analytics Dashboard",
    summary:
      "Interactive reporting solution focused on operational KPIs, trends and business-friendly analysis.",
    proof: [
      "KPI design",
      "Data preparation",
      "Interactive filtering",
      "Visual analysis"
    ],
    stack: ["Power BI", "SQL", "Excel", "DAX"]
  },

  {
    id: "banking-analytics",
    category: "BI",
    title: "Banking & Credit Card Analytics",
    summary:
      "Analytics views for customer, transaction and financial performance indicators.",
    proof: [
      "Customer analysis",
      "Transaction analysis",
      "KPI monitoring",
      "Interactive dashboards"
    ],
    stack: ["Power BI", "SQL", "Excel", "DAX"]
  },
  {
  id: "grocery-tableau",
  category: "BI",
 title: "Grocery Store Sales & Performance Dashboard" ,
  summary:
    "Built an interactive Tableau dashboard to monitor ₹25.0M in total sales and 52,560 orders, with analysis across products, sales channels, employees and monthly sales trends.",
  proof: [
    "₹25.0M Total Sales tracked",
    "52,560 Orders Placed analyzed",
    "₹6.4M Quantity Sold monitored",
    "19 Employees covered across the reporting hierarchy",
    "Sales performance analyzed across 3 channels",
    "Monthly Sales vs Quantity trend analysis",
    "Product-wise Quantity Sold distribution",
    "Interactive filters for Manager, Supervisor, Salesperson, Channel, Product and Order Date"
  ],
  stack: [
    "Tableau",
    "Data Visualization",
    "Calculated Fields",
    "KPI Analysis",
    "Interactive Dashboards"
  ],
  link: "https://public.tableau.com/app/profile/vaibhav.mankar1371/viz/TheGroceryStoreDashboard/GroceryReport"
},
  {
    id: "compliance-automation",
    category: "Automation",
    title: "Compliance Document Sourcing & Automation",
    summary:
      "Python-based automation workflows for product data extraction, supplier research and compliance-document sourcing across 30+ web sources.",
    proof: [
      "30+ website workflows",
      "Product and supplier data extraction",
      "Dynamic website and browser automation",
      "Compliance-document discovery and collection",
      "Structured data cleaning and normalization",
      "Automated CSV/Excel-ready outputs"
    ],
    stack: [
      "Python",
      "Pandas",
      "Requests",
      "BeautifulSoup",
      "Selenium",
      "Playwright",
      "Nimble"
    ]
  },

  {
    id: "geofencing-tracker",
    category: "Backend / Real-Time",
    title: "Real-Time Geofencing & Tracker Monitoring Platform",
    summary:
      "Real-time tracker monitoring platform combining backend APIs, location processing, geofencing logic, databases and interactive map visualization with offline mapping support.",
    proof: [
      "FastAPI REST APIs for tracker locations",
      "Real-time tracker status and location monitoring",
      "Geofence boundary calculations and alerts",
      "Tracker trail and historical location visualization",
      "PostgreSQL-based location data handling",
      "MQTT-based real-time communication",
      "Leaflet and OpenStreetMap map integration",
      "Offline maps using MBTiles and TileServer GL"
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MQTT",
      "Leaflet",
      "OpenStreetMap",
      "MBTiles",
      "TileServer GL"
    ]
  },

  {
    id: "ai-video-ppe",
    category: "AI / Computer Vision",
    title: "AI Video Analytics & PPE Monitoring Platform",
    summary:
      "Computer-vision workflow for processing surveillance video, preparing datasets and supporting PPE monitoring through AI-assisted detection, annotation and analytics.",
    proof: [
      "Large-scale video frame extraction and processing",
      "YOLO/Ultralytics-based object detection experiments",
      "OpenCV and FFmpeg video-processing workflows",
      "Data labeling and detection-result validation",
      "Authenticated monitoring application",
      "Multiple video upload and camera-wise monitoring",
      "Violation snapshots and annotation workflow",
      "Database-backed monitoring and analytics",
      "Analytics dashboard for operational decision-making"
    ],
    stack: [
      "Python",
      "YOLO",
      "Ultralytics",
      "OpenCV",
      "FFmpeg",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Computer Vision"
    ]
  },

];

export const experience = [
  {
    period: "Current focus",
    title: "Power BI Developer / Data Analyst",
    description:
      "Build interactive dashboards and analytical views that connect data preparation, modeling and business questions.",
    bullets: [
      "Power BI reporting across FMCG, healthcare, banking and business-analysis use cases.",
      "SQL and Excel-based data preparation with Power Query, DAX and data modeling.",
      "Develop KPI-driven dashboards with filtering, drill-downs and trend analysis.",
      "Exposure to Power BI Service, workspaces and row-level security concepts."
    ]
  },

  {
    period: "Automation",
    title: "Data Sourcing & Web Automation",
    description:
      "Developed Python-based workflows for repetitive data extraction, supplier research and compliance-document sourcing across 30+ web sources.",
    bullets: [
      "Built reusable workflows for structured product and supplier data extraction.",
      "Worked with static and dynamic websites using Requests, BeautifulSoup, Selenium and Playwright.",
      "Handled browser automation, pagination, document discovery and automated data collection workflows.",
      "Used Pandas for data cleaning, transformation, validation and structured output generation.",
      "Worked with proxy infrastructure for web-access and data-sourcing workflows."
    ]
  },

  {
    period: "Real-time systems",
    title: "Real-Time Geofencing & Tracker Monitoring",
    description:
      "Worked on a real-time tracker monitoring workflow combining backend APIs, location data, geofencing logic, databases and interactive map visualization.",
    bullets: [
      "Developed FastAPI endpoints for simulated and live tracker location data.",
      "Implemented geofence boundary checks, tracker status and location trail visualization.",
      "Worked with PostgreSQL for tracker and location data management.",
      "Integrated MQTT-based communication for real-time tracker workflows.",
      "Integrated Leaflet/OpenStreetMap and offline map infrastructure using MBTiles and TileServer GL."
    ]
  },

  {
    period: "Computer vision & AI",
    title: "AI Video Analytics & PPE Monitoring",
    description:
      "Worked with large camera-video datasets for frame extraction, person-existence classification, AI detection experiments and PPE data-labeling workflows.",
    bullets: [
      "Processed large collections of video frames for computer-vision dataset preparation.",
      "Worked with YOLO/Ultralytics, OpenCV and FFmpeg for video and image processing experiments.",
      "Supported manual data labeling, annotation and validation of computer-vision datasets.",
      "Worked on a web-based PPE monitoring workflow with authorized access, multiple video uploads and camera-wise monitoring.",
      "Supported violation tracking, snapshots, database storage and analytics workflows for operational decision-making."
    ]
  }
];

export const workflow = [
  ["01", "Source", "SQL • Excel • APIs • web data"],
  ["02", "Transform", "SQL • Python • Power Query • ADF"],
  ["03", "Model", "Star schema • relationships • business logic"],
  ["04", "Analyze", "KPIs • trends • segmentation"],
  ["05", "Visualize", "Power BI • Tableau • analytics UI"],
  ["06", "Automate", "Python • browser automation • APIs"]
];