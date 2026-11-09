// Project content for the Project Impact Dashboard.
//
// RULES
// - Only facts Selenia has confirmed. Unknown = null (never a placeholder number).
// - `keyMetrics` of type "fact" hold confirmed static values.
// - `keyMetrics` of type "tracked" read the latest point from tracking/metricsSource;
//   with no real data they render "Data being collected".
// - `toConfirm` lists open items; they are only visible in audit mode (dev or ?audit).

export const PROJECTS = [
  {
    id: "drp",
    name: "DRP",
    monogram: "DRP",
    category: "Operations & Automation System",
    status: "Production",
    summary:
      "A business system designed around the company's actual operational workflow, instead of forcing the business to adapt to generic software.",
    caseStudyRoute: null,
    keyMetrics: [
      { id: "ttp", type: "fact", value: "7 months", label: "Time to Production" },
      { id: "own", type: "fact", value: "End-to-End", label: "Ownership" },
      { id: "users", type: "tracked", metric: "active_users", label: "Active Users" },
      { id: "hours", type: "tracked", metric: "hours_saved", label: "Hours Saved / Month" },
    ],
    story: {
      problem: null,
      solution:
        "Operations automation with dashboards and metrics, shaped around how the company already works so the system adapts to the business, not the other way around.",
      impact: [],
      impactTracked: ["active_users", "hours_saved", "processes_completed"],
    },
    timeline: {
      kind: "duration",
      unit: "Month",
      total: 7,
      phases: [
        { label: "Discovery + Scope", start: 1, end: 1 },
        { label: "Build + Iteration", start: 2, end: 5 },
        { label: "Testing", start: 6, end: 6 },
        { label: "Production", start: 7, end: 7, live: true },
      ],
    },
    role: {
      tags: ["Discovery", "Automation", "Deployment", "Iteration"],
      workMode: null, // "Solo" | "With team"
    },
    complexity: {
      integrations: null,
      coreWorkflows: null,
      userRoles: null,
      locations: null,
      productionSince: null,
    },
    decisions: [],
    tracking: {
      startedAt: null,
      planned: ["active_users", "processes_completed", "automations_triggered", "hours_saved"],
    },
    overview: {
      problem: "Operations automation",
      role: "End-to-End",
      timeToProduction: "7 months",
      users: null,
    },
    toConfirm: [
      "Problem statement: what was happening before the system",
      "Client type (industry, size, country)",
      "Role tags: Product Thinking, System Architecture, Frontend, Backend, Integrations?",
      "Worked solo or with team",
      "Complexity: integrations, workflows, user roles, locations, production date",
    ],
  },
  {
    id: "salon-saas",
    name: "Salon SaaS",
    monogram: "SLN",
    category: "Subscription Software for Salons",
    status: "Production",
    summary:
      "Subscription-based business software for salons, rolled out to 20 initial users with close follow-up and iterated from field feedback.",
    caseStudyRoute: null,
    keyMetrics: [
      { id: "initial", type: "fact", value: "20", label: "Initial Users" },
      { id: "active", type: "tracked", metric: "active_users", label: "Current Active Users" },
      { id: "support", type: "tracked", metric: "support_requests", label: "Support Requests / Month" },
      { id: "retention", type: "tracked", metric: "retention_rate", label: "Retention" },
    ],
    story: {
      problem: null,
      solution:
        "A subscription product launched with 20 first users and close follow-up. Their field feedback drove product iteration, then onboarding, written guides and videos.",
      impact: [
        { text: "Rolled out to 20 initial users", measured: true },
        { text: "Onboarding, guides and videos in place", measured: true },
        { text: "Manual support reduced after guides and videos", measured: false },
      ],
      impactTracked: ["active_users", "support_requests", "retention_rate"],
    },
    timeline: {
      kind: "sequence",
      title: "Rollout path",
      steps: [
        "Initial Users",
        "Field Feedback",
        "Product Iteration",
        "Onboarding",
        "Guides + Videos",
        "Reduced Manual Support",
      ],
    },
    role: {
      tags: ["Product Thinking", "Deployment", "Iteration"],
      workMode: null,
    },
    complexity: {
      integrations: null,
      coreWorkflows: null,
      userRoles: null,
      locations: null,
      productionSince: null,
    },
    decisions: [
      {
        title: "Support was not fully automated — on purpose",
        body:
          "Users send errors and questions through a form, and each request arrives by email. Keeping support human preserved a direct line to real problems while field feedback was still shaping the product.",
      },
    ],
    tracking: {
      startedAt: null,
      planned: ["active_users", "support_requests", "retention_rate"],
    },
    overview: {
      problem: "Business management",
      role: "End-to-End",
      timeToProduction: null,
      users: "20 initial users",
    },
    toConfirm: [
      "Is this AuraDash? (AuraDash case says 'led the frontend')",
      "Problem statement: how salons managed before",
      "Time to production and launch date",
      "Worked solo or with team",
      "How many of the first 20 users are still subscribed",
    ],
  },
  {
    id: "other-systems",
    name: "Other Systems",
    monogram: "SYS",
    category: "Smaller-Scope Business Systems",
    status: "Production",
    summary:
      "Focused systems delivered in short cycles: automations, integrations and internal tools. Smaller scopes typically reach production in about a month.",
    caseStudyRoute: "/proyectos",
    keyMetrics: [
      { id: "ttp", type: "fact", value: "~1 month", label: "Typical Time to Production" },
      { id: "role", type: "fact", value: "Dev / Consultant", label: "Role" },
      { id: "users", type: "fact", value: "Varies", label: "Users" },
    ],
    story: null,
    timeline: null,
    role: {
      tags: ["Frontend", "Backend", "Automation", "Integrations"],
      workMode: "Solo or with teams",
    },
    complexity: null,
    decisions: [],
    tracking: null,
    overview: {
      problem: "Various",
      role: "Developer / Consultant",
      timeToProduction: "~1 month",
      users: "Varies",
    },
    toConfirm: ["List of ~1-month projects with dates, hours and tools"],
  },
];

export const FEATURED_PROJECT_ID = "drp";

export const getProject = (id) => PROJECTS.find((p) => p.id === id) ?? null;
