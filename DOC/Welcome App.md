# Welcome App

A mobile-responsive React welcome screen application that replicates the design from your provided mockup.

## Features

- Dark theme mobile-style interface
- "Welcome!" title with subtitle
- Interactive page indicator dots
- Skip and Continue buttons with functionality
- Responsive design that works on desktop and mobile
- Built with React, Tailwind CSS, and shadcn/ui components

## Setup Instructions

1. **Extract the project files**
   ```bash
   unzip welcome-app.zip
   cd welcome-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173/`
   - The app will automatically reload when you make changes

## Build for Production

To create a production build:

```bash
npm run build
# or
pnpm run build
```

The built files will be in the `dist/` directory.

## Project Structure

- `src/App.jsx` - Main welcome screen component
- `src/App.css` - Styling with Tailwind CSS
- `src/components/ui/` - Pre-built UI components from shadcn/ui
- `public/` - Static assets

## Functionality

- **Continue Button**: Advances through the page indicators (5 steps total)
- **Skip Button**: Logs skip action to console (can be extended to navigate to main app)
- **Page Indicators**: Visual dots showing current progress through the welcome flow

The app is ready to be integrated into a larger application or deployed as a standalone welcome screen.

