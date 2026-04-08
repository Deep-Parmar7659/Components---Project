import LandingTemplate from "../Components/Templates/LandingTemplate";
import LandingCode from "../Components/Templates/LandingTemplate.jsx?raw";

import DashboardTemplate from "../Components/Templates/DashboardTemplate";
import DashboardCode from "../Components/Templates/DashboardTemplate.jsx?raw";

import AuthTemplate from "../Components/Templates/AuthTemplate";
import AuthCode from "../Components/Templates/AuthTemplate.jsx?raw";

export const templateMap = {
  "auth-template": {
    component: <AuthTemplate />,
    code: AuthCode,
    fileName: "AuthTemplate.jsx",
    file: "/templates/auth-template.zip",
  },

  "dashboard-template": {
    component: <DashboardTemplate />,
    code: DashboardCode,
    fileName: "DashboardTemplate.jsx",
    file: "/templates/dashboard-template.zip",
  },

  "landing-template": {
    component: <LandingTemplate />,
    code: LandingCode,
    fileName: "LandingTemplate.jsx",
    file: "/templates/landing-template.zip",
  },
};
