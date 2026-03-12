# 🕺 Imena Moves Kidz - Dance Excellence Management System

A robust Full-Stack Management Solution designed for **Imena Moves Kidz** to streamline dance school operations, member engagement, and daily administrative tasks.

---

## 🌐 Live Infrastructure
- **Frontend URL:** [https://imena-moves-kidz.vercel.app](https://imena-moves-kidz.vercel.app)
- **Backend API:** [https://imena-backend.onrender.com](https://imena-backend.onrender.com)

---

## 📸 ScreenShoot
<img width="1348" height="630" alt="imena" src="https://github.com/user-attachments/assets/b7e773eb-9adf-40ee-89b5-515a9c8eb728" />
<img width="1351" height="632" alt="imen1" src="https://github.com/user-attachments/assets/71679843-c010-46ac-88a1-b2a2ad7e9f69" />
<img width="1350" height="635" alt="ime3" src="https://github.com/user-attachments/assets/9a0c4999-f181-4419-a13a-508f29de22fe" />

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

Install & Run Backend:
bash
npm install
npm run dev

Install & Run Frontend:
bash
cd client
npm install
npm run dev

🤝 Contribution & License
Contributions are welcome! Please open an issue or submit a pull request.
Distributed under the MIT License.
Developed with ❤️ by Aline Hub Tech

**Would you like me to generate specific CSS to make your live Dashboards look exactly like the professional description in this README?**




