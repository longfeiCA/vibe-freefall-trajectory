# **App Name**: Freefall Trajectory

## Core Features:

- Trajectory Simulation: Simulate the trajectory of balls dropped from a moving plane, accounting for initial speed, acceleration, and gravity.
- Ball Path Visualization: Dynamically generate and display the paths of multiple balls dropped at constant intervals, updating in real-time as the simulation runs.
- Parameter Controls: Display of simulation parameters (plane speed, acceleration, drop interval) with an ability to adjust them using sliders and buttons.
- Simulation Reset: Reset the simulation to its initial state or other user-defined states. Provides different options.
- Dark/Light Theme Switch: Allows users to toggle between a dark and light theme for better visibility and user preference.
- Multilingual Support: Provides the ability to switch between English, Simplified Chinese, Spanish, and French for all text elements.

## Style Guidelines:

- Primary color: Sky blue (#87CEEB), evocative of the sky through which the balls fall, lending a sense of realism and spaciousness.
- Background color: Light gray (#D3D3D3), offers a neutral backdrop that ensures the trajectories and simulation parameters stand out without causing distraction.
- Accent color: A warm orange (#FF4500), analogous to sky blue, for interactive elements, providing visual contrast and drawing attention to crucial elements like simulation controls.
- Body and headline font: 'Inter', a grotesque-style sans-serif for a modern and objective feel.
- Use simple, clear icons to represent different simulation parameters and controls.
- Display the simulation parameters and trajectory display on the same screen using a modern dashboard-like layout.
- Implement smooth transitions for ball movements and parameter updates.

## Project Structure and Key Files:

Here's an overview of the main files and their roles in the project:

- **`README.md`**: Provides a general introduction to the project, setup instructions, and usage details.
- **`apphosting.yaml`**: Configuration file for application deployment and hosting.
- **`package.json`**: Defines project metadata, scripts, and dependencies.
- **`next.config.ts`**: Configuration file for Next.js, including custom settings for the application.
- **`postcss.config.mjs`**, **`tailwind.config.ts`**: Configuration files for PostCSS and Tailwind CSS, used for styling.
- **`tsconfig.json`**: TypeScript configuration file for the project.

### `src/` directory:

- **`src/app/layout.tsx`**: The root layout of the Next.js application, where the `ThemeProvider` and i18n configuration are integrated.
- **`src/app/page.tsx`**: The main page component that renders the `FreefallSimulation`.
- **`src/components/freefall-simulation.tsx`**: The central component that orchestrates the simulation. It manages state, integrates `SimulationControls` and `SimulationCanvas`, and handles the overall simulation logic.
- **`src/components/simulation-canvas.tsx`**: Responsible for rendering the visual aspects of the simulation, including the plane and the dropped balls, and handling the plane's appearance based on the theme.
- **`src/components/simulation-controls.tsx`**: Contains the UI elements (sliders, buttons) for adjusting simulation parameters and initiating actions like start/pause and reset, with multilingual support.
- **`src/components/theme-provider.tsx`**: A component that wraps the application to provide theme context (light/dark mode) using `next-themes`.
- **`src/components/theme-toggle.tsx`**: A UI component that allows users to switch between light, dark, and system themes, with multilingual text.
- **`src/components/language-toggle.tsx`**: A UI component that allows users to switch the application language between English, Simplified Chinese, Spanish, and French, displaying native language names in the dropdown.
- **`src/i18n.ts`**: The i18next configuration file, defining translation resources for different languages and handling language initialization.
- **`src/lib/utils.ts`**: A utility file containing helper functions, such as `cn` for conditionally joining Tailwind CSS classes.
- **`src/hooks/use-mobile.tsx`**, **`src/hooks/use-toast.ts`**: Custom React hooks used within the application for specific functionalities.
- **`src/components/ui/`**: A directory containing various reusable UI components from Shadcn/ui (e.g., `button.tsx`, `slider.tsx`, `label.tsx`, `dropdown-menu.tsx`).
