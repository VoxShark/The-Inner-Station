# Replit.md

## Overview

This is a full-stack web application built as an interactive text-based adventure game called "The Inner Station" featuring characters from Hazbin Hotel. Successfully adapted from the user's Python code repository (https://github.com/VoxShark/TheInnerStation), the application follows a choose-your-own-adventure format where users navigate through story segments and make choices that progress the narrative. The project uses a modern tech stack with React on the frontend, Express.js on the backend, and in-memory storage for game state persistence.

**Status**: ✅ Complete and Ready for Deployment (January 29, 2025)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application uses a monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage for game states (MemStorage implementation)
- **Session Management**: UUID-based session identification
- **API Design**: RESTful endpoints for game state management (GET/POST routes for choices, save/reset)

## Key Components

### Database Schema
The application uses a simple but effective schema centered around game states:
- `game_states` table stores user progress including current segment, visited segments, choices made, and progress tracking
- JSON fields store arrays for visited segments and user choices
- UUID-based session management for user identification

### API Endpoints
- `GET /api/game/:sessionId` - Retrieve or create game state
- `POST /api/game/:sessionId/choice` - Update game state when user makes a choice

### Frontend Components
- **GameHeader**: Displays progress bar and navigation
- **StoryDisplay**: Renders current story text and character information
- **ChoiceButtons**: Interactive choice selection interface
- **Character/Menu Modals**: Additional game information and controls
- **GameControls**: Floating action buttons for save/restart/character info

### Story System
- Story segments defined in TypeScript with typed interfaces
- Each segment contains text, character information, and available choices
- Progress tracking through numbered segments with visual feedback

## Data Flow

1. **Game Initialization**: Client generates UUID session and requests game state
2. **Story Progression**: User makes choices which trigger API calls to update game state
3. **State Persistence**: All progress saved to database with optimistic UI updates
4. **Real-time Updates**: TanStack Query manages cache invalidation and refetching

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL) for cloud hosting
- **UI Components**: Radix UI primitives via shadcn/ui
- **Styling**: Tailwind CSS with custom theme variables
- **Development**: Replit-specific plugins for cartographer and error handling

### Key Libraries
- Drizzle ORM for type-safe database operations
- React Hook Form with Zod validation
- Date-fns for date manipulation
- Embla Carousel for potential future UI enhancements

## Deployment Strategy

The application is designed for Replit deployment with:
- **Development**: Vite dev server with HMR
- **Production**: Static build served by Express with API routes
- **Database**: External PostgreSQL via environment variables
- **Environment**: Node.js with ES modules throughout

### Build Process
- Frontend builds to `dist/public` directory
- Backend bundles with esbuild for production
- TypeScript compilation with strict settings
- Path aliases for clean import statements

### Configuration
- Vite handles frontend bundling and dev server
- Drizzle manages database migrations and schema
- Tailwind processes styles with custom CSS variables
- TypeScript provides full-stack type safety

The architecture prioritizes simplicity and developer experience while maintaining scalability for future enhancements like user accounts, save slots, or additional story branches.