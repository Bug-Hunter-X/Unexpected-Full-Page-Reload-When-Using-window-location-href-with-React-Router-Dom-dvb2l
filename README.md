# Unexpected Full Page Reload with window.location.href in React Router

This repository demonstrates an unexpected behavior when using `window.location.href` for navigation within a React application using `react-router-dom`.  Instead of a smooth transition managed by the router, it triggers a full page reload.

## Problem

The provided `bug.js` file shows a simple React app with two routes, 'Home' and 'About'. Clicking a button on the Home page, which uses `window.location.href` to navigate to '/about', causes a full page reload instead of a client-side route change.

## Solution

The `bugSolution.js` file offers a solution by utilizing React Router's `Navigate` component for navigation. This ensures seamless transitions without full page reloads, maintaining the intended client-side routing behavior.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
