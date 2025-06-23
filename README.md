# Portfolio

## Project Overview

This repository contains the source for my personal portfolio built with **React**, **TypeScript**, and **Vite**. It uses Tailwind CSS for styling and deploys to GitHub Pages via the `gh-pages` package.

## Prerequisites

- **Node.js** v20 or later and **npm**.
- If Node is not installed, you can use [NVM](https://github.com/nvm-sh/nvm) and run:
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  nvm install --lts
  ```

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start a local dev server with hot reload:
```bash
npm run dev
```
The app is served at [http://localhost:5173](http://localhost:5173) by default.

## Build Instructions

Create a production build in the `dist` directory:
```bash
npm run build
```
You can preview the build locally with:
```bash
npm run preview
```

## Deployment

The project is configured to deploy to **GitHub Pages**. After building, publish the `dist` folder with:
```bash
npm run deploy
```
The `predeploy` script will automatically run `npm run build` before deploying.
