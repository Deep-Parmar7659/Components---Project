import LandingTemplate from "../components/templates/LandingTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import AuthTemplate from "../components/templates/AuthTemplate";

export const templateMap = {
  "auth-template": {
    component: <AuthTemplate />,
    fileName: "AuthTemplate.jsx",
    file: "/templates/auth-template.zip",
  },

  "dashboard-template": {
    component: <DashboardTemplate />,
    fileName: "DashboardTemplate.jsx",
    file: "/templates/dashboard-template.zip",
  },

  "landing-template": {
    component: <LandingTemplate />,
    fileName: "LandingTemplate.jsx",
    file: "/templates/landing-template.zip",
  },
};
