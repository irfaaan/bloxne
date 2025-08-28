# BloxCalc Pro - Trading Calculator

## Overview

BloxCalc Pro is a web-based trading calculator designed for the Blox Fruits game ecosystem. The application helps players calculate trade values, compare fruit values, and make informed trading decisions. It features a comprehensive fruit database with real-time value tracking, market trends, and rarity classifications, plus gamepass values.

## Recent Changes

### Database Updates (January 2025)
- **Data Sources**: Updated with latest market values from live trading activity and community analysis
- **New Items Added**: Dragon Token (800M value) as new mythical fruit
- **Gamepass Database**: Added comprehensive gamepass trading values including Fruit Notifier (700M), Dark Blade (315M), and more
- **Major Value Changes**: Lightning increased from 7M to 80M, Pain from 2M to 22M, various rarity adjustments
- **No Duplicates**: Ensured all existing fruits maintained consistency while adding new authentic market data

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js for the REST API server
- **Language**: TypeScript for both frontend and backend consistency
- **API Design**: RESTful endpoints for fruit data operations (CRUD operations)
- **Data Storage**: In-memory storage with plans for PostgreSQL integration via Drizzle ORM
- **Validation**: Zod schemas for runtime type validation and data integrity

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Centralized schema definitions in shared directory for frontend/backend consistency
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Migrations**: Drizzle Kit for database schema migrations

### Component Architecture
- **Design System**: Custom component library built on Radix UI primitives
- **Styling Strategy**: CSS-in-JS approach using Tailwind utility classes with CSS variables for theming
- **Component Structure**: Atomic design pattern with reusable UI components
- **Theme System**: Dark mode support with CSS custom properties

### Development Environment
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite HMR for frontend and tsx for backend development
- **Type Safety**: Full TypeScript coverage across the entire stack
- **Code Quality**: ESLint and TypeScript compiler for code quality assurance

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

### Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Zod**: Runtime type validation and schema definition

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **Replit Integration**: Deployment and development environment integration

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Replit**: Development and hosting platform integration

### Utilities
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **wouter**: Lightweight routing library for React applications