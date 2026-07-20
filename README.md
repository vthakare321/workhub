# WorkHub Operations Portal

## Overview

WorkHub Operations Portal is a React and TypeScript based admin dashboard created as part of a frontend assessment. The application demonstrates a clean and scalable project structure with authentication, role-based access, user management, and work item management.

The goal of this project is to show how a production-style React application can be organized using reusable components, feature-based architecture, and modern frontend libraries.

### Features

- User authentication
- Role-based authorization
- Dashboard
- User Management (View, Create, Edit, Delete)
- Work Item Management (View, Create, Edit, Delete)
- Search, filtering and pagination
- Profile page
- Responsive UI

---

# Technology

The project is built using:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- TanStack React Query
- Zustand
- React Hook Form
- Zod

### Why these libraries?

- **React** is used to build reusable UI components.
- **TypeScript** helps catch errors during development and improves code quality.
- **React Query** manages server data, caching and API requests.
- **Zustand** is used for authentication state.
- **Axios** simplifies API communication.
- **React Hook Form** and **Zod** provide form handling and validation.
- **Tailwind CSS** is used for responsive styling.

---

# Prerequisites

Before running the project, make sure you have:

- Node.js (version 20 or later)
- npm

Check the installed versions:

```bash
node -v
npm -v
```

---

# Setup

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd workhub-portal
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables.

Run the development server:

```bash
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
npm run lint
npm run type-check
```

---

# Demo Credentials

The application uses DummyJSON authentication.

### Administrator

Username: `emilys`

Password: `emilyspass`

### Manager

Username: `michaelw`

Password: `michaelwpass`

### Contributor

Username: `jamesd`

Password: `jamesdpass`

---

# Routes and Permissions

The application uses protected routes along with role-based permissions.

Main routes include:

- Dashboard
- Users
- User Details
- Create User
- Edit User
- Work Items
- Create Work Item
- Edit Work Item
- Profile

Permissions are managed from a single authorization configuration instead of checking roles throughout the application.

---

# Architecture

The project follows a feature-based folder structure.

```
src
│
├── components
├── layouts
├── routes
├── hooks
├── services
├── utils
├── features
│   ├── auth
│   ├── dashboard
│   ├── users
│   ├── work-items
│   └── profile
```

Each feature contains its own:

- components
- pages
- hooks
- services
- models
- DTOs
- mappers

This keeps related code together and makes the project easier to maintain.

The overall data flow is:

```
UI
↓

React Hook

↓

React Query

↓

Service

↓

Axios

↓

DummyJSON API
```

---

# API Endpoints

The project uses DummyJSON APIs.

Authentication

```
POST /auth/login
GET /auth/me
```

Users

```
GET /users
GET /users/{id}
```

Work Items

```
GET /todos
GET /todos/{id}
```

---

# Environment

The application reads configuration from environment variables.

Example:

```
VITE_API_BASE_URL=https://dummyjson.com
```

Since this is a frontend application, variables starting with `VITE_` are available in the browser.

---

# Known Limitations

- DummyJSON does not save Create, Update or Delete operations permanently.
- New records are stored in localStorage for demonstration.
- Data created locally is lost after clearing localStorage.
- Authentication is only for demo purposes.
- Automated testing is not included.

---

# Manual Verification

The following features were tested manually:

- Login
- Logout
- Protected Routes
- Dashboard
- User Management
- Work Item Management
- Search
- Filters
- Pagination
- Profile Page
- Responsive Layout

---

# AI Disclosure

AI was used as a learning and reference tool while developing this project. It helped with understanding React patterns, TypeScript concepts, and reviewing code structure. All implementation, integration, debugging, and testing were completed manually.

---

# Author
Vaishnavi Thakare
