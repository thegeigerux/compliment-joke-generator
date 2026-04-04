# Compliment + Joke Generator

A polished, portfolio-ready static web app that gives users two quick mood boosts in one experience.

In **Compliments** mode, users get warm, thoughtful, slightly cheeky compliments.  
In **Jokes** mode, users get light, clean jokes, including setup-and-punchline jokes with a delayed reveal for extra comedic timing.

The app is designed to feel modern, premium, and playful without becoming messy or childish.

---

## Overview

This project was built as a front-end portfolio piece to show more than basic random text generation. It focuses on:

- clean visual design
- thoughtful user experience
- polished interaction details
- accessible structure
- local state persistence with `localStorage`
- responsive layout for desktop and mobile

It is a static website built with plain **HTML**, **CSS**, and **JavaScript**.

---

## Features

### Dual modes
- Toggle between **Compliments** and **Jokes**
- Each mode has its own visual identity
- Compliments use a **purple** accent
- Jokes use a **teal** accent

### Smart content generation
- Generates random compliments and jokes
- Reduces immediate repetition with recent-history tracking
- Includes a larger content bank so results stay fresh longer

### Joke punchline timing
- Question-and-punchline jokes reveal the punchline after a short delay
- One-line jokes display normally
- Copy, share, and save still use the full joke instantly

### Favorites system
- Save favorites with a heart button
- Favorites persist with `localStorage`
- Remove saved items at any time
- Filter saved items by:
  - **All**
  - **Compliments**
  - **Jokes**
- Saved count updates based on the selected tab

### Copy and share
- Copy the current compliment or joke to the clipboard
- Share with the Web Share API on supported devices
- Falls back gracefully when sharing is unavailable

### Responsive and accessible
- Responsive layout for desktop and mobile
- Semantic HTML structure
- Keyboard-friendly controls
- Screen reader live regions for generated content and status updates
- Good color contrast and clear visual hierarchy
- Reduced-motion support

---

## Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **localStorage**
- **Google Fonts** using Inter

---

## Why this project works as a portfolio piece

This is not just a random generator. It is a small product with personality.

It demonstrates:
- front-end architecture without a framework
- attention to interaction design
- UI state management
- conditional rendering logic
- persistence with browser storage
- design consistency across multiple content modes
- practical accessibility considerations

It is a nice example of taking a simple idea and making it feel intentional, refined, and fun to use.

---

## Folder Structure

```text
compliment-joke-generator/
├── index.html
├── style.css
├── script.js
└── README.md