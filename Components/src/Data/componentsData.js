// Stores all components info (name, type, description)
// Data → Page → map() → UI
// Data will stored in JSON format and dynamically render using map().
export const componentsData = [
  // ===== BASIC =====
  {
    id: 1,
    name: "Accordion",
    type: "Basic",
    description: "Expandable content section",
  },
  {
    id: 2,
    name: "Accordion FAQ",
    type: "Basic",
    description: "FAQ style accordion",
  },
  {
    id: 3,
    name: "Tabs",
    type: "Basic",
    description: "Switch between multiple views",
  },
  {
    id: 4,
    name: "Button",
    type: "Basic",
    description: "Reusable button component",
  },
  { id: 5, name: "Input", type: "Basic", description: "Input field component" },
  {
    id: 6,
    name: "Badge",
    type: "Basic",
    description: "Small label or status indicator",
  },
  {
    id: 7,
    name: "Avatar",
    type: "Basic",
    description: "User profile image display",
  },
  { id: 8, name: "Spinner", type: "Basic", description: "Loading indicator" },
  {
    id: 9,
    name: "Checkbox",
    type: "Basic",
    description: "Select multiple options",
  },
  { id: 10, name: "Radio", type: "Basic", description: "Select single option" },
  { id: 11, name: "Switch", type: "Basic", description: "Toggle on/off state" },

  // ===== ADVANCED =====
  {
    id: 12,
    name: "Modal",
    type: "Advanced",
    description: "Popup modal component",
  },
  { id: 13, name: "Sheet", type: "Advanced", description: "Slide-in panel" },
  {
    id: 14,
    name: "Dropdown",
    type: "Advanced",
    description: "Dropdown menu component",
  },
  {
    id: 15,
    name: "Tooltip",
    type: "Advanced",
    description: "Hover information popup",
  },
  {
    id: 16,
    name: "Popover",
    type: "Advanced",
    description: "Floating content container",
  },
  {
    id: 17,
    name: "Pagination",
    type: "Advanced",
    description: "Page navigation",
  },
  {
    id: 18,
    name: "DataTable",
    type: "Advanced",
    description: "Structured data table",
  },
  {
    id: 19,
    name: "Toast",
    type: "Advanced",
    description: "Notification alerts",
  },
  {
    id: 20,
    name: "Skeleton",
    type: "Advanced",
    description: "Loading placeholder UI",
  },
  {
    id: 21,
    name: "Command",
    type: "Advanced",
    description: "Command menu search",
  },
  {
    id: 22,
    name: "Alert",
    type: "Advanced",
    description: "Status message display",
  },
  {
    id: 23,
    name: "Stepper",
    type: "Advanced",
    description: "Step-by-step progress",
  },

  // ===== UI =====
  { id: 24, name: "GlowCard", type: "UI", description: "Glowing card UI" },
  { id: 25, name: "GlassCard", type: "UI", description: "Glass effect card" },
  { id: 26, name: "Container", type: "UI", description: "Layout wrapper" },
  { id: 27, name: "Section", type: "UI", description: "Page section block" },
  { id: 28, name: "Card", type: "UI", description: "Content container" },
  { id: 29, name: "Navbar", type: "UI", description: "Navigation header" },
];
