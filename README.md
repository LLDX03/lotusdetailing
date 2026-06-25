# Lotus Detailing

A responsive website for **Lotus Detailing**, a car and motorcycle detailing company in Singapore. This is a side project built for practice, with the goal of creating a polished business website that feels realistic, visual, and easy for customers to use.

## Overview

The site presents Lotus Detailing's services, pricing, gallery, customer trust signals, and contact information in a single-page layout. It is designed to help visitors quickly understand what the business offers and make a booking through WhatsApp.

## Features

- Responsive single-page layout
- Hero section with brand imagery
- Car, van, and bike service pricing
- Interactive before-and-after gallery
- Photo gallery using real detailing images
- About section with business highlights
- Reviews and trust-focused content
- Contact section with WhatsApp, email, address, opening hours, and Google Maps
- Smooth animations with Framer Motion
- Icons from Lucide React

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Oxlint

## Getting Started

### Prerequisites

Install Node.js before running the project.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
lotus/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |   |-- gallery/
|   |   |-- hero.png
|   |   `-- lotus-logo.jpg
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Gallery.jsx
|   |   |-- Hero.jsx
|   |   |-- Logo.jsx
|   |   |-- Navbar.jsx
|   |   |-- Reviews.jsx
|   |   `-- Services.jsx
|   |-- lib/
|   |   `-- config.js
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Configuration

Business contact links and details are stored in:

```text
src/lib/config.js
```

Update this file if the phone number, email, address, map link, or social media links change.

## Purpose

This project was created as a personal practice build to improve frontend development skills, including:

- React component structure
- Responsive page layout
- Styling with utility classes
- Animations and scroll effects
- Realistic business website content
- User-friendly calls to action

## Status

This is a practice project and can continue to be improved with better accessibility, form handling, search engine metadata, performance checks, and deployment setup.
