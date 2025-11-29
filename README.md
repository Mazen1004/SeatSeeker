# SeatSeeker

<img width="274" height="426" alt="seat-seeker-logo" src="https://github.com/user-attachments/assets/626f2549-71e6-4c80-884c-b6cec5bf91e3" />

This is a project for 4HC3 (Frontend course) at McMaster University.

_No more walking in circles... find your seat now._

SeatSeeker is a mobile-first app built with **React Native + Expo** that helps McMaster students discover, evaluate, and save study spots across campus. Instead of wandering between libraries and buildings hoping to find a good seat, students can quickly see popular spaces, read community ratings, and build a personalized list of favourite spots.

---

## Live Demo

You can try the web version of the prototype here:

👉 **GitHub Pages:** https://mazen1004.github.io/SeatSeeker/

For the best experience, open the link in a desktop browser and switch to a mobile viewport (e.g. iPhone 13 size in DevTools).

---

## Project Purpose

Finding a place to study on a large campus is harder than it should be. Students care about things like:

- Is it **quiet or loud**?
- Are there **outlets** nearby?
- Is there **space for a group**?
- How **busy** does it get during the day?

SeatSeeker was designed to:

- **Reduce time spent wandering** by surfacing popular and recommended spots.
- **Match spaces to study style** using attributes like noise level, seating type, and amenities.
- **Help students remember good spots** using a personalized “Your List” of saved/visited places.
- **Leverage community knowledge** with simple rating flows and shared feedback.

Beyond just “building an app,” this project intentionally applies **interaction design principles** (Norman’s principles, Gestalt laws, conceptual models) to create a clear, learnable, and visually consistent interface.

---

## Key Features

- 📍 **Study Spot Listings**  
  Browse curated study spots (e.g., Mills, Thode, Student Centre) with photos, descriptions, and ratings.

- ❤️ **“Your List” – Saved & Visited Spots**  
  Save your favourite study locations and keep track of where you’ve studied, so you can come back quickly.

- 🔍 **Search & Explore**  
  Search for spots by name or building and scroll through recommended locations that fit different study needs.

- ⭐ **Simple Rating System**  
  Rate spots with a lightweight, fast interaction that encourages frequent feedback.

- ✨ **Popular & Recommended Sections**  
  Discover trending spots and personalized suggestions based on places you’ve saved.

- 👤 **Profile & Study Stats**  
  View a profile screen with a custom avatar and simple stats like:
  - Seats studied in  
  - Spots created  
  - Seats rated  

---

## Screenshots

> Make sure your screenshots are stored under `./screenshots/` in your repo with these filenames, or adjust the paths to match your structure.

### Onboarding & Authentication

**S1 – Get Started**

<img width="1206" height="2622" alt="S1" src="https://github.com/user-attachments/assets/401d61d8-0358-4a83-9196-85ae7eb4ad74" />


**S2 – Sign Up**

<img width="1206" height="2622" alt="S2" src="https://github.com/user-attachments/assets/76079b4f-a5b5-4ed3-b236-8c7252e351a2" />


**S3 – Sign In**

<img width="1206" height="2622" alt="S3" src="https://github.com/user-attachments/assets/8183ebf3-ce32-4d5b-ade0-95ab95aae16f" />


---

### Main App Flow

**S4 – Feed (Popular & Recommended)**  
The default tab after login. Shows popular study spots in a horizontal carousel and recommended spots in larger vertical cards.

<img width="1206" height="2622" alt="S4" src="https://github.com/user-attachments/assets/8a373cf0-757b-4d0c-8cce-4b84d3005335" />

**S5 – Search**  
Search bar and list of results based on your query and interests.

<img width="1206" height="2622" alt="S5" src="https://github.com/user-attachments/assets/080a6545-cc1c-4031-83cc-8b7ed3e52915" />


**S6 – Your List**  
Saved spots with thumbnails and ratings, visually consistent with the feed so it feels familiar.

<img width="1206" height="2622" alt="S6" src="https://github.com/user-attachments/assets/de2a207a-f8b4-4c42-bab2-71712dba6a2b" />


**S7 – Profile & Study Stats**  
Avatar, username, and stat cards that gamify exploring campus and contributing ratings.

<img width="1206" height="2622" alt="S7" src="https://github.com/user-attachments/assets/04782b06-db9c-422e-83a1-c2fc54dea108" />


---

## Tech Stack

- **Framework:** React Native
- **Tooling:** Expo
- **Language:** TypeScript / JavaScript
- **Navigation:** Bottom tab navigation (Feed, Search, Your List, Profile)
- **Styling:** Custom design system with a maroon / beige palette inspired by McMaster branding
- **Deployment:**
  - Local development with Expo
  - Static web export deployed via **GitHub Pages**

---

## Getting Started (Run Locally with Expo)

These steps show how to set up the project locally using Expo.

### 1. Clone the Repository

```bash
git clone https://github.com/mazen1004/SeatSeeker.git
cd SeatSeeker
