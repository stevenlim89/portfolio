const portfolio = {
  personal: {
    name: 'Steven Lim',
    title: 'Software Development Engineer III',
    subtitle: 'SRE & Edge Platform · Edmonds, WA',
    email: 'stevenlim890@gmail.com',
    phone: '(909) 969-0569',
    location: 'Edmonds, WA',
    citizenship: 'US Citizen',
  },
  metrics: [
    { value: '~8B', label: 'Requests / Day', description: 'Edge platform traffic handled daily' },
    { value: '$300K', label: 'Annual Savings', description: 'Infrastructure cost reduction' },
    { value: '50%', label: 'Latency Cut', description: 'API gateway migration result' },
    { value: '20K+', label: 'Users Migrated', description: 'Automated to Okta in < 1 hour' },
  ],
  experience: [
    {
      company: 'Expedia Group',
      location: 'Seattle, WA',
      role: 'Software Development Engineer III',
      team: 'SRE and Edge Platform teams',
      period: 'DEC 2021 – Present',
      current: true,
      highlights: [
        'Built and maintained features for Expedia\'s internal edge platform handling **~8 billion requests/day**, including a **50% reduction** in upstream request headers that lowered storage/logging costs, simplified network architecture, and eliminated the majority of header-related errors.',
        'Led the migration of a high-traffic API gateway (**25 million requests/day**) from Apigee/GCP to an internal platform with percentage-based traffic shifting on Akamai CDN and near-zero downtime; reduced latency by **50%**, cut costs by **~$300k annually**, and simplified architecture by **40%**.',
        'Developed a full-stack self-service application (Node.js, React, GoLang) enabling teams to assess application criticality through a single form; integrated ServiceNow and Slack APIs to automate data gathering and stakeholder notifications.',
        'Built a Python MCP server exposing Akamai Property Manager API (PAPI) as structured, AI-consumable tools for Claude, enabling engineers to interact with platform configuration via natural language; reduced support queue by **20%**.',
        'Instrumented mission-critical platform services with DataDog APM, custom metrics, and monitors to provide end-to-end visibility, anomaly detection, and faster incident resolution.',
        'Acted as Incident Commander for high-severity platform incidents, driving cross-team coordination, RCAs, and long-term stability improvements.',
      ],
    },
    {
      company: 'Motorola Solutions',
      location: 'Seattle, WA',
      role: 'Senior Software Engineer',
      period: 'MAR 2020 – DEC 2021',
      current: false,
      highlights: [
        'Built a self-service cloud provisioning portal in Node.js enabling teams to onboard projects to Azure and deploy their services independently, significantly reducing dependency on central platform teams.',
        'Architected an Azure DevOps → GitHub Enterprise migration platform in Node.js using Azure Service Bus and a microservices architecture, allowing teams to self-migrate projects and bootstrap GitHub Actions pipelines.',
        'Designed an Azure Pipelines task extension to enforce FedRAMP-compliant deployment standards as a reusable platform component — enabling engineering teams to adopt compliant pipelines with a single-click integration.',
        'Developed a pipeline log aggregation service using the Azure DevOps REST API, exporting structured logs to Kibana hourly for platform-wide observability into deployment trends and compliance.',
        'Built a cost allocation dashboard aggregating Azure resource spending per project, giving platform consumers and stakeholders actionable visibility into their cloud footprint.',
      ],
    },
    {
      company: 'Liferay',
      location: 'Los Angeles, CA',
      role: 'Software Engineer',
      period: 'APR 2018 – SEPT 2019',
      current: false,
      highlights: [
        'Designed a provisioning module that automated distribution of learning materials on platform registration, reducing manual workflow by **50%** and enabling product-led growth at scale.',
        'Developed a REST API exposing training data to third-party integrations in a secure, standardized way.',
        'Led migration of the payment processing module from PayPal to Stripe, consolidating a three-step checkout into a single unified flow.',
        'Authored Python automation scripts to migrate **20,000+ user accounts** from a legacy identity provider to Okta in under **one hour**.',
      ],
    },
    {
      company: 'Corelation',
      location: 'San Diego, CA',
      role: 'Software Developer',
      period: 'FEB 2016 – APR 2018',
      current: false,
      highlights: [
        'Engineered Java transaction processing systems for credit union members, building reusable libraries and interfaces to improve efficiency and adaptability across client configurations.',
        'Led automation of Jaspersoft report generation from SQL queries, reducing report creation time from **hours to under 10 minutes**.',
      ],
    },
  ],
  skills: [
    {
      category: 'Platform & Infrastructure',
      icon: '⚙️',
      items: ['Akamai', 'Apigee', 'Kubernetes', 'AWS', 'Azure'],
    },
    {
      category: 'Developer Experience',
      icon: '🛠️',
      items: ['Internal Portals', 'Provisioning Tooling', 'Self-Service Platform Design'],
    },
    {
      category: 'API & Integration',
      icon: '🔌',
      items: ['REST', 'Akamai PAPI', 'ServiceNow', 'Slack API', 'Azure DevOps REST API'],
    },
    {
      category: 'AI & Tooling',
      icon: '🤖',
      items: ['MCP Server Development', 'Claude', 'OpenAI (Codex)'],
    },
    {
      category: 'Programming & Web',
      icon: '💻',
      items: ['JavaScript', 'Node.js', 'GoLang', 'Python', 'Java', 'Bash', 'PowerShell', 'React', 'Vue', 'HTML/CSS'],
    },
    {
      category: 'Observability',
      icon: '📊',
      items: ['DataDog APM', 'Splunk', 'Grafana', 'CloudWatch', 'Kibana'],
    },
    {
      category: 'CI/CD',
      icon: '🚀',
      items: ['GitHub Actions', 'Azure Pipelines', 'Jenkins', 'GitHub Enterprise'],
    },
    {
      category: 'Data',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Azure Storage', 'DB2'],
    },
  ],
  education: {
    school: 'University of California San Diego',
    degree: 'B.S. Computer Engineering',
    period: 'AUG 2012 – JUNE 2016',
  },
}

export default portfolio
