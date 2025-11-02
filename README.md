# Smart Magic Mirror

A personal, interactive, and multi-functional **Smart Magic Mirror** that serves as the central hub of information and entertainment in your home. This project seamlessly blends a physical mirror aesthetic with a digital display, revealing technological capabilities only when activated.

## 🪞 Description

**Smart Magic Mirror** is an interactive, modular digital mirror that displays essential daily information such as time, weather, news, calendar events, and to-do lists — all in a clean, minimalist interface. Built with **React, TypeScript, and Tailwind CSS**, it brings “**information at a glance**” to your smart home.

---

## 🎯 Project Overview

The Smart Magic Mirror follows the philosophy of **"Information at a Glance"** — providing essential information in a minimalist, high-contrast interface that's highly readable from a distance. Built with a modular system, each piece of information is an independent component, allowing for easy customization and future expansion.

---

## ✨ Features

### 🧩 Core Modules
- **⏰ Time & Date** – Prominent real-time clock and date display  
- **👋 Personalized Greeting** – Dynamic greetings based on time of day  
- **🌤️ Weather** – Current conditions and forecast  
- **📰 News Ticker** – Live scrolling headlines  
- **📅 Calendar** – Upcoming events from synced calendar  
- **✅ To-Do List** – Add, edit, and mark tasks as complete  
- **🎵 Music Player** – Spotify integration (requires backend)  
- **📺 YouTube Player** – Embedded video playback (backend setup)  
- **💬 WhatsApp Notifications** – Message preview (backend setup)

### 🧠 Smart Features
- **Motion Sensor Ready** – Auto-activation using PIR sensors  
- **Voice Control Ready** – Supports assistant integration  

---

## 🛠️ Technologies Used

- **React** – Frontend framework  
- **TypeScript** – Type-safe development  
- **Vite** – Fast build tool and dev server  
- **Tailwind CSS** – Utility-first styling  
- **shadcn/ui** – Modern UI components  
- **Lucide React** – Clean icon library  

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Steps
1. Clone the repository  
   ```bash
   git clone <YOUR_GIT_URL>
   ```
2. Navigate to the project directory  
   ```bash
   cd smart-magic-mirror
   ```
3. Install dependencies  
   ```bash
   npm install
   ```
4. Run the development server  
   ```bash
   npm run dev
   ```

The app will be available at **http://localhost:5173**

---

## 🚀 Usage

1. The mirror activates automatically after 1 second (simulating motion sensor).  
2. All modules load in their respective zones.  
3. Tasks can be added, edited, or marked complete directly.  
4. Configure backend integrations (Spotify, YouTube, WhatsApp) for advanced features.  

---

## 📁 Project Structure

smart-magic-mirror/
├── public/                     # Static assets  
├── src/  
│   ├── components/             # Reusable UI components  
│   │   ├── MagicMirror.tsx     # Main layout container  
│   │   └── modules/            # Independent info modules  
│   │       ├── TimeDate.tsx  
│   │       ├── Greeting.tsx  
│   │       ├── Weather.tsx  
│   │       ├── NewsTicker.tsx  
│   │       ├── Calendar.tsx  
│   │       ├── ToDoList.tsx  
│   │       └── MusicPlayer.tsx  
│   ├── pages/  
│   │   ├── Index.tsx           # Main display page  
│   │   └── NotFound.tsx        # 404 fallback  
│   ├── index.css               # Theme and layout styles  
│   └── main.tsx                # App entry point  
├── package.json  
└── README.md  

---

## 🎯 Future Enhancements

- [ ] Motion sensor (PIR) integration  
- [ ] Voice assistant control  
- [ ] Spotify API for real playback  
- [ ] YouTube API integration  
- [ ] WhatsApp notifications  
- [ ] Traffic and commute data  
- [ ] Custom module positioning  
- [ ] Multiple user profiles  
- [ ] Dark/Light theme toggle  
- [ ] Google/Outlook calendar sync  
- [ ] RSS feed customization  

---

