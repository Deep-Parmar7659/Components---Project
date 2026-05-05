# TailwindTap ⚡

A modern, open-source UI component library built with **React** and **Tailwind CSS**. Copy-paste ready components, fully responsive templates, and dark mode — everything you need to build beautiful web apps faster.

🌐 **Live Site:** [tailwindtap.com](https://components-project-three.vercel.app/)

---

## ✨ Features

- ⚡ **29 ready-to-use components** — Basic, Advanced, and UI categories
- 🖼️ **9 full-page templates** — Auth, Dashboard, Landing, SaaS, Portfolio, E-commerce, Blog, Admin, Startup
- 🌗 **Dark mode** — System-aware with a manual toggle
- 📱 **Fully responsive** — Works on mobile, tablet, and desktop
- 🎨 **Tailwind CSS v4** — Utility-first, easy to customize
- ⚙️ **Copy-paste ready** — Every component ships with its source code
- ⭐ **Favorites** — Save components you use most
- 📬 **Contact form** — EmailJS-powered with auto-reply

---

## 🧩 Components

### Basic (11)

`Accordion` · `Accordion FAQ` · `Tabs` · `Button` · `Input` · `Badge` · `Avatar` · `Spinner` · `Checkbox` · `Radio` · `Switch`

### Advanced (12)

`Modal` · `Sheet` · `Dropdown` · `Tooltip` · `Popover` · `Pagination` · `DataTable` · `Toast` · `Skeleton` · `Command` · `Alert` · `Stepper`

### UI (6)

`GlowCard` · `GlassCard` · `Container` · `Section` · `Card` · `Navbar`

---

## 🖼️ Templates

| Template        | Description           |
| --------------- | --------------------- |
| Auth            | Login & signup page   |
| Dashboard       | Analytics dashboard   |
| Landing Page    | Product landing page  |
| SaaS            | SaaS product homepage |
| Portfolio       | Personal portfolio    |
| E-commerce      | Online store layout   |
| Blog            | Blog listing & detail |
| Admin Dashboard | Admin panel UI        |
| Startup         | Startup homepage      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tailwindtap.git

# Navigate to project folder
cd tailwindtap

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project and add the following for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ADMIN=your_admin_template_id
VITE_EMAILJS_TEMPLATE_REPLY=your_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your keys from [EmailJS](https://www.emailjs.com/).

---

## 🗂️ Project Structure

```
tailwindtap/
├── public/
│   ├── previews/         # Component preview images
│   └── templates/        # Downloadable template zips
├── src/
│   ├── components/
│   │   ├── docs/         # PreviewTabs, CodeBlock, CodeTabs
│   │   ├── sections/     # Hero, Features, Benefits, Pricing, CTA, Testimonials
│   │   ├── templates/    # Full-page template components
│   │   └── ui/           # All reusable UI components
│   ├── context/          # ThemeContext, FavoritesContext
│   ├── data/             # componentsData, templatesData, componentMap
│   ├── hooks/            # useFavorites, useCopyLimit, useLoginForm
│   ├── layout/           # Navbar, Footer, DocsLayout, Sidebar
│   └── pages/            # HomePage, ComponentsPage, TemplatesPage, etc.
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Technology                                      | Purpose             |
| ----------------------------------------------- | ------------------- |
| [React 19](https://react.dev/)                  | UI framework        |
| [Tailwind CSS v4](https://tailwindcss.com/)     | Styling             |
| [Vite](https://vitejs.dev/)                     | Build tool          |
| [React Router v7](https://reactrouter.com/)     | Routing             |
| [Framer Motion](https://www.framer.com/motion/) | Animations          |
| [EmailJS](https://www.emailjs.com/)             | Contact form        |
| [PrismJS](https://prismjs.com/)                 | Syntax highlighting |

---

## 📦 Deployment

This project is deployed on **Vercel**. To deploy your own fork:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add your environment variables in the Vercel dashboard
4. Click **Deploy**

---

## 🤝 Contributing

Contributions are welcome! To add a new component:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-component`
3. Add your component in `src/components/ui/`
4. Register it in `src/data/componentsData.js` and `src/data/componentMap.jsx`
5. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ♥ using React & Tailwind CSS.

📧 parmardeep9140@gmail.com · 🌐 [tailwindtap.com](https://www.tailwindtap.com)
