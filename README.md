<p align="center">
  <img src="public/logo.png" alt="Ashutosh Bhatt Logo" width="120" />
</p>

<h1 align="center">Ashutosh Bhatt — Portfolio</h1>

<p align="center">
  <strong>A premium, dark-themed personal portfolio built with React & Vite</strong>
</p>

<p align="center">
  <a href="https://github.com/ashutoshbhatt2609/ashutoshbhatt">
    <img src="https://img.shields.io/badge/status-live-brightgreen?style=flat-square" alt="Status" />
  </a>
  <a href="https://github.com/ashutoshbhatt2609/ashutoshbhatt/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/react-18.3-61dafb?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/vite-5.4-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## ✨ Overview

A modern, multi-page portfolio website showcasing my projects, work experience, technical skills, and certifications. Designed with a **Sawad-inspired bento grid** aesthetic — featuring massive stacked typography, glassmorphism elements, smooth Framer Motion animations, and a fully responsive layout that works beautifully on both desktop and mobile.

---

## 🖼️ Features

| Feature | Description |
|---|---|
| 🎨 **Premium Dark Theme** | Curated color palette with accent orange (`#FF5C3A`) and lime highlights |
| 📱 **Fully Responsive** | Mobile-first design with a fixed bottom navbar on phones |
| ⚡ **Multi-Page Routing** | Client-side routing via React Router — each section gets its own isolated page |
| 🎭 **Smooth Animations** | Framer Motion entrance animations on every section |
| 💼 **Experience Modal** | Click any experience to open a detailed modal with photo & social links |
| 📜 **Certifications Grid** | Hover-to-reveal credential links with glassmorphism overlay |
| 📬 **Working Contact Form** | Submissions go directly to email via FormSubmit.co |
| 🧭 **Sticky Sidebar** | Profile card stays visible while scrolling on desktop |
| 🏷️ **Tooltip Navigation** | Hovering navbar icons reveals section names |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,js,css,html,github&theme=dark" alt="Tech Stack" />
</p>

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI framework |
| **Vite 5** | Lightning-fast build tool & dev server |
| **React Router** | Client-side multi-page navigation |
| **Framer Motion** | Declarative animations & transitions |
| **Lucide React** | Beautiful SVG icon library |
| **FormSubmit.co** | Zero-backend email form submissions |
| **Google Fonts** | Inter + Syne typography system |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── badges/           # Certification & badge images
│   ├── profile.jpg       # Profile photo
│   └── logo.png          # Personal brand logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Icon navigation with tooltips
│   │   ├── ProfileCard.jsx   # Sticky sidebar profile card
│   │   ├── Hero.jsx          # Landing section with status badges
│   │   ├── Projects.jsx      # Project showcase grid
│   │   ├── Experience.jsx    # Timeline with clickable modals
│   │   ├── Skills.jsx        # Tech stack & tools grid
│   │   ├── Certifications.jsx # Badges & certificates grid
│   │   ├── Contact.jsx       # Working email form
│   │   ├── Footer.jsx        # Footer with social links
│   │   └── ScrollToTop.jsx   # Route-change scroll reset
│   ├── App.jsx           # Router setup & page layouts
│   ├── App.css           # Global layout & shared styles
│   └── index.css         # CSS variables & resets
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/ashutoshbhatt2609/ashutoshbhatt.git

# Navigate into the project
cd ashutoshbhatt

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be live at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📄 Pages & Routes

| Route | Content |
|---|---|
| `/` | Full homepage — Hero, Projects, Experience, Skills, Certifications, Contact |
| `/projects` | Isolated Projects view with ProfileCard sidebar |
| `/experience` | Isolated Experience timeline with clickable modals |
| `/skills` | Skills grid + Certifications grid |
| `/contact` | Dedicated contact form page |

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary Background** | `#0A0A0A` |
| **Card Background** | `#141414` |
| **Accent** | `#FF5C3A` |
| **Lime Highlight** | `#C6FF00` |
| **Heading Font** | Syne (800 weight) |
| **Body Font** | Inter (400–700 weight) |
| **Border Radius** | 12px – 28px |

---

## 👤 Author

**Ashutosh Bhatt**
- 🎓 2nd-year CSE Student @ BMSIT&M, Bangalore
- 🔗 [LinkedIn](https://www.linkedin.com/in/bhattvashutosh)
- 🐙 [GitHub](https://github.com/ashutoshbhatt2609)
- 🐦 [X (Twitter)](https://x.com/Sky1833787)
- 📧 ashutoshbhatt2609@gmail.com

---

<p align="center">
  Made with ❤️ and lots of ☕
</p>
