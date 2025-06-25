# 🌿 EcoBari - Gardening Community Platform

A community-driven web platform for gardening enthusiasts to share tips, connect with local gardeners, ask plant care questions, and join events. Whether it's composting, hydroponics, or balcony gardening — EcoBari brings every green thumb together in one place.

## 🔗 Live Site

[https://ecobary-gardening-community.web.app/](https://ecobary-gardening-community.web.app/)

---

## ✨ Features

- 🔐 User Authentication (Login / Sign Up with Firebase)
- 🌓 Light & Dark Mode Toggle
- 🪴 Share Gardening Tips with title, description, category, image, difficulty, and visibility
- 🔍 Browse and Explore other users’ shared tips
- 👍 Like tips and see popularity grow
- ✏️ Update and 🗑️ Delete your shared tips
- 📂 Private Dashboard for users to manage their posts
- 🔒 Protected Routes for authorized access

---

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS, Daisy UI
- **Routing:** React Router DOM
- **Authentication:** Firebase Authentication
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

---

## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.8",
  "axios": "^1.10.0",
  "firebase": "^11.9.1",
  "flowbite": "^3.1.2",
  "lottie-react": "^2.4.1",
  "react": "^19.1.0",
  "react-countdown-circle-timer": "^3.2.1",
  "react-datepicker": "^8.4.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.6.13",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.8"
}
```

## ⚙️ How to Run Locally

### 1.Clone the repository
```bash
git clone https://github.com/Abdullah0604/EcoBari-gardening-community-platform.git
cd EcoBari-gardening-community-platform
```
### 2.Install Dependencies
```bash
npm install 
```
### 3.Create and Configure .env File
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```
### 4.Run the application
```bash
npm run dev 
```
