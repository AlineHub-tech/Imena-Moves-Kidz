# 🕺 Imena Moves Kidz - Dance Excellence Management System

[![Vercel Deployment](https://img.shields.io)](https://imena-moves-kidz.vercel.app)
[![Render Backend](https://img.shields.io)](https://imena-backend.onrender.com)
[![MongoDB Atlas](https://img.shields.io)](https://www.mongodb.com)

A robust Full-Stack Management Solution designed for **Imena Moves Kidz** to streamline dance school operations, member engagement, and daily administrative tasks.

---

## 🌐 Live Infrastructure
- **Frontend URL:** [https://imena-moves-kidz.vercel.app](https://imena-moves-kidz.vercel.app)
- **Backend API:** [https://imena-backend.onrender.com](https://imena-backend.onrender.com)

---

## 📸 ScreenShoot

<img width="1349" height="631" alt="fr" src="https://github.com/user-attachments/assets/c33f17f4-d5c5-48a7-a534-10057f7ba40c" />
<img width="1354" height="632" alt="ff3" src="https://github.com/user-attachments/assets/a08971fe-155c-46a1-9470-82f922a2c1ff" />
<img width="1346" height="636" alt="ff2" src="https://github.com/user-attachments/assets/d6f0d014-1ad7-41a8-901b-2fb5b0fbee1a" />
<img width="1339" height="637" alt="ff1" src="https://github.com/user-attachments/assets/aefa5fae-a45b-466b-8701-8c39211274b7" />

---
## 🛠️ Technology Architecture

### **Frontend**
- ![React](https://img.shields.io) **React.js (Vite)** - High-performance UI rendering.
- ![Axios](https://img.shields.io) **Axios** - Seamless API communication.
- ![React Icons](https://img.shields.io) **React Icons** - Interactive SVG iconography.

### **Backend**
- ![Node.js](https://img.shields.io) **Node.js** - Scalable server-side environment.
- ![Express](https://img.shields.io) **Express.js** - RESTful API routing framework.
- ![Mongoose](https://img.shields.io) **Mongoose** - Elegant MongoDB object modeling.

---

## ✨ Core Features & Workflows

### 🔐 **Administrative Control (Admin Dashboard)**
- **Member Management (CRUD):** Full lifecycle management of dancers (Create, Read, Update, Delete).
- **Daily Attendance:** Specialized daily logging system to track student presence/absence with automated date-stamping.
- **Collaborator Directory:** Manage partnerships with choreographers, sponsors, and leaders.
- **Broadcast System:** Create and manage site-wide announcements that sync instantly to the member portal.

### 👥 **Public Insights (Member Dashboard)**
- **Real-time Analytics:** Visual counters for total members, active collaborators, and today's attendance stats.
- **Automated Announcements:** Feed of the latest news and schedules posted by the administration.
- **Dynamic Updates:** Direct connection to the MongoDB cluster ensures data reflects live changes instantly.

---

## 🗺️ Database Schema Structure


| Model | Fields | Description |
| :--- | :--- | :--- |
| **Member** | `name`, `phone`, `role`, `status` | Stores dancer profiles and contact info. |
| **Announcement** | `title`, `content`, `date` | News and updates for the community. |
| **Attendance** | `date`, `records` (Array of Member IDs) | Tracks daily attendance logs. |
| **Collaborator**| `name`, `role`, `email` | Partnership and leadership management. |

---

## 🖼️ Application Preview


| Admin Panel | Member Portal |
| :--- | :--- |
| ![Admin](https://via.placeholder.com) | ![Member](https://via.placeholder.com) |

---

## 🚀 Getting Started (Local Development)

1. **Clone the Project:**
   ```bash
   git clone https://github.com

Configure Environment Variables:
Create a .env file in the root of the backend folder:
env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
Use code with caution.

Install & Run Backend:
bash
npm install
npm run dev
Use code with caution.

Install & Run Frontend:
bash
cd client
npm install
npm run dev
Use code with caution.

🤝 Contribution & License
Contributions are welcome! Please open an issue or submit a pull request.
Distributed under the MIT License.
Developed with ❤️ by Aline Hub Tech

**Would you like me to generate specific CSS to make your live Dashboards look exactly like the professional description in this README?**




