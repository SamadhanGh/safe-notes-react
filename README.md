#  Safe Notes Frontend

This repository contains the **frontend** of the Safe Notes Application — a secure and feature-rich note-taking web app. Built using **React**, **Tailwind CSS**, and **Axios**, this frontend communicates seamlessly with the Java Spring Boot backend to offer a clean UI, strong authentication flows, and intuitive note management.

## 🚀 Features

- 🔐 **User Authentication UI**
  - Login/Register with JWT support
  - OAuth2 login via Google and GitHub
  - Two-Factor Authentication (2FA) UI support

- 📝 **Note Management**
  - Create, update, and delete notes
  - Rich text formatting (bold, italics, underline, etc.)
  - Responsive and clean UI with Tailwind CSS

- 🧑‍💼 **Admin Dashboard**
  - View and manage users
  - Role-based access controls
  - View audit logs

## 🛠️ Tech Stack

- **React 18**
- **Tailwind CSS**
- **Axios**
- **React Router DOM**
- **Context API** for global state management

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SamadhanGh/safe-notes-react.git
   cd safe-notes-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Configure environment variables**

   Create a `.env` file in the root and add necessary environment values:

   ```env
   VITE_API_BASE_URL=http://localhost:8080/api
   ```

4. **Run the development server**

   ```bash
   npm start
   ```

5. **Access the frontend**

   Open your browser at: [http://localhost:5173](http://localhost:5173)

## 📂 Folder Structure

```
safe-notes-react/
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components (buttons, inputs, etc.)
│   ├── pages/               # Page components (Login, Register, Notes, etc.)
│   ├── services/            # API interaction layer using Axios
│   ├── context/             # Auth and global state providers
│   ├── routes/              # Application routing
│   └── App.jsx              # Root app component
├── .env                    # Environment configuration
├── tailwind.config.js     # Tailwind CSS setup
└── package.json           # Project metadata and scripts
```

## 📬 Contact

Made with ❤️ by **Samadhan Ghorpade**  
Check out more projects on [GitHub](https://github.com/SamadhanGh) and connect on [LinkedIn](https://www.linkedin.com/in/samadhan-gh/)

## 📜 License

This project is licensed under the MIT License.

