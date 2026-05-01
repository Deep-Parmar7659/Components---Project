// Data → Page → map() → UI
// Data will stored in JSON format and dynamically render using map().
import AuthTemplate from "../components/templates/AuthTemplate";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import LandingTemplate from "../components/templates/LandingTemplate";
import SaaSTemplate from "../components/templates/SaaSTemplate";
import PortfolioTemplate from "../components/templates/PortfolioTemplate";
import EcommerceTemplate from "../components/templates/EcommerceTemplate";
import BlogTemplate from "../components/templates/BlogTemplate";
import AdminDashboardTemplate from "../components/templates/AdminDashboardTemplate";
import StartupTemplate from "../components/templates/StartupTemplate";
import RestaurantTemplate from "../components/templates/RestaurantTemplate";
import AgencyTemplate from "../components/templates/AgencyTemplate";
import MedicalTemplate from "../components/templates/MedicalTemplate";
import RealEstateTemplate from "../components/templates/RealEstateTemplate";
import JobBoardTemplate from "../components/templates/JobBoardTemplate";

export const templatesData = [
  {
    id: 1,
    name: "Auth Template",
    slug: "auth-template",
    component: "AuthTemplate",
    file: "/templates/auth-template.zip",
    preview: "/previews/Auth.png",
  },
  {
    id: 2,
    name: "Dashboard Template",
    slug: "dashboard-template",
    component: "DashboardTemplate",
    file: "/templates/dashboard-template.zip",
    preview: "/previews/Dashboard.png",
  },
  {
    id: 3,
    name: "Landing Template",
    slug: "landing-template",
    component: "LandingTemplate",
    file: "/templates/landing-template.zip",
    preview: "/previews/Landing.png",
  },
  {
    id: 4,
    name: "SaaS Landing Page",
    slug: "saas-template",
    component: "SaaSTemplate",
    file: "/templates/saas-template.zip",
    preview: "/previews/SaaS.png",
  },
  {
    id: 5,
    name: "Portfolio Template",
    slug: "portfolio-template",
    component: "PortfolioTemplate",
    file: "/templates/portfolio-template.zip",
    preview: "/previews/Portfolio.png",
  },
  {
    id: 6,
    name: "E-commerce Template",
    slug: "ecommerce-template",
    component: "EcommerceTemplate",
    file: "/templates/ecommerce-template.zip",
    preview: "/previews/ECommerce.png",
  },
  {
    id: 7,
    name: "Blog Template",
    slug: "blog-template",
    component: "BlogTemplate",
    file: "/templates/blog-template.zip",
    preview: "/previews/Blog.png",
  },
  {
    id: 8,
    name: "Admin Dashboard",
    slug: "admin-dashboard-template",
    component: "AdminDashboardTemplate",
    file: "/templates/admin-dashboard-template.zip",
    preview: "/previews/Admin.png",
  },
  {
    id: 9,
    name: "Startup Template",
    slug: "startup-template",
    component: "StartupTemplate",
    file: "/templates/startup-template.zip",
    preview: "/previews/Startup.png",
  },
  {
    id: 10,
    name: "Restaurant Template",
    slug: "restaurant-template",
    component: "RestaurantTemplate",
    file: "/templates/restaurant-template.zip",
    preview: "/previews/restaurant-template.png",
  },
  {
    id: 11,
    name: "Agency Template",
    slug: "agency-template",
    component: "AgencyTemplate",
    file: "/templates/agency-template.zip",
    preview: "/previews/agency-template.png",
  },
  {
    id: 12,
    name: "Medical Template",
    slug: "medical-template",
    component: "MedicalTemplate",
    file: "/templates/medical-template.zip",
    preview: "/previews/medical-template.png",
  },
  {
    id: 13,
    name: "Real Estate Template",
    slug: "real-estate-template",
    component: "RealEstateTemplate",
    file: "/templates/real-estate-template.zip",
    preview: "/previews/real-estate-template.png",
  },
  {
    id: 14,
    name: "Job Board Template",
    slug: "job-board-template",
    component: "JobBoardTemplate",
    file: "/templates/job-board-template.zip",
    preview: "/previews/job-board-template.png",
  },
];
