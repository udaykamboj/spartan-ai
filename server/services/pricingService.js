/**
 * Pricing service delivering current tier definitions and features.
 */
export const pricingService = {
  getPlans() {
    return [
      {
        id: "starter",
        name: "Developer Node",
        price: 249,
        interval: "monthly",
        description: "Entry-level neural runtime for single-agent automation and internal workflow tools.",
        features: [
          "1 Active Neural Agent",
          "10,000 Inferences / month",
          "Sub-150ms Response Latency",
          "Community Discord Support",
          "Standard API & Webhook Access",
        ],
        badge: null,
      },
      {
        id: "professional",
        name: "Enterprise Core",
        price: 799,
        interval: "monthly",
        description: "High-throughput intelligence cluster designed for mission-critical enterprise workloads.",
        features: [
          "Unlimited Multi-Agent Swarms",
          "500,000 Inferences / month",
          "Sub-40ms Response Latency",
          "Dedicated Solutions Engineer",
          "SOC2 & HIPAA Compliant Storage",
          "Custom Model Fine-Tuning",
        ],
        badge: "Most Popular",
      },
      {
        id: "sovereign",
        name: "Sovereign Cloud",
        price: null,
        interval: "custom",
        description: "Complete on-premise air-gapped neural cluster with dedicated hardware acceleration.",
        features: [
          "100% On-Premises Air-Gapped Deployment",
          "Zero Third-Party Data Leakage",
          "Custom Hardware Matrix Integration",
          "24/7 Priority Incident Escalation",
          "Tailored SLAs & Architecture Audits",
        ],
        badge: "Air-Gapped",
      },
    ];
  },
};
