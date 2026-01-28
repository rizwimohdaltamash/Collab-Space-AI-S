# 🚀 SmartBoard - AI-Powered Task Management Platform

<div align="center">



**An intelligent, collaborative task management platform with AI-powered recommendations, drag-and-drop interface, and real-time team collaboration.**



</div>

---

## 🛠 Tech Stack

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0.0-47A248?style=flat-square&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?style=flat-square&logo=json-web-tokens&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-FF6B6B?style=flat-square)

**Frontend:**
- **React 18.3.1** - Modern UI library with hooks and context
- **Vite 5.4.2** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4.0** - Utility-first CSS framework for rapid UI development
- **React Router DOM 6.20.0** - Client-side routing
- **@hello-pangea/dnd 18.0.1** - Beautiful drag-and-drop for lists and cards
- **qrcode.react 4.2.0** - QR code generation for easy board sharing

**Backend:**
- **Node.js 18+** - JavaScript runtime
- **Express 4.18.2** - Fast, minimalist web framework
- **MongoDB 8.0.0** (via Mongoose) - NoSQL database for flexible data storage
- **JWT (jsonwebtoken 9.0.2)** - Secure authentication and authorization
- **bcryptjs 2.4.3** - Password hashing

**AI & Intelligence:**
![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-FF6B6B?style=flat-square)

- **Groq SDK 0.37.0** - Ultra-fast LLM inference with LLaMA 3.3 70B
- **Custom AI Recommendation Engine** - Rule-based + AI-powered task insights

---

## ✨ Features

### 🎯 Core Functionality
- **📋 Kanban Board System** - Create unlimited boards with 4 pre-configured static lists:
  - **To Do** - Tasks waiting to be started
  - **In Progress** - Tasks currently being worked on
  - **Testing** - Tasks under review or testing
  - **Done** - Completed tasks
- **🎨 Drag & Drop Interface** - Intuitive card movement between lists with smooth animations
- **✏️ Rich Card Management** 
  - Title, description, and labels
  - Due date tracking with visual indicators
  - Inline editing and quick actions
  - Card archiving and deletion
- **🔄 Auto-List Creation** - Static lists are automatically created when you access any board for the first time

### 🤖 AI-Powered Intelligence
- **✨ Smart Recommendations** - AI analyzes your tasks and suggests:
  - Optimal due dates based on task complexity
  - Priority levels (High/Medium/Low)
  - Estimated effort and time requirements
  - Actionable next steps and potential blockers
  - Ideal list placement
- **🧠 Contextual Insights** - AI understands your board context and other tasks
- **⚡ Real-time Analysis** - Powered by Groq's ultra-fast LLaMA 3.3 70B model

### 👥 Collaboration Features
- **🔗 Share Links** - One-click shareable board links
- **📱 QR Code Sharing** - Generate and download QR codes for instant mobile access
- **🌐 Multi-Platform Sharing** - Direct share to WhatsApp, Telegram, Email, Twitter
- **👤 Team Members** - View all board collaborators with roles (no duplicates!)
- **🔓 Auto-Join** - Anyone with the link can join and collaborate
- **✅ Smart Member Management** - Automatic duplicate prevention ensures each user appears only once

### 🔐 Security & Authentication
- **🔒 JWT Authentication** - Secure user sessions
- **🔑 Password Encryption** - bcrypt hashing for user credentials
- **👮 Protected Routes** - Private board access control
- **🎫 Token-Based API** - Secure backend communication

### 🎨 User Experience
- **🌈 Modern UI** - Gradient designs, glassmorphism, smooth transitions
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **⚡ Fast Performance** - Optimistic UI updates for instant feedback
- **🎭 Hover Effects** - Interactive elements with beautiful micro-animations
- **🔔 Real-time Feedback** - Loading states, success/error messages

---

## 📁 Project Structure

```
CollabSpaceAI/
│
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── CreateBoardModal.jsx
│   │   │   ├── CreateCardModal.jsx
│   │   │   ├── CreateListModal.jsx
│   │   │   ├── EditCardModal.jsx
│   │   │   ├── RecommendationsPanel.jsx   # AI insights UI
│   │   │   ├── PrivateRoute.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   │
│   │   ├── pages/               # Full-page components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Boards.jsx       # Dashboard with all boards
│   │   │   └── Board.jsx        # Main kanban board view
│   │   │
│   │   ├── context/             # Global state management
│   │   │   └── AuthContext.jsx  # User authentication context
│   │   │
│   │   ├── utils/               # API and helper functions
│   │   │   ├── api.js           # Auth API calls
│   │   │   └── boardsApi.js     # Boards, lists, cards API
│   │   │
│   │   ├── App.jsx              # Main app component + routing
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles
│   │
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── vercel.json              # Vercel deployment config
│
└── server/                      # Backend Node.js application
    ├── config/
    │   └── db.js                # MongoDB connection
    │
    ├── models/                  # Mongoose schemas
    │   ├── User.js
    │   ├── Board.js
    │   ├── List.js
    │   └── Card.js
    │
    ├── controllers/             # Business logic
    │   ├── authController.js    # Login, register, user management
    │   ├── boardController.js   # Board CRUD operations
    │   ├── listController.js    # List management
    │   └── cardController.js    # Card operations + AI integration
    │
    ├── routes/                  # API endpoints
    │   ├── auth.js              # /api/auth/*
    │   ├── boards.js            # /api/boards/*
    │   ├── lists.js             # /api/lists/*
    │   └── cards.js             # /api/cards/*
    │
    ├── middleware/
    │   └── auth.js              # JWT verification middleware
    │
    ├── utils/                   # Helper functions
    │   ├── groqAI.js            # Groq AI integration
    │   └── recommendations.js   # Rule-based recommendations
    │
    ├── index.js                 # Server entry point
    ├── package.json
    └── .env.example             # Environment variables template
```

---

## 🏗 Architecture

### System Design

```mermaid
graph TB
    subgraph "Frontend (React + Vite)"
        UI[User Interface]
        Router[React Router]
        Context[Auth Context]
        Components[Components]
    end

    subgraph "Backend (Node.js + Express)"
        API[REST API]
        Auth[JWT Auth Middleware]
        Controllers[Controllers]
        Models[Mongoose Models]
    end

    subgraph "Database"
        MongoDB[(MongoDB Atlas)]
    end

    subgraph "AI Services"
        Groq[Groq LLaMA 3.3]
        Rules[Rule Engine]
    end

    UI --> Router
    Router --> Context
    Context --> Components
    Components --> API
    
    API --> Auth
    Auth --> Controllers
    Controllers --> Models
    Controllers --> Rules
    Controllers --> Groq
    
    Models --> MongoDB
    
    Groq -.AI Insights.-> Controllers
    Rules -.Recommendations.-> Controllers
```

### Data Flow

```mermaid
sequenceDiagram
    participant User
    participant React
    participant API
    participant AI as AI Engine
    participant DB as MongoDB

    User->>React: Drag & Drop Card
    React->>React: Optimistic UI Update
    React->>API: PUT /api/cards/:id/move
    API->>DB: Update Card Position
    DB-->>API: Success
    API-->>React: Updated Card
    
    User->>React: Click "AI Suggestions"
    React->>API: GET /api/cards/:id/recommendations
    API->>DB: Fetch Board Context
    API->>AI: Analyze Task
    AI-->>API: Insights + Recommendations
    API-->>React: AI Response
    React->>User: Display Recommendations
```

### Database Schema

#### **User Collection**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

#### **Board Collection**
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  owner: ObjectId (ref: User),
  members: [{
    user: ObjectId (ref: User),
    role: String (admin/member)
  }],
  createdAt: Date,
  updatedAt: Date
}
```

#### **List Collection**
```javascript
{
  _id: ObjectId,
  title: String,
  board: ObjectId (ref: Board),
  position: Number,
  createdAt: Date
}
```

#### **Card Collection**
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  list: ObjectId (ref: List),
  board: ObjectId (ref: Board),
  position: Number,
  dueDate: Date,
  labels: [String],
  assignedTo: [ObjectId (ref: User)],
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### API Architecture

#### **RESTful Endpoints**

```
Authentication:
POST   /api/auth/register    - Create new user
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user

Boards:
GET    /api/boards           - Get user's boards
POST   /api/boards           - Create new board
GET    /api/boards/:id       - Get specific board
PUT    /api/boards/:id       - Update board
DELETE /api/boards/:id       - Delete board
POST   /api/boards/:id/invite - Invite user to board

Lists:
GET    /api/lists/board/:id  - Get all lists for board
POST   /api/lists            - Create new list
PUT    /api/lists/:id        - Update list
DELETE /api/lists/:id        - Delete list

Cards:
GET    /api/cards/board/:id  - Get all cards for board
GET    /api/cards/list/:id   - Get cards for specific list
POST   /api/cards            - Create new card
GET    /api/cards/:id        - Get specific card
PUT    /api/cards/:id        - Update card
DELETE /api/cards/:id        - Delete card
PUT    /api/cards/:id/move   - Move card to different list
PUT    /api/cards/reorder    - Reorder cards
GET    /api/cards/:id/recommendations - Get AI insights ✨
```

### AI Recommendation Engine

The platform uses a **hybrid AI approach**:

1. **Rule-Based Engine** (`recommendations.js`)
   - Analyzes task patterns
   - Suggests due dates based on complexity
   - Identifies overdue tasks
   - Recommends priority levels

2. **Groq AI Integration** (`groqAI.js`)
   - Uses LLaMA 3.3 70B model
   - Ultra-fast inference (< 1 second)
   - Contextual understanding of board state
   - Natural language insights

**AI Insights Include:**
- 📅 Due date suggestions with reasoning
- 🎯 Priority classification
- ⏱️ Effort estimation
- 📝 Actionable step breakdowns
- ⚠️ Potential blocker identification
- 🔄 List movement recommendations

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** installed
- **MongoDB** (local or Atlas account)
- **Groq API Key** (get from [groq.com](https://groq.com))
- **Git** for version control

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/CollabSpaceAI.git
cd CollabSpaceAI
```

#### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
GROQ_API_KEY=your_groq_api_key_here
```

Start backend server:
```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

#### 3️⃣ Frontend Setup
```bash
cd client
npm install
```

Create `.env` file (optional):
```env
VITE_API_URL=http://localhost:5000
```

Start frontend dev server:
```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

#### 4️⃣ Access the Application
1. Open browser to `http://localhost:5173`
2. Register a new account
3. Create your first board
4. Start managing tasks! 🎉

---

## 📦 Deployment

### Frontend (Vercel)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Configure:
     - **Framework**: Vite
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **Environment Variables** (in Vercel dashboard)
   ```
   VITE_API_URL=https://your-backend.render.com
   ```

### Backend (Render)

1. **Create Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Environment Variables**
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_production_jwt_secret
   GROQ_API_KEY=your_groq_api_key
   PORT=5000
   ```

4. **Deploy** 🚀

### MongoDB (Atlas)

1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Whitelist IP addresses (or use 0.0.0.0/0 for development)
4. Get connection string
5. Add to backend `.env`

---

## 🎯 Usage Examples

### Creating a Board
1. Click "Create New Board" on dashboard
2. Enter board name and description
3. Click "Create" - your Kanban board is ready!
4. **4 static lists are automatically created**: To Do, In Progress, Testing, Done

### Adding Tasks
1. Click "+ Add a card" in any list
2. Fill in title, description, labels
3. Set due date (or let AI suggest one)
4. Click "Create Card"

### Getting AI Recommendations
1. Hover over any card
2. Click "✨ AI Suggestions"
3. View insights for:
   - Priority level
   - Estimated effort
   - Suggested due date
   - Action steps
   - Potential blockers

### Sharing a Board
1. Click "Share" button in header
2. Choose sharing method:
   - Copy link
   - Generate QR code
   - Share via WhatsApp/Telegram/Email
3. Collaborators can join instantly!

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 👨‍💻 Author

**Mohd. Altamash Rizwi**

---

## 🙏 Acknowledgments

- **React Team** - For the amazing library
- **Groq** - For ultra-fast AI inference
- **MongoDB** - For flexible data storage
- **Vercel & Render** - For easy deployment
- **TailwindCSS** - For beautiful, rapid UI development

---


<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

Made with ❤️ by Altamash

</div>
