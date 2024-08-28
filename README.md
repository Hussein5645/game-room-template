# Web Game Template

This project is a web game template built with HTML, JavaScript, and Firebase. It allows players to create or join game rooms, choose teams, and start games. The game leverages Firebase Hosting and Firebase Realtime Database for real-time interaction and data management.

## Features

- **Create and Join Game Rooms:** Players can create new game rooms or join existing ones using unique room codes.
- **Team Selection:** Players can choose teams within the game room.
- **Real-time Synchronization:** The game state is synchronized across all players in real-time using Firebase Realtime Database.
- **Start Game:** The room creator can start the game once all players are ready.

## Project Structure

- `index.html`: This file serves as the landing page where players can create or join game rooms.
- `room.html`: After joining a room, players are redirected to this page, where they can choose teams and start the game.
- `config.js`: This file contains the Firebase configuration and initialization code.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine.
- A Firebase project set up in the [Firebase Console](https://console.firebase.google.com/).

### Setting Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Set up Firebase Hosting and Realtime Database for your project.
3. Generate the Firebase configuration for your web app:
   - Go to **Project Settings** > **Your Apps** > **Web App**.
   - Copy the Firebase SDK snippet.

### Configuring Firebase in the Project

1. Open `config.js` in your project.
2. Replace the placeholder values with your Firebase configuration:

   ```javascript
   // config.js

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
