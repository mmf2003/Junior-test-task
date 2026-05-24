# Development Process

## 1. Project Analysis

Analyzed the `server.js` file in detail to fully understand what realtime data the client application would receive.

---

## 2. Dependencies Setup

Updated outdated dependencies and installed:

* Redux Toolkit
* React Redux
* Socket.io Client

These libraries were chosen to manage and store realtime data received from the server.

---

## 3. Constants Configuration

Added a constant for maximum race distance to simplify future configuration and maintenance.

---

## 4. Redux Store Setup

Created Redux Store to centrally manage application state.

---

## 5. Redux Slice Implementation

Created `horsesSlice.js`.

This file is responsible for horse race state management:

* `setHorses` updates state when new realtime data is received from the server
* `resetRace` clears race state on disconnect or restart

---

## 6. Redux Selectors

Created selectors for cleaner and more maintainable access to Redux Store data.

---

## 7. Websocket Lifecycle Hook

Implemented a custom hook responsible for websocket lifecycle management.

---

## 8. Redux Provider Integration

Updated `index.js` using `Provider` to connect Redux Store to the entire React application.

---

## 9. Main Application Setup

Updated `App.js`, which initializes socket connection and renders the main race screen.

---

## 10. RaceBoard Component

Created `RaceBoard` component responsible for rendering the list of horses.

The component receives data from Redux Store and renders each horse using a separate reusable component.

---

## 11. HorseTrack Component

Created `HorseTrack` component responsible for rendering a single horse.

The component displays:

* horse name
* current distance
* progress calculation
* horse movement animation

---

## 12. Styling

Added CSS styling rules for `HorseTrack`.

---

## 13. UI Improvements

Updated the visual appearance of the application and removed default boilerplate tests.

---

## 14. Backend Verification

Started and verified the backend server — realtime data transmission worked correctly.

---

## 15. First Application Launch

Several issues were discovered, mainly caused by the outdated React version used in the original test task setup.

Resolved dependency compatibility issues using:

```bash
--legacy-peer-deps
```

---

## 16. Production Build Verification

Verified production build using:

```bash
npm run build
```

The project was successfully built without errors.

---

## 17. Additional Features & Improvements

Added additional UI and application logic:

* animated progress bars
* winner detection logic
* race restart button

Improved hook implementation for stable and predictable socket behavior.

---

## 18. Testing

Implemented and executed tests.

All tests passed successfully.

---

## 19. Finalization

Final application launch completed successfully.

Updated:

* `README.md`
* `DEVELOPMENT_PROCESS.md`
