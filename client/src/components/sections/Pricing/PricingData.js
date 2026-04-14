// 1) Pricing plans data:-
// This separates UI from data.
// Monthly & Yearly Plan Separated - we will switch using React state toggle.
export const pricingPlans = {
  monthly: [
    {
      title: "Basic",
      price: "9",
      features: ["5 Projects", "10GB Storage", "Basic Support"],
    },
    {
      title: "Pro",
      price: "29",
      features: ["Unlimited Projects", "100GB Storage", "Priority Support"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "99",
      features: ["Unlimited Projects", "1TB Storage", "24/7 Support"],
    },
  ],
  yearly: [
    {
      title: "Basic",
      price: "90",
      features: ["5 Projects", "10GB Storage", "Basic Support"],
    },
    {
      title: "Pro",
      price: "290",
      popular: true,
      features: ["Unlimited Projects", "100GB Storage", "Priority Support"],
    },
    {
      title: "Enterprise",
      price: "990",
      features: ["Unlimited Projects", "1TB Storage", "24/7 Support"],
    },
  ],
};
