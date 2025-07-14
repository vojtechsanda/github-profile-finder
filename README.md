# GitHub Profile Finder

An interactive React application for searching and displaying GitHub user profiles, repositories, and organizations via the GitHub REST API.

🔗 **[Live Demo](https://vojtechsanda.github.io/github-profile-finder/)**

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sample Users](#-sample-users)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)

## 🚀 Features

| Feature               | Description                                        |
| --------------------- | -------------------------------------------------- |
| **User Search**       | Find GitHub users by their username                |
| **Profile View**      | See avatar, bio, followers, and join date          |
| **Repositories**      | View public repos with stars, forks, and languages |
| **Organizations**     | Explore organizations the user belongs to          |
| **Responsive Design** | Optimized for mobile and desktop                   |
| **Fast Loading**      | Parallel API requests with loading indicators      |
| **Modern UI**         | Built with Material UI and custom theme            |
| **Smooth Animations** | Framer Motion for nice transitions                 |

## 🛠️ Tech Stack

| Category         | Tools & Libraries        |
| ---------------- | ------------------------ |
| **Framework**    | React 18 with TypeScript |
| **UI Library**   | Material UI (MUI)        |
| **Routing**      | React Router             |
| **Forms**        | React Hook Form          |
| **Animation**    | Framer Motion            |
| **HTTP Client**  | Axios                    |
| **Build Tool**   | Vite                     |
| **Code Quality** | ESLint + Prettier        |

## 👥 Sample Users

| Username   | Description                     |
| ---------- | ------------------------------- |
| `kiwi`     | User with repositories and orgs |
| `octocat`  | GitHub mascot                   |
| `torvalds` | Creator of Linux and Git        |
| `gaearon`  | React core team member          |

## 🧠 Project Structure

```
src/
├── components/   # Reusable UI components
│ ├── account/    # Profile-related components
├── loaders/      # Data loading logic (React Router)
├── pages/        # Application pages
├── routes/       # Routing configuration
├── styles/       # Theming and global styles
├── types/        # TypeScript definitions
└── utils/        # Helper functions
```

## 🔌 API Integration

Uses GitHub REST API:

- `GET /users/{username}` – Fetch user details
- `GET /users/{username}/repos` – List of user repositories
- `GET /users/{username}/orgs` – List of user organizations
- `GET /orgs/{org}` – Organization detail

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/vojtechsanda/github-profile-finder.git

cd github-profile-finder

npm install
```

### Development

```
npm run dev
```

### Build & Preview

```
npm run build

npm run preview
```

### Available Scripts

| Script               | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview the production build |
| `npm run lint`       | Run ESLint                   |
| `npm run type-check` | Run TypeScript type checking |

---

📌 _This project was created as part of a technical interview for a React/TypeScript developer position at [InQool](https://www.inqool.cz/)._
