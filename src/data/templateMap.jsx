import LandingTemplate from "../components/templates/LandingTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import AuthTemplate from "../components/templates/AuthTemplate";
import SaaSTemplate from "../components/templates/SaaSTemplate";
import PortfolioTemplate from "../components/templates/PortfolioTemplate";
import EcommerceTemplate from "../components/templates/EcommerceTemplate";
import BlogTemplate from "../components/templates/BlogTemplate";
import AdminDashboardTemplate from "../components/templates/AdminDashboardTemplate";
import StartupTemplate from "../components/templates/StartupTemplate";

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
  "saas-template": {
    component: <SaaSTemplate />,
    fileName: "SaasTemplate.jsx",
    file: "/templates/saas-template.zip",
  },
  "portfolio-template": {
    component: <PortfolioTemplate />,
    fileName: "PortfolioTemplate.jsx",
    file: "/templates/portfolio-template.zip",
  },
  "ecommerce-template": {
    component: <EcommerceTemplate />,
    fileName: "EcommerceTemplate.jsx",
    file: "/templates/ecommerce-template.zip",
  },
  "blog-template": {
    component: <BlogTemplate />,
    fileName: "BlogTemplate.jsx",
    file: "/templates/blog-template.zip",
  },
  "admin-dashboard-template": {
    component: <AdminDashboardTemplate />,
    fileName: "AdminDashboardTemplate.jsx",
    file: "/templates/admin-dashboard-template.zip",
  },
  "startup-template": {
    component: <StartupTemplate />,
    fileName: "StartupTemplate.jsx",
    file: "/templates/startup-template.zip",
  },
};
