// ===== BASIC =====
import AccordionDemo from "../components/ui/Accordion/Examples/AccordionDemo";
import AccordionFAQ from "../components/ui/Accordion/Examples/AccordionFAQ";
import AccordionFAQCode from "../components/ui/Accordion/Examples/AccordionFAQ.jsx?raw";

import TabsDemo from "../components/ui/Tabs/TabsDemo";
import TabsDemoCode from "../components/ui/Tabs/TabsDemo.jsx?raw";

import Input from "../components/ui/Input";
import InputCode from "../components/ui/Input.jsx?raw";

import Button from "../components/ui/Button";
import ButtonCode from "../components/ui/Button.jsx?raw";

import BadgeDemo from "../components/ui/Badge/BadgeDemo";
import BadgeDemoCode from "../components/ui/Badge/BadgeDemo.jsx?raw";

import AvatarDemo from "../components/ui/Avatar/AvatarDemo";
import AvatarDemoCode from "../components/ui/Avatar/AvatarDemo.jsx?raw";

import SpinnerDemo from "../components/ui/Spinner/SpinnerDemo";
import SpinnerDemoCode from "../components/ui/Spinner/SpinnerDemo.jsx?raw";

import CheckboxDemo from "../components/ui/Checkbox/CheckboxDemo";
import CheckboxDemoCode from "../components/ui/Checkbox/CheckboxDemo.jsx?raw";

import RadioDemo from "../components/ui/Radio/RadioDemo";
import RadioDemoCode from "../components/ui/Radio/RadioDemo.jsx?raw";

import SwitchDemo from "../components/ui/Switch/SwitchDemo";
import SwitchDemoCode from "../components/ui/Switch/SwitchDemo.jsx?raw";

// ===== ADVANCED =====
import ModalDemo from "../components/ui/Modal/ModalDemo";
import ModalCode from "../components/ui/Modal/ModalDemo.jsx?raw";

import SheetDemo from "../components/ui/Sheet/SheetDemo";
import SheetDemoCode from "../components/ui/Sheet/SheetDemo.jsx?raw";

import DropdownDemo from "../components/ui/Dropdown/DropdownDemo";
import DropdownDemoCode from "../components/ui/Dropdown/DropdownDemo.jsx?raw";

import TooltipDemo from "../components/ui/Tooltip/TooltipDemo";
import TooltipDemoCode from "../components/ui/Tooltip/TooltipDemo.jsx?raw";

import PopoverDemo from "../components/ui/Popover/PopoverDemo";
import PopoverDemoCode from "../components/ui/Popover/PopoverDemo.jsx?raw";

import PaginationDemo from "../components/ui/Pagination/PaginationDemo";
import PaginationDemoCode from "../components/ui/Pagination/PaginationDemo.jsx?raw";

import DataTableDemo from "../components/ui/DataTable/DataTableDemo";
import DataTableDemoCode from "../components/ui/DataTable/DataTableDemo.jsx?raw";

import ToastDemo from "../components/ui/Toast/ToastDemo";
import ToastDemoCode from "../components/ui/Toast/ToastDemo.jsx?raw";

import SkeletonDemo from "../components/ui/Skeleton/SkeletonDemo";
import SkeletonDemoCode from "../components/ui/Skeleton/SkeletonDemo.jsx?raw";

import CommandDemo from "../components/ui/Command/CommandDemo";
import CommandDemoCode from "../components/ui/Command/CommandDemo.jsx?raw";

import AlertDemo from "../components/ui/Alert/AlertDemo";
import AlertDemoCode from "../components/ui/Alert/AlertDemo.jsx?raw";

import StepperDemo from "../components/ui/Stepper/StepperDemo";
import StepperDemoCode from "../components/ui/Stepper/StepperDemo.jsx?raw";

// ===== UI =====
import GlowCard from "../components/ui/GlowCard/GlowCard";
import GlowCardCode from "../components/ui/GlowCard/GlowCard.jsx?raw";

import GlassCard from "../Components/ui/GlassCard";
import GlassCardCode from "../components/ui/GlassCard.jsx?raw";

import Container from "../Components/ui/Container";
import ContainerCode from "../components/ui/Container.jsx?raw";

import Section from "../Components/ui/Section";
import SectionCode from "../components/ui/Section.jsx?raw";

import CardDemo from "../components/ui/Card/CardDemo";
import CardDemoCode from "../components/ui/Card/CardDemo.jsx?raw";

import NavbarDemo from "../components/ui/Navbar/NavbarDemo";
import NavbarDemoCode from "../components/ui/Navbar/NavbarDemo.jsx?raw";

// ===== COMPONENT MAP =====
const componentMap = {
  // Basic Component
  accordion: {
    component: <AccordionDemo />,
    code: AccordionCode,
    fileName: "AccordionDemo.jsx",
    description:
      "Accordion component is used to show and hide content sections. It helps organize large content into collapsible panels for better readability.",
  },
  "accordion-faq": {
    component: <AccordionFAQ />,
    code: AccordionFAQCode,
    fileName: "AccordionFAQ.jsx",
    description:
      "Accordion FAQ is a variation of accordion used for frequently asked questions. It allows users to expand and read answers easily.",
  },
  tabs: {
    component: <TabsDemo />,
    code: TabsDemoCode,
    fileName: "TabsDemo.jsx",
    description:
      "Tabs component is used to switch between multiple views or sections within the same page. It improves navigation and content organization.",
  },
  button: {
    component: <Button>Click Me</Button>,
    code: ButtonCode,
    fileName: "Button.jsx",
    description:
      "Button component is used to trigger actions such as submitting forms, navigating pages, or executing events. It helps create consistent and reusable interactive elements across the application.",
    props: [
      {
        name: "children",
        type: "node",
        description: "Content inside the button",
      },
      {
        name: "variant",
        type: "string",
        description: "Defines button style (primary, secondary)",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disables the button",
      },
    ],
  },
  input: {
    component: <Input placeholder="Enter text..." />,
    code: InputCode,
    fileName: "Input.jsx",
    description:
      "Input component is used to collect user data such as text, email, or passwords. It is commonly used in forms and helps standardize user input handling.",
    props: [
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text",
      },
      {
        name: "value",
        type: "string",
        description: "Value of the input",
      },
      {
        name: "onChange",
        type: "function",
        description: "Callback function when value changes",
      },
    ],
  },
  badge: {
    component: <BadgeDemo />,
    code: BadgeDemoCode,
    fileName: "BadgeDemo.jsx",
    description:
      "Badge component is used to display small status labels or counts such as notifications, tags, or categories.",
    props: [
      {
        name: "variant",
        type: "string",
        description: "Defines badge style (primary, secondary)",
      },
      {
        name: "children",
        type: "string",
        description: "Content inside the badge",
      },
    ],
  },
  avatar: {
    component: <AvatarDemo />,
    code: AvatarDemoCode,
    fileName: "AvatarDemo.jsx",
    description:
      "Avatar component is used to display user profile images or initials. It is commonly used in user interfaces like chats and dashboards.",
    props: [
      {
        name: "src",
        type: "string",
        description: "Image source",
      },
      {
        name: "alt",
        type: "string",
        description: "Image alt text",
      },
      {
        name: "size",
        type: "string",
        description: "Size of the avatar",
      },
    ],
  },
  spinner: {
    component: <SpinnerDemo />,
    code: SpinnerDemoCode,
    fileName: "SpinnerDemo.jsx",
    description:
      "Spinner component is used to indicate loading states. It shows that content is being fetched or processed.",
  },
  checkbox: {
    component: <CheckboxDemo />,
    code: CheckboxDemoCode,
    fileName: "CheckboxDemo.jsx",
    description:
      "Checkbox component is used to select one or multiple options from a list. It is commonly used in forms.",
  },
  radio: {
    component: <RadioDemo />,
    code: RadioDemoCode,
    fileName: "RadioDemo.jsx",
    description:
      "Radio component is used to select only one option from multiple choices. It ensures a single selection.",
  },
  switch: {
    component: <SwitchDemo />,
    code: SwitchDemoCode,
    fileName: "SwitchDemo.jsx",
    description:
      "Switch component is used to toggle between two states such as on/off or enable/disable.",
  },

  // Advanced Components
  modal: {
    component: <ModalDemo />,
    code: ModalCode,
    fileName: "ModalDemo.jsx",
    description:
      "Modal component is used to display content in a popup overlay. It is commonly used for forms, alerts, or confirmations.",
    props: [
      {
        name: "title",
        type: "string",
        description: "Title of the modal",
      },
      {
        name: "open",
        type: "boolean",
        description: "Whether the modal is open",
      },
    ],
  },
  sheet: {
    component: <SheetDemo />,
    code: SheetDemoCode,
    fileName: "SheetDemo.jsx",
    description:
      "Sheet component is a side panel that slides into view. It is used for navigation menus or additional content.",
  },
  dropdown: {
    component: <DropdownDemo />,
    code: DropdownDemoCode,
    fileName: "DropdownDemo.jsx",
    description:
      "Dropdown component is used to display a list of options when triggered. It helps save space and organize actions.",
  },
  tooltip: {
    component: <TooltipDemo />,
    code: TooltipDemoCode,
    fileName: "TooltipDemo.jsx",
    description:
      "Tooltip component shows small informational text when hovering over an element. It improves user guidance.",
  },
  popover: {
    component: <PopoverDemo />,
    code: PopoverDemoCode,
    fileName: "PopoverDemo.jsx",
    description:
      "Popover component displays additional content in a floating panel. It is used for actions, forms, or extra information.",
  },
  pagination: {
    component: <PaginationDemo />,
    code: PaginationDemoCode,
    fileName: "PaginationDemo.jsx",
    description:
      "Pagination component is used to divide content into multiple pages. It helps manage large datasets efficiently.",
  },
  skeleton: {
    component: <SkeletonDemo />,
    code: SkeletonDemoCode,
    fileName: "SkeletonDemo.jsx",
    description:
      "Skeleton component is used as a placeholder while content is loading. It improves perceived performance.",
  },
  command: {
    component: <CommandDemo />,
    code: CommandDemoCode,
    fileName: "CommandDemo.jsx",
    description:
      "Command component provides a searchable command menu. It helps users quickly navigate or execute actions.",
  },
  datatable: {
    component: <DataTableDemo />,
    code: DataTableDemoCode,
    fileName: "DataTableDemo.jsx",
    description:
      "DataTable component is used to display structured data in rows and columns. It supports sorting, filtering, and better data management.",
    props: [
      {
        name: "columns",
        type: "array",
        description: "Array of column objects",
      },
      {
        name: "data",
        type: "array",
        description: "Array of data objects",
      },
      {
        name: "loading",
        type: "boolean",
        description: "Whether the data is loading",
      },
    ],
  },
  toast: {
    component: <ToastDemo />,
    code: ToastDemoCode,
    fileName: "ToastDemo.jsx",
    description:
      "Toast component is used to display temporary notifications such as success or error messages. It appears briefly and disappears automatically.",
    props: [
      {
        name: "message",
        type: "string",
        description: "Message to display",
      },
      {
        name: "type",
        type: "string",
        description: "Type of toast (success, error, warning)",
      },
      {
        name: "open",
        type: "boolean",
        description: "Whether the toast is open",
      },
    ],
  },
  alert: {
    component: <AlertDemo />,
    code: AlertDemoCode,
    fileName: "AlertDemo.jsx",
    description:
      "Alert component is used to display important messages like success, error, or warning. It helps users quickly understand system feedback.",
    props: [
      {
        name: "type",
        type: "string",
        description: "Type of alert (success, error, warning, info)",
      },
      {
        name: "children",
        type: "node",
        description: "Content inside the alert",
      },
    ],
  },
  stepper: {
    component: <StepperDemo />,
    code: StepperDemoCode,
    fileName: "StepperDemo.jsx",
    description:
      "Stepper component is used to show progress through multiple steps in processes like forms or checkout. It helps users understand their current position and remaining steps.",
    props: [
      {
        name: "steps",
        type: "array",
        description: "Array of step names",
      },
      {
        name: "currentStep",
        type: "number",
        description: "Current step index",
      },
    ],
  },

  // UI Components
  glowcard: {
    component: (
      <GlowCard>
        <div className="p-6 text-white">GlowCard Preview</div>
      </GlowCard>
    ),
    code: GlowCardCode,
    fileName: "GlowCard.jsx",
    description:
      "GlowCard component is used to highlight content with a glowing visual effect. It enhances UI appearance and focus.",
  },
  glasscard: {
    component: (
      <GlassCard className="p-6 text-white">GlassCard Preview</GlassCard>
    ),
    code: GlassCardCode,
    fileName: "GlassCard.jsx",
    description:
      "GlassCard component uses a glassmorphism design style with blur and transparency. It creates a modern UI look.",
  },
  container: {
    component: (
      <div className="bg-gray-800 p-6 rounded-xl">
        <Container>
          <div className="text-white">Container Content</div>
        </Container>
      </div>
    ),
    code: ContainerCode,
    fileName: "Container.jsx",
    description:
      "Container component is used to wrap and align content within a fixed width. It helps maintain layout consistency.",
  },
  section: {
    component: (
      <div className="bg-gray-800 p-6 rounded-xl">
        <Section>
          <div className="text-white">Section Content</div>
        </Section>
      </div>
    ),
    code: SectionCode,
    fileName: "Section.jsx",
    description:
      "Section component is used to divide a page into different content blocks. It improves layout structure and readability.",
  },
  card: {
    component: <CardDemo />,
    code: CardDemoCode,
    fileName: "CardDemo.jsx",

    description:
      "Card component is used to group related content in a structured container. It is commonly used in dashboards, product listings, and layouts.",
  },
  navbar: {
    component: <NavbarDemo />,
    code: NavbarDemoCode,
    fileName: "NavbarDemo.jsx",

    description:
      "Navbar component is used for navigation across different sections of the application. It improves accessibility and user experience.",

    props: [],
  },
};

export default componentMap;
