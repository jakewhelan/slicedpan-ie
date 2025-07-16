# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a business website for Sliced Pan Solutions, a technology consulting company specializing in web development, mobile applications, and game development. The project is built with React, TypeScript, and Vite, styled with Tailwind CSS and shadcn/ui components, and configured for GitHub Pages deployment.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Architecture Overview

### Tech Stack
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.10
- **Styling**: Tailwind CSS 3.4.17 with shadcn/ui components
- **Deployment**: GitHub Pages via gh-pages package
- **UI Components**: Radix UI primitives via shadcn/ui

### Key Configuration
- **Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json and vite.config.ts)
- **Base URL**: `/slicedpan-ie/` for GitHub Pages deployment
- **Component System**: shadcn/ui components in `src/components/ui/`

### Project Structure
- `/src/components/ui/` - Reusable shadcn/ui components (button, card)
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/docs/` - Project documentation and specifications
  - `website_project_brief.md` - Business requirements
  - `technical_specifications.md` - Technical implementation details
  - `website_content_data.json` - Structured content data

## Important Context

### Business Information
- **Company**: Sliced Pan Solutions
- **Founded**: 2022
- **Contact**: jake@slicedpan.ie
- **Location**: Tramore, Ireland
- **Purpose**: Professional B2B website for Apple Developer Program enrollment and client acquisition

### Current Implementation Status
The project is in early development with a basic React app structure. The current App.tsx contains a placeholder landing page showcasing the tech stack. The technical specifications suggest migrating to Next.js, but the current implementation uses Vite + React.

### Design System
- Uses Tailwind CSS with custom theme configuration
- shadcn/ui for consistent component styling
- CSS custom properties for theme colors (configured in index.css)
- Responsive design with Tailwind's utility classes

## Development Guidelines

When implementing features:
1. Use existing shadcn/ui components when possible
2. Follow the established TypeScript patterns
3. Maintain consistent styling with Tailwind utilities
4. Keep components in appropriate directories
5. Use the `@/` path alias for imports from src/

When adding new shadcn/ui components:
```bash
# Components should be installed via the shadcn/ui CLI
# Configuration is in components.json
```