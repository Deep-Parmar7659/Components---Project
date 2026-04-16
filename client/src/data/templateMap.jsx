import LandingTemplate from "../components/templates/LandingTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import AuthTemplate from "../components/templates/AuthTemplate";

export const templateMap = {
  "auth-template": {
    component: <AuthTemplate />,
    fileName: "AuthTemplate.jsx",
    file: "/templates/auth-page.zip",
  },

  "dashboard-template": {
    component: <DashboardTemplate />,
    fileName: "DashboardTemplate.jsx",
    file: "/templates/dashboard.zip",
  },

  "landing-template": {
    component: <LandingTemplate />,
    fileName: "LandingTemplate.jsx",
    file: "/templates/landing-page.zip",
  },
};
