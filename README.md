# SeatSeeker

_No more walking in circles... Find your seat now._

SeatSeeker is a mobile-first study place review app that helps McMaster students quickly discover, evaluate, and save study spots across campus (e.g., quiet vs. collaborative, near outlets, close to food).:contentReference[oaicite:0]{index=0}

The app was designed and prototyped as a React Native + Expo project, with a consistent maroon visual identity inspired by McMaster branding and a custom SeatSeeker logo.

---

## Live Demo (GitHub Pages)

You can explore the interactive prototype on the web:

**Live prototype:** https://mazen1004.github.io/SeatSeeker/ :contentReference[oaicite:1]{index=1}  

For the best experience, open the link in a desktop browser and switch to a mobile viewport (e.g., **390 × 844** iPhone size in DevTools).:contentReference[oaicite:2]{index=2}

---

## Project Purpose

Finding a good place to study on a large campus can be surprisingly hard. Students waste time wandering between libraries and buildings, hoping to find a seat that matches their needs (quiet vs. collaborative, outlets, lighting, etc.).:contentReference[oaicite:3]{index=3}

SeatSeeker was built to:

- **Reduce time spent wandering** by surfacing popular and recommended spots.:contentReference[oaicite:4]{index=4}  
- **Match spaces to study style** by exposing attributes like noise level, seating type, and amenities.:contentReference[oaicite:5]{index=5}  
- **Help students remember good spots** via a personalized “Your List” of saved and visited places.:contentReference[oaicite:6]{index=6}  
- **Leverage community knowledge** using ratings and recommendations from other students.:contentReference[oaicite:7]{index=7}  

The project focuses on **interaction design quality**: clear mappings, strong signifiers, and consistent navigation using principles from Norman and Gestalt psychology.:contentReference[oaicite:8]{index=8}

---

## Key Features

- 📍 **Study place listings**  
  Browse curated study spots across campus (indoor and outdoor) with names, locations, photos, and ratings.:contentReference[oaicite:9]{index=9}  

- ❤️ **“Your List” – favourites & visited**  
  Save your favourite spots and keep track of places you’ve studied in, so you can quickly return to them later.:contentReference[oaicite:10]{index=10}  

- 🔍 **Search & filter**  
  Search by building or type (e.g., _“Mills”, “cafe”_) and filter by factors that actually matter to students (noise level, seating style, etc.).:contentReference[oaicite:11]{index=11}  

- ⭐ **Fast rating flow**  
  View community ratings and submit your own rating with minimal friction to keep feedback lightweight and frequent.:contentReference[oaicite:12]{index=12}  

- ✨ **Recommendations & popular spots**  
  See popular study spots and get recommendations based on where you’ve studied and what you like.:contentReference[oaicite:13]{index=13}  

- 📊 **Profile & study stats**  
  View simple gamified stats such as “seats studied in”, “spots created”, and “seats rated”, giving a sense of progress and contribution.:contentReference[oaicite:14]{index=14}  

---

## Screenshots

_(Update file paths to match your repo — e.g., `./screenshots/...` or `./assets/images/...`.)_

### Onboarding & Auth

- **S1 – Get Started**  
  ![S1 – Get Started screen](./screenshots/S1_get_started.png)  
  Animated tagline and clear call-to-action (“Get Started” / “Sign in”) against a maroon background with the SeatSeeker logo.:contentReference[oaicite:15]{index=15}  

- **S2 – Sign Up**  
  ![S2 – Sign Up screen](./screenshots/S2_sign_up.png)  

- **S3 – Sign In**  
  ![S3 – Sign In screen](./screenshots/S3_sign_in.png)  

Both auth screens reuse the same visual identity to maintain a strong conceptual model and consistency.:contentReference[oaicite:16]{index=16}  

### Main App Flow

- **S4 – Feed (Popular & Recommended)**  
  ![S4 – Feed screen](./screenshots/S4_feed.png)  
  Default tab after login, with popular spots in a horizontal carousel and recommended spots in large vertical cards.:contentReference[oaicite:17]{index=17}  

- **S5 – Search**  
  ![S5 – Search screen](./screenshots/S5_search.png)  
  Large pill-shaped search bar at the top, following common mobile patterns.:contentReference[oaicite:18]{index=18}  

- **S6 – Your List**  
  ![S6 – Your List screen](./screenshots/S6_your_list.png)  
  Saved spots shown as cards with thumbnails and user ratings, visually consistent with the Feed for an easy mental model.:contentReference[oaicite:19]{index=19}  

- **S7 – Profile & Study Stats**  
  ![S7 – Profile screen](./screenshots/S7_profile.png)  
  Avatar, username, and stat cards (“seats studied”, “spots created”, “seats rated”) to visualize engagement and campus exploration.:contentReference[oaicite:20]{index=20}  

---

## Tech Stack

- **Frontend:** React Native + Expo
- **Navigation:** Bottom tab navigation (Feed, Search, Your List, Profile)
- **Styling:** Custom design system with a maroon / beige palette, inspired by McMaster branding
- **Deployment:**  
  - Local development via Expo  
  - Static web export deployed to **GitHub Pages**

---

## Getting Started (Local Expo Setup)

These instructions assume you’re using **Node.js ≥ 18** and **npm** (or `yarn`).

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/SeatSeeker.git
cd SeatSeeker
