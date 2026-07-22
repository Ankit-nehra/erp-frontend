# 🎓 EduCore ERP

<div align="center">

<img src="./src/assets/banner.png" alt="EduCore ERP Banner" width="100%"/>

<br/>

## 🏫 Complete School Website + ERP Management System

### A Full-Stack Digital Platform for Managing Students, Teachers, Administration & School Operations

<br/>

<p align="center">

<img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>

<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>

<img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express"/>

<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>

<img src="https://img.shields.io/badge/PostgreSQL-Supabase-336791?style=for-the-badge&logo=postgresql"/>

<img src="https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary"/>

<img src="https://img.shields.io/badge/JWT-Security-orange?style=for-the-badge"/>

</p>


<p align="center">

<a href="https://erp-frontend-eight-iota.vercel.app/">

<img src="https://img.shields.io/badge/🚀_Live_Demo-4285F4?style=for-the-badge"/>

</a>

<a href="https://github.com/Ankit-nehra/erp-frontend">

<img src="https://img.shields.io/badge/💻_Source_Code-181717?style=for-the-badge&logo=github"/>

</a>

</p>


⭐ If you like this project, consider giving it a star.

</div>


---

# 📖 Overview

**EduCore ERP** is a complete **School Website + Enterprise Resource Planning (ERP)** system designed to digitize school operations and improve communication between students, teachers, administrators, and principals.

The platform combines:

- A dynamic public school website
- A role-based ERP management system
- Academic tracking
- Attendance management
- Examination management
- Student performance monitoring

EduCore ERP provides separate dashboards for:

| Role | Purpose |
|---|---|
| 👨‍🎓 Student | Access personal academic information |
| 👩‍🏫 Teacher | Manage assigned classes and academic activities |
| 👨‍💼 Admin | Control school operations and website content |
| 🎓 Principal | Monitor overall school performance |

---

# 🚀 Problem & Solution

## ❌ Traditional School Management Problems

| Problem | Impact |
|---|---|
| Manual attendance records | Time consuming and error prone |
| Paper-based results | Difficult performance tracking |
| Separate communication systems | Information delay |
| Manual website updates | Requires technical dependency |
| Limited student analytics | Difficult decision making |

## ✅ EduCore ERP Solution

| Solution | Benefit |
|---|---|
| Digital attendance system | Faster and accurate records |
| Online marks management | Easy result tracking |
| Role-based dashboards | User-specific access |
| Dynamic website CMS | Admin controlled updates |
| Performance analytics | Better monitoring |

---

# ✨ Features

## 🌐 Dynamic School Website

The website provides a digital presence for the school and allows administrators to manage public content.

| Feature | Description |
|---|---|
| 📰 Notices | Publish important announcements |
| 🖼 Gallery | Upload school images |
| 🏆 Achievements | Showcase school achievements |
| 🏫 School Information | Display institution details |
| 📞 Contact Section | Provide communication details |

---

## 🏫 ERP Management System

EduCore ERP provides four dedicated dashboards.

| Dashboard | Major Responsibilities |
|---|---|
| 👨‍🎓 Student Portal | Profile, attendance, results, notices, timetable |
| 👩‍🏫 Teacher Portal | Attendance, marks, syllabus, class management |
| 👨‍💼 Admin Portal | Admissions, assignments, website management |
| 🎓 Principal Portal | Performance and school monitoring |

---

# 📚 Table of Contents

- [Overview](#-overview)
- [Problem & Solution](#-problem--solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Website Module](#-website-module)
- [ERP Modules](#-erp-modules)
  - [Student Portal](#-student-portal)
  - [Teacher Portal](#-teacher-portal)
  - [Admin Portal](#-admin-portal)
  - [Principal Portal](#-principal-portal)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Folder Structure](#-folder-structure)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Future Roadmap](#-future-roadmap)
- [Contribution](#-contribution)
- [License](#-license)

---
# 🛠 Tech Stack

EduCore ERP is built using modern full-stack technologies with a separate database architecture for website content and ERP operations.

<table>

<tr>

<td width="33%">

## 🎨 Frontend

| Technology | Usage |
|---|---|
| ⚛️ React.js | User Interface |
| 🔀 React Router | Navigation |
| 📡 Axios | API Communication |
| 🎨 CSS / Tailwind CSS | Styling |

</td>

<td width="33%">

## ⚙ Backend

| Technology | Usage |
|---|---|
| 🟢 Node.js | Server Runtime |
| 🚂 Express.js | REST API |
| 🔐 JWT | Authentication |
| 📤 Multer | File Handling |
| ☁️ Cloudinary | Image Storage |

</td>

<td width="33%">

## 🗄 Database

| Technology | Usage |
|---|---|
| 🍃 MongoDB | Website Data |
| 🐘 PostgreSQL | ERP Data |
| ⚡ Supabase | PostgreSQL Platform |
| 📦 pg | PostgreSQL Client |

</td>

</tr>

</table>


---

# 🏗 System Architecture

EduCore ERP follows a modular full-stack architecture where website data and ERP data are managed separately.

```mermaid
flowchart TD

USER[Users]

USER --> WEBSITE[Dynamic School Website]

USER --> ERP[ERP Dashboards]


WEBSITE --> API[Express REST API]

ERP --> API


API --> MONGO[(MongoDB)]
API --> POSTGRES[(PostgreSQL Supabase)]

API --> CLOUDINARY[Cloudinary Storage]


ERP --> STUDENT[Student Portal]

ERP --> TEACHER[Teacher Portal]

ERP --> ADMIN[Admin Portal]

ERP --> PRINCIPAL[Principal Portal]
```

---

# 🔄 System Workflow

```mermaid
flowchart LR

A[User Login]

A --> B{Role Authentication}


B -->|Student| C[Student Dashboard]

B -->|Teacher| D[Teacher Dashboard]

B -->|Admin| E[Admin Dashboard]

B -->|Principal| F[Principal Dashboard]


C --> G[Attendance Results Notices]

D --> H[Attendance Marks Syllabus]

E --> I[Admissions Website Management]

F --> J[School Analytics]
```

---

# 🧩 Application Structure

```
EduCore ERP

│
├── 🌐 Public School Website
│
│   ├── Home Page
│   ├── About School
│   ├── Notices
│   ├── Gallery
│   ├── Achievements
│   └── Contact
│
│
└── 🏫 ERP Management System
    │
    ├── 👨‍🎓 Student Portal
    │
    ├── 👩‍🏫 Teacher Portal
    │
    ├── 👨‍💼 Admin Portal
    │
    └── 🎓 Principal Portal

```

---

# 🌐 Website Module

The public website represents the school's online presence.

All website content is dynamically managed through the admin dashboard.

## Website Features

| Module | Description |
|---|---|
| 🏠 Home Page | School introduction and highlights |
| 📰 Notice Management | Publish announcements |
| 🖼 Gallery Management | Upload school images |
| 🏆 Achievement Section | Showcase school achievements |
| 🏫 School Information | Manage public details |
| 📞 Contact Section | Display communication information |

---

# 👨‍💼 Website Content Management

Administrators can manage website content without modifying source code.

| Admin Action | Status |
|---|---|
| Upload Gallery Images | ✅ |
| Create Notices | ✅ |
| Add Achievements | ✅ |
| Edit Content | ✅ |
| Delete Content | ✅ |

---

# 🏫 ERP Overview

The ERP system provides separate role-based dashboards where each user can access only the information and actions assigned to their responsibilities.

| Role | Main Responsibilities |
|---|---|
| 👨‍🎓 Student | View academic information and personal records |
| 👩‍🏫 Teacher | Manage assigned classes and academic activities |
| 👨‍💼 Admin | Manage complete school operations |
| 🎓 Principal | Monitor school performance |

---

# 📊 Core ERP Capabilities

| Module | Features |
|---|---|
| 👥 User Management | Role-based access system |
| 📚 Academic Management | Marks, syllabus, timetable |
| 📅 Attendance | Daily and historical attendance |
| 📝 Examination | Test, mid-term and final results |
| 🔔 Communication | Teacher and admin notices |
| 📈 Performance | Student analytics and reports |
| 🏫 Administration | Admissions and assignments |

---

# ⭐ Key Advantages

| Feature | Benefit |
|---|---|
| 🔐 Role-Based Access | Secure user-specific permissions |
| 🗄 Dual Database Design | Separate website and ERP data handling |
| ☁ Cloud Storage | Reliable image management |
| 📊 Performance Tracking | Better academic monitoring |
| 📱 Responsive Interface | Accessible across devices |
| 🧩 Modular Architecture | Easy future expansion |

---
# 🏫 ERP Modules

EduCore ERP contains four role-based portals designed according to the responsibilities of each user.

Each role has controlled access to ensure security and proper data management.

| Role | Access Level | Main Purpose |
|---|---|---|
| 👨‍🎓 Student | Personal Data | View academic information |
| 👩‍🏫 Teacher | Assigned Classes | Manage academic activities |
| 👨‍💼 Admin | Complete System | Manage school operations |
| 🎓 Principal | Monitoring Access | Analyze school performance |

---

# 👨‍🎓 Student Portal

The student portal provides students access to their academic information and daily school activities.

Students can view their personal information, attendance, results, notices, syllabus progress, and timetable.

## Student Features

| Module | Description |
|---|---|
| 👤 Student Profile | View personal details, parents information, blood group, gender, hostel, bus details |
| 📅 Attendance | View monthly attendance and complete attendance history |
| 📝 Results | View test, mid-term, final exam marks and overall performance |
| 🔔 Notices | Receive notices from assigned teachers |
| 📚 Syllabus Progress | Track subject-wise syllabus completion status |
| 🗓 Timetable | View assigned class timetable |

---

## Student Workflow

```mermaid
flowchart LR

A[Student Login]

A --> B[Student Dashboard]

B --> C[Profile]

B --> D[Attendance]

B --> E[Results]

B --> F[Notices]

B --> G[Syllabus]

B --> H[Timetable]
```

---

# 👩‍🏫 Teacher Portal

The teacher portal allows teachers to manage only those classes and subjects assigned by the administrator.

Teachers cannot access unauthorized classes or student data.

## Teacher Features

| Module | Description |
|---|---|
| 👤 Teacher Profile | View personal profile information |
| 👨‍🎓 Student Management | View students of assigned classes |
| 📅 Attendance | Take attendance of assigned students |
| 📝 Marks Management | Upload test, mid-term and final exam marks |
| 🔔 Notice Management | Send notices to assigned classes |
| 📚 Syllabus Tracking | Update syllabus progress |
| 🗓 Timetable | View assigned weekly timetable |

---

## Teacher Permission System

| Action | Permission |
|---|---|
| View Assigned Students | ✅ |
| View Student Performance | ✅ |
| Take Attendance | ✅ |
| Upload Marks | ✅ |
| Update Syllabus Progress | ✅ |
| Send Class Notices | ✅ |
| Access Other Classes | ❌ |

---

## Teacher Academic Workflow

```mermaid
flowchart LR

A[Teacher Login]

A --> B[Teacher Dashboard]

B --> C[Assigned Classes]

C --> D[Attendance]

C --> E[Marks Upload]

C --> F[Syllabus Update]

C --> G[Class Notices]

```

---

# 👨‍💼 Admin Portal

The admin portal is the central control system of EduCore ERP.

Administrators manage students, teachers, classes, subjects, timetable, and website content.

---

## Admin Features

| Module | Description |
|---|---|
| 👨‍🎓 Student Admission | Add, edit, view and delete student records |
| 👩‍🏫 Teacher Management | Manage teacher information |
| 🏫 Class Assignment | Assign classes to teachers |
| 📚 Subject Management | Assign subjects to classes |
| 🗓 Timetable Management | Create and upload class timetables |
| 📰 Notice Management | Publish school notices |
| 🖼 Gallery Management | Upload website gallery images |
| 🏆 Achievement Management | Add school achievements |

---

## Admin Control Panel

| Action | Available |
|---|---|
| Manage Students | ✅ |
| Assign Teachers | ✅ |
| Assign Subjects | ✅ |
| Upload Timetable | ✅ |
| Manage Website Content | ✅ |
| Manage Notices | ✅ |
| Manage Gallery | ✅ |
| Manage Achievements | ✅ |

---

## Admin Workflow

```mermaid
flowchart LR

A[Admin Login]

A --> B[Admin Dashboard]

B --> C[Student Admission]

B --> D[Teacher Assignment]

B --> E[Subject Assignment]

B --> F[Timetable]

B --> G[Website Content]

```

---

# 🎓 Principal Portal

The principal portal provides a complete overview of school performance.

The principal can monitor academic activities without modifying operational data.

---

## Principal Features

| Module | Description |
|---|---|
| 👥 Student Overview | View student information |
| 📊 Performance Monitoring | Analyze student academic performance |
| 📅 Attendance Reports | Monitor attendance records |
| 📝 Result Analysis | View marks and examination performance |
| 📚 Academic Tracking | Monitor syllabus progress |

---

## Principal Access

| Feature | Permission |
|---|---|
| View Student Profiles | ✅ |
| View Attendance Reports | ✅ |
| View Marks Performance | ✅ |
| Monitor Teachers | ✅ |
| Modify Academic Data | ❌ |

---

## Principal Workflow

```mermaid
flowchart LR

A[Principal Login]

A --> B[Principal Dashboard]

B --> C[Student Overview]

B --> D[Attendance Reports]

B --> E[Performance Analytics]

B --> F[Academic Monitoring]

```

---

# 🔐 Role Permission Matrix

| Feature | Student | Teacher | Admin | Principal |
|---|---|---|---|---|
| View Own Profile | ✅ | ✅ | ✅ | ✅ |
| View Students | ❌ | Assigned Only | ✅ | ✅ |
| Attendance | View Own | Manage Assigned | Manage All | View All |
| Marks | View Own | Upload Assigned | Manage All | View All |
| Notices | Receive | Send Class Notice | Send School Notice | View |
| Timetable | View | Assigned Classes | Manage | View |
| Website Content | ❌ | ❌ | Manage | View |

---

# 🔄 Complete ERP Data Flow

```mermaid
flowchart TD

ADMIN[Admin]

ADMIN --> ASSIGN[Assign Teachers & Classes]

ASSIGN --> TEACHER[Teacher]


TEACHER --> ATTENDANCE[Attendance]

TEACHER --> MARKS[Marks]

TEACHER --> SYLLABUS[Syllabus Progress]



ATTENDANCE --> STUDENT[Student]

MARKS --> STUDENT

SYLLABUS --> STUDENT



STUDENT --> PRINCIPAL[Principal Monitoring]

```

---

# ✅ ERP Module Summary

| Module | Status |
|---|---|
| Student Management | ✅ Completed |
| Teacher Management | ✅ Completed |
| Attendance System | ✅ Completed |
| Examination System | ✅ Completed |
| Notice System | ✅ Completed |
| Syllabus Tracking | ✅ Completed |
| Timetable Management | ✅ Completed |
| Website CMS | ✅ Completed |

---
# 📸 Screenshots

The following screenshots demonstrate the major modules and dashboards available in EduCore ERP.

---

# 🌐 Website

## 🏫 School Website Homepage

<img src="./src/assets/website.png" alt="School Website Homepage" width="100%"/>


---

# 👩‍🏫 Teacher Portal

## 📊 Teacher Dashboard

Teacher dashboard provides quick access to assigned classes, students, attendance, marks, notices, syllabus and timetable.

<img src="./src/assets/teacher-dash.png" alt="Teacher Dashboard" width="100%"/>


## 👨‍🎓 Assigned Student List

Teachers can view only students belonging to classes assigned by the administrator.

<img src="./src/assets/teacher-studentInfo.png" alt="Teacher Student List" width="100%"/>


## 👤 Student Profile View

Teachers can view student information, attendance and academic performance of assigned students.

<img src="./src/assets/teacher-studentInfo-2.png" alt="Teacher Student Profile" width="100%"/>


## 📅 Attendance Management

Teachers can record attendance for their assigned classes.

<img src="./src/assets/teacher-attendance.png" alt="Teacher Attendance" width="100%"/>


## 📝 Marks Upload

Teachers can upload test, mid-term and final examination marks.

<img src="./src/assets/teacher-mark-upload.png" alt="Teacher Marks Upload" width="100%"/>


## 📚 Syllabus Progress Tracking

Teachers can update syllabus status:

- In Progress
- Pending
- Completed

<img src="./src/assets/teacher-syllabus.png" alt="Teacher Syllabus" width="100%"/>


## 🔔 Class Notice Management

Teachers can send notices to assigned classes.

<img src="./src/assets/techer-notice.png" alt="Teacher Notice" width="100%"/>


## 🗓 Teacher Timetable

Teachers can view their assigned weekly timetable.

<img src="./src/assets/teacher-timetable.png" alt="Teacher Timetable" width="100%"/>


---

# 👨‍🎓 Student Portal

## 📊 Student Dashboard

<img src="./src/assets/student-dash.png" alt="Student Dashboard" width="100%"/>


## 📅 Attendance History

Students can view monthly attendance and complete attendance records.

<img src="./src/assets/student-attendance.png" alt="Student Attendance" width="100%"/>


## 🔔 Student Notices

Students receive notices sent by teachers.

<img src="./src/assets/student-notice.png" alt="Student Notices" width="100%"/>


## 📚 Student Syllabus Progress

Students can track subject-wise syllabus completion.

<img src="./src/assets/student-syllabus.png" alt="Student Syllabus" width="100%"/>


## 🗓 Student Timetable

<img src="./src/assets/student-timetable.png" alt="Student Timetable" width="100%"/>


## 📝 Student Results

Students can view examination marks and overall performance.

<img src="./src/assets/studetnt-result.png" alt="Student Results" width="100%"/>


---

# 🎓 Principal Portal

## 👥 Student Overview

Principal can monitor student information.

<img src="./src/assets/principal-studentInfo.png" alt="Principal Student List" width="100%"/>


## 📊 Student Performance Details

Principal can analyze student academic information.

<img src="./src/assets/principal-studentInfo-2.png" alt="Principal Student Details" width="100%"/>


---

# 👨‍💼 Admin Portal

## 📊 Admin Dashboard

<img src="./src/assets/admin-dash.png" alt="Admin Dashboard" width="100%"/>


## 📰 Notice Management

Admin can publish notices visible on the school website.

<img src="./src/assets/admin-notice.png" alt="Admin Notice" width="100%"/>


## 🖼 Gallery Management

Admin can upload and manage school gallery images.

<img src="./src/assets/admin-gallery.png" alt="Admin Gallery" width="100%"/>


## 🏆 Achievement Management

Admin can showcase school achievements.

<img src="./src/assets/admin-achievement.png" alt="Admin Achievement" width="100%"/>


## 👨‍🎓 Student Admission Management

Admin can add, update, view and delete student records.

<img src="./src/assets/admin-admission.png" alt="Admin Admission" width="100%"/>


## 🗓 Timetable Management

<img src="./src/assets/admin-timetable.png" alt="Admin Timetable" width="100%"/>


## 👩‍🏫 Teacher-Class Assignment

Admin assigns teachers to specific classes.

<img src="./src/assets/admim-assign-teacher.png" alt="Teacher Assignment" width="100%"/>


## 📚 Subject-Class Assignment

Admin assigns subjects according to classes.

<img src="./src/assets/admin-class-subject.png" alt="Subject Assignment" width="100%"/>


---

# ⚙ Installation

Follow these steps to run EduCore ERP locally.


## 1️⃣ Clone Repository

```bash
git clone https://github.com/Ankit-nehra/erp-frontend.git

cd erp-frontend
```


## 2️⃣ Install Dependencies

```bash
npm install
```


## 3️⃣ Setup Environment Variables

Create a `.env` file:

```env
# Frontend

VITE_API_URL=your_backend_api_url
```


Backend environment example:

```env
PORT=5000

DATABASE_URL=your_postgresql_connection

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```


## 4️⃣ Run Application

Frontend:

```bash
npm run dev
```


Backend:

```bash
npm start
```

---

# 📂 Folder Structure

Example project structure:

```
EduCore ERP

├── frontend
│
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── assets
│
│
├── backend
│
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── utils
│
└── README.md
```

---

# 📡 API Documentation

API documentation will be available here:

```
<API_DOCUMENTATION_URL>
```

The backend follows REST API architecture.

Main API categories:

| Module | APIs |
|---|---|
| Authentication | Login, Register, Authorization |
| Students | Student management |
| Teachers | Teacher operations |
| Attendance | Attendance management |
| Results | Marks management |
| Notices | Communication |
| Website | Gallery, achievements, notices |

---

# 🚀 Deployment

Recommended deployment stack:

| Service | Usage |
|---|---|
| Vercel | Frontend Hosting |
| Render / Railway | Backend Hosting |
| Supabase | PostgreSQL Database |
| MongoDB Atlas | MongoDB Database |
| Cloudinary | Image Storage |

---

# 🛣 Future Roadmap

Future improvements planned:

| Feature | Status |
|---|---|
| 📱 Mobile Application | Planned |
| 💳 Online Fee Management | Planned |
| 📧 Email Notifications | Planned |
| 📊 Advanced Analytics | Planned |
| 📄 Automated Report Cards | Planned |
| 🔔 Push Notifications | Planned |

---

# 🤝 Contribution

Contributions are welcome.

Steps:

1. Fork this repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

You are free to use, modify and distribute this project with proper attribution.

---

# 👨‍💻 Developer

## Ankit Nehra

Full Stack Developer

GitHub:

```
https://github.com/Ankit-nehra
```

LinkedIn:

```
<YOUR_LINKEDIN_PROFILE>
```

Portfolio:

```
<YOUR_PORTFOLIO_URL>
```

---

<div align="center">

## ⭐ Thank You For Visiting EduCore ERP

A complete digital solution for modern educational institutions.

</div>
