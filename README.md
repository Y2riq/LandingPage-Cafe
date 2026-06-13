# Monkey Coffee Landing Page

This project is a frontend slicing implementation for the Frontend Intern Technical Skills Test. The landing page is based on the provided Monkey Coffee design reference.

## Live Demo

Live URL: https://landing-page-cafe-dusky.vercel.app/

## Repository

Repository URL: https://github.com/Y2riq/LandingPage-Cafe

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* Lucide React
* Vercel

## Features

* Responsive landing page for desktop, tablet, and mobile
* Hero section
* Highlighted signature menu section
* What We Serve section with icons
* Ambience gallery section
* About Us section
* Visit Us section
* Footer section
* Hover effects
* Clean and reusable component structure

## Installation

Clone this repository:

git clone https://github.com/Y2riq/LandingPage-Cafe

Go to the project folder:

cd LandingPage-Cafe

Install dependencies:

npm install

Run the development server:

npm run dev

Open in browser:

http://localhost:3000

## Build

To build the project, run:

npm run build

## Hydration Issue Handling

This project mostly uses static components to avoid hydration mismatch.

If browser-only features such as localStorage, dark mode persistence, or cart persistence are added in the future, the browser data should be accessed inside useEffect in a client component. This prevents hydration mismatch because localStorage is only available in the browser and not during server-side rendering.

## Image Credits

Pinterest & Unsplash

## Author

Ariq Fadhilah Saputra
