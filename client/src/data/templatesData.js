// Data → Page → map() → UI
// Data will stored in JSON format and dynamically render using map().
import AuthTemplate from "../components/templates/AuthTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import LandingTemplate from "../components/Templates/LandingTemplate";

export const templatesData = [
  {
    id: 1,
    name: "Auth Template",
    slug: "auth-template",
    component: AuthTemplate,
    file: "/templates/auth-template.zip",
  },
  {
    id: 2,
    name: "Dashboard Template",
    slug: "dashboard-template",
    component: DashboardTemplate,
    file: "/templates/dashboard-template.zip",
  },
  {
    id: 3,
    name: "Landing Template",
    slug: "landing-template",
    component: LandingTemplate,
    file: "/templates/landing-template.zip",
  },
];
