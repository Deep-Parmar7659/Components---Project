import LandingTemplate from "../Components/Templates/LandingTemplate";
import DashboardTemplate from "../Components/Templates/DashboardTemplate";
import AuthTemplate from "../Components/Templates/AuthTemplate";

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
