# My Modern Blog Frontend

A minimalist, high-performance blog frontend built with **React**, **Vite**, and **Tailwind CSS**.

## ✨ Features
- 🌙 **Dark/Light Mode**: Automatic system preference detection and manual toggle.
- 🚀 **Smooth Animations**: Powered by `framer-motion` for a premium feel.
- 🎨 **Minimalist UI**: Clean, focus-oriented design with responsive layout.
- 📦 **GitHub Pages Ready**: pre-configured with `HashRouter` and GitHub Actions.

## 🛠️ Tech Stack
- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)

## 🚀 Getting Started

1. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd blog-code
   npm install --legacy-peer-deps
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Build**:
   ```bash
   npm run build
   ```

## 🌍 Deployment

This project is pre-configured for **GitHub Pages**.

1. Create a repository on GitHub.
2. Push your code to the `main` branch.
3. The GitHub Action in `.github/workflows/deploy.yml` will automatically build and deploy the site to the `gh-pages` branch.
4. On GitHub, go to **Settings > Pages** and ensure the source is set to the `gh-pages` branch.

**Note**: If your project is not at the root (e.g. `username.github.io/repo-name/`), make sure `base: './'` in `vite.config.ts` handles it correctly (the current configuration should work for most cases).
