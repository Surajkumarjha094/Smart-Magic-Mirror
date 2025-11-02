# Smart Magic Mirror

A personal, interactive, and multi-functional Smart Magic Mirror that serves as the central hub of information and entertainment in your home. This project seamlessly blends a physical mirror aesthetic with a digital display, revealing technological capabilities only when activated.

## 🎯 Project Overview

The Smart Magic Mirror follows the philosophy of "Information at a Glance" - providing essential information in a minimalist, high-contrast interface that's highly readable from a distance. Built with a modular system, each piece of information is an independent component, allowing for easy customization and future expansion.

## ✨ Features

### Essential Core Modules
- **⏰ Time & Date**: Large, prominent display of current time, day, and date
- **👋 Personalized Greeting**: Dynamic greeting that changes based on time of day
- **🌤️ Weather**: Current temperature with visual weather icon and daily forecast

### Information Hub
- **📰 News Ticker**: Horizontally scrolling banner displaying latest headlines
- **📅 Calendar**: Displays upcoming events from synced personal calendar
- **✅ To-Do List**: Editable task list with time scheduling capabilities
  - Add, edit, and complete tasks
  - Set specific times for tasks
  - Mark tasks as completed

### Entertainment
- **🎵 Music Player**: Spotify integration (requires backend setup)
  - Display currently playing song
  - Play/pause and skip controls
- **📺 YouTube Player**: Video playback module (requires backend setup)
- **💬 WhatsApp**: Message notifications (requires backend setup)

### Smart Features
- **Motion Sensor Ready**: Designed to work with PIR sensors for automatic display activation
- **Voice Control Ready**: Architecture supports voice assistant integration

## 🛠️ Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom design system
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## 🎨 Design Principles

- **High Contrast**: White/light gray text on pure black background for mirror effect
- **Minimalism**: Clutter-free, essential information only
- **Modular Layout**: Independent components in distinct zones
- **Intuitive**: Self-explanatory information display

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Setup Steps

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd smart-magic-mirror

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Usage

### Basic Setup
1. The mirror automatically activates after 1 second (simulating motion sensor)
2. All modules are displayed in their designated zones
3. Edit to-do items by clicking the edit icon
4. Add new tasks with specific times using the input form

### Enabling Advanced Features (Spotify, YouTube, WhatsApp)

These features require backend integration:

1. **Enable Lovable Cloud** (if using Lovable platform)
   - Click the Supabase button in the top right
   - Follow the integration steps

2. **Set up API credentials**
   - Spotify: Register app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - YouTube: Create project at [Google Cloud Console](https://console.cloud.google.com)
   - WhatsApp: Set up at [WhatsApp Business API](https://business.whatsapp.com)

## 📁 Project Structure

```
smart-magic-mirror/
├── src/
│   ├── components/
│   │   ├── MagicMirror.tsx          # Main layout component
│   │   └── modules/
│   │       ├── TimeDate.tsx         # Time & date display
│   │       ├── Greeting.tsx         # Personalized greeting
│   │       ├── Weather.tsx          # Weather information
│   │       ├── NewsTicker.tsx       # News headlines
│   │       ├── Calendar.tsx         # Calendar events
│   │       ├── ToDoList.tsx         # Editable to-do list
│   │       └── MusicPlayer.tsx      # Music player controls
│   ├── pages/
│   │   ├── Index.tsx                # Home page
│   │   └── NotFound.tsx             # 404 page
│   ├── index.css                    # Design system & theme
│   └── main.tsx                     # App entry point
├── public/                          # Static assets
└── README.md                        # This file
```

## 🎯 Future Enhancements

- [ ] Motion sensor integration (PIR sensor)
- [ ] Voice control with speech recognition
- [ ] Spotify API integration for real music playback
- [ ] YouTube API for video content
- [ ] WhatsApp notifications system
- [ ] Traffic & commute information
- [ ] Customizable module positioning
- [ ] Multiple user profiles
- [ ] Dark/Light theme toggle
- [ ] Calendar sync (Google Calendar, Outlook)
- [ ] RSS feed customization

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)
- **Live Demo**: [Your deployed URL]
- **Project URL**: https://lovable.dev/projects/dace10f9-8995-429d-88d9-3c5c60a8c483

## 💡 Credits

Built with [Lovable](https://lovable.dev) - The AI-powered web development platform.

---

**Note**: For API integrations (Spotify, YouTube, WhatsApp), backend setup is required. See the Usage section for details.
