# Eric Umuhoza - Personal Website

This is the personal website for **Eric Umuhoza**, a Computer Science Research Professor. The website showcases academic research, publications, teaching experience, and professional background in an accessible and modern web interface.

Built with React, TypeScript, and Tailwind CSS, this site serves as a digital portfolio and academic presence for connecting with students, collaborators, and the broader research community.

## Features

- **Professional Bio**: Comprehensive overview of academic background and research interests
- **Research Showcase**: Detailed presentation of current and past research projects
- **Publications**: Curated list of academic publications and scholarly work
- **Teaching Portfolio**: Information about courses taught and teaching philosophy
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Accessible**: Built with accessibility best practices and WCAG standards
- **Modern UI/UX**: Clean, professional design with subtle interactions and smooth scrolling

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## About This Project

This is the official personal website for Eric Umuhoza, designed to provide a comprehensive overview of academic work, research contributions, and professional activities. The site aims to:

- Showcase research expertise and academic achievements
- Facilitate connections with students, colleagues, and collaborators
- Share knowledge through publications and teaching materials
- Provide an accessible platform for academic communication

## Project Structure

```
src/
  ├── components/     # Reusable UI components (Header, Hero, About, Research, etc.)
  ├── data/          # JSON data for publications and other content
  ├── hooks/         # Custom React hooks
  └── assets/        # Static assets and images
```

## Contributing

This is a personal website project. If you find any issues or have suggestions for improvement, please feel free to reach out.

## License

© 2025 Eric Umuhoza. All rights reserved.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
