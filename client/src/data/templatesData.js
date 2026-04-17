// Data → Page → map() → UI
// Data will stored in JSON format and dynamically render using map().
import AuthTemplate from "../components/templates/AuthTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import LandingTemplate from "../components/Templates/LandingTemplate";
import SaaSTemplate from "../components/Templates/SaaSTemplate";
import PortfolioTemplate from "../components/Templates/PortfolioTemplate";
import EcommerceTemplate from "../components/Templates/EcommerceTemplate";
import BlogTemplate from "../components/templates/BlogTemplate";
import AdminDashboardTemplate from "../components/templates/AdminDashboardTemplate";
import StartupTemplate from "../components/templates/StartupTemplate";

export const templatesData = [
  {
    id: 1,
    name: "Auth Template",
    slug: "auth-template",
    component: "AuthTemplate",
    file: "/templates/auth-template.zip",
  },
  {
    id: 2,
    name: "Dashboard Template",
    slug: "dashboard-template",
    component: "DashboardTemplate",
    file: "/templates/dashboard-template.zip",
  },
  {
    id: 3,
    name: "Landing Template",
    slug: "landing-template",
    component: "LandingTemplate",
    file: "/templates/landing-template.zip",
  },
  {
    id: 4,
    name: "SaaS Landing Page",
    slug: "saas-template",
    component: "SaaSTemplate",
    file: "/templates/saas-template.zip",
  },
  {
    id: 5,
    name: "Portfolio Template",
    slug: "portfolio-template",
    component: "PortfolioTemplate",
    file: "/templates/portfolio-template.zip",
  },
  {
    id: 6,
    name: "E-commerce Template",
    slug: "ecommerce-template",
    component: "EcommerceTemplate",
    file: "/templates/ecommerce-template.zip",
  },
  {
    id: 7,
    name: "Blog Template",
    slug: "blog-template",
    component: "BlogTemplate",
    file: "/templates/blog-template.zip",
  },
  {
    id: 8,
    name: "Admin Dashboard",
    slug: "admin-dashboard-template",
    component: "AdminDashboardTemplate",
    file: "/templates/admin-dashboard-template.zip",
  },
  {
    id: 9,
    name: "Startup Template",
    slug: "startup-template",
    component: "StartupTemplate",
    file: "/templates/startup-template.zip",
  },
];
