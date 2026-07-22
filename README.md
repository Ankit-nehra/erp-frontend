# 🎓 EduCore ERP

<div align="center">

<!-- Replace this with your project banner -->

<img src="./src/assets/banner.png" alt="EduCore ERP Banner" width="100%" />

<br>

# 🏫 Complete School Website + ERP Management System

### A Modern Full-Stack School Management Platform built with MERN + PostgreSQL (Supabase)

<p align="center">
</p>

<p align="center">

<a href="https://erp-frontend-eight-iota.vercel.app/">
<img src="https://img.shields.io/badge/🚀_Live_Demo-4285F4?style=for-the-badge">
</a>

<a href="https://github.com/Ankit-nehra/erp-frontend">
<img src="https://img.shields.io/badge/📂_Repository-181717?style=for-the-badge&logo=github">
</a>

<a href="<API_DOCS_URL>">
<img src="https://img.shields.io/badge/API_Documentation-orange?style=for-the-badge">
</a>

</p>

---

### ⭐ If you like this project, don't forget to give it a Star!

</div>

---

# 📖 Overview

**EduCore ERP** is a modern **School Website + Enterprise Resource Planning (ERP)** platform designed to digitize every major operation inside an educational institution.

Unlike traditional school management software, EduCore ERP combines a **dynamic public-facing website** with a **secure role-based ERP system**, allowing administrators, teachers, students, and principals to collaborate through one integrated platform.

The project is designed with scalability, modularity, and security in mind, making it suitable for schools seeking a complete digital ecosystem.

---

# 🎯 Vision

Our goal is to eliminate paperwork and centralize school management by providing:

- Academic Management
- Attendance Tracking
- Examination Management
- Student Information System
- Teacher Management
- Dynamic School Website
- Timetable Management
- Performance Analytics
- Notice Broadcasting
- Syllabus Tracking

---

# ✨ Key Features

## 🌐 Dynamic School Website

- Responsive Design
- Dynamic Notices
- School Gallery
- Achievements
- Announcements
- About School
- Contact Information
- Admin Controlled Content

---

## 🏫 Complete ERP

Four Independent Dashboards

✅ Student

✅ Teacher

✅ Admin

✅ Principal

---

## 🔐 Secure Authentication

- Role Based Login
- JWT Authentication
- Protected Routes
- Secure APIs
- Authorization Middleware

---

## 📊 Academic Management

- Attendance
- Marks
- Timetable
- Notices
- Performance
- Student Profiles
- Teacher Profiles
- Syllabus Progress

---

# 📚 Table of Contents

- Overview
- Vision
- Features
- Tech Stack
- Architecture
- Website Module
- ERP Modules
- Student Portal
- Teacher Portal
- Admin Portal
- Principal Portal
- Installation
- Environment Variables
- Folder Structure
- Screenshots
- API Documentation
- Deployment
- Roadmap
- Contribution
- License

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|----------|
| React.js | User Interface |
| React Router | Routing |
| Axios | API Communication |
| CSS / Tailwind *(Replace with yours)* | Styling |

---

## Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | REST API |
| JWT | Authentication |
| Multer | File Upload |
| Cloudinary | Image Storage |

---

## Databases

| Database | Usage |
|-----------|--------|
| MongoDB | Dynamic Website Data |
| PostgreSQL (Supabase) | ERP Data |

---

## Other Tools

- Git
- GitHub
- Postman
- VS Code

---

# 🏗 System Architecture

```text
                    Internet
                        │
                        ▼
          ┌─────────────────────────┐
          │   Dynamic School Site   │
          └─────────────────────────┘
                        │
                        ▼
                Express REST API
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
    MongoDB                     PostgreSQL
 (Website Data)               (ERP Records)
         │                             │
         └──────────────┬──────────────┘
                        ▼
                 Cloudinary Storage
```

---

# 🧩 Project Architecture

```text
                   EduCore ERP

               ┌───────────────┐
               │   Website      │
               └───────────────┘
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼

 Gallery         Achievements      Notices

                      │

               ┌───────────────┐
               │      ERP      │
               └───────────────┘

     ┌──────────┬──────────┬──────────┬──────────┐
     ▼          ▼          ▼          ▼

 Student    Teacher     Admin    Principal
```

---

# 🌐 Website Module

The public website is completely dynamic.

All website content is controlled directly by the administrator.

## Features

- Home Page
- About School
- Principal Message
- Gallery
- Achievements
- Latest Notices
- Contact Section
- Responsive Layout

---

## Admin Controls Website

| Feature | Supported |
|----------|-----------|
| Upload Gallery Images | ✅ |
| Publish Notices | ✅ |
| Add Achievements | ✅ |
| Edit Content | ✅ |
| Delete Content | ✅ |

---

# 🏫 ERP Overview

The ERP consists of four independent portals.

| Portal | Purpose |
|----------|----------|
| 👨‍🎓 Student | Student Services |
| 👩‍🏫 Teacher | Academic Management |
| 👨‍💼 Admin | School Administration |
| 🎓 Principal | School Monitoring |

Every user has access only to the resources permitted by their assigned role.

---

# ⭐ Why EduCore ERP?

Unlike many traditional school management systems, EduCore ERP combines a **dynamic website**, **role-based ERP**, and **real-time academic management** into a unified platform.

### Major Highlights

- Modern UI
- Secure Authentication
- Cloud Image Storage
- Two Database Architecture
- Modular Backend
- Scalable Design
- Responsive Layout
- RESTful APIs
- Academic Analytics
- Performance Tracking
- Attendance Monitoring
- Timetable Management
- Syllabus Tracking
- Role-Based Authorization
- Easy Deployment

---

# 📸 Screenshots
Website home page
<img src="./src/assets/website.png" alt="EduCore ERP Banner" width="100%" />
Teacher-Dashboard
<img src="./src/assets/teacher-dash.png" alt="EduCore ERP Banner" width="100%" />
Teacher see student list 
<img src="./src/assets/teacher-studentInfo.png" alt="EduCore ERP Banner" width="100%" />
Teacher see student profile 
<img src="./src/assets/teacher-studentInfo-2.png" alt="EduCore ERP Banner" width="100%" />
teacher take attendace 
<img src="./src/assets/teacher-attendance.png" alt="EduCore ERP Banner" width="100%" />
teacher uplaod marks 
<img src="./src/assets/teacher-mark-upload.png" alt="EduCore ERP Banner" width="100%" />
teacher syllabus
<img src="./src/assets/teacher-syllabus.png" alt="EduCore ERP Banner" width="100%" />
teacher upload notices 
<img src="./src/assets/techer-notice.png" alt="EduCore ERP Banner" width="100%" />
teacher see timetable
<img src="./src/assets/teacher-timetable.png" alt="EduCore ERP Banner" width="100%" />

student dashboard
<img src="./src/assets/student-dash.png" alt="EduCore ERP Banner" width="100%" />
student-attendance
<img src="./src/assets/student-attendance.png" alt="EduCore ERP Banner" width="100%" />
student-notices
<img src="./src/assets/student-notice.png" alt="EduCore ERP Banner" width="100%" />
student-syllabus
<img src="./src/assets/student-syllabus.png" alt="EduCore ERP Banner" width="100%" />
student-timetable
<img src="./src/assets/student-timetable.png" alt="EduCore ERP Banner" width="100%" />
student-result
<img src="./src/assets/studetnt-result.png" alt="EduCore ERP Banner" width="100%" />

principal see student list 
<img src="./src/assets/principal-studentInfo.png" alt="EduCore ERP Banner" width="100%" />
principal see student details 
<img src="./src/assets/principal-studentInfo-2.png" alt="EduCore ERP Banner" width="100%" />

admin dashbaord
<img src="./src/assets/admin-dash.png" alt="EduCore ERP Banner" width="100%" />
admin notice
<img src="./src/assets/admin-notice.png" alt="EduCore ERP Banner" width="100%" />
admin gallery
<img src="./src/assets/admin-gallery.png" alt="EduCore ERP Banner" width="100%" />
admin achivements
<img src="./src/assets/admin-achievement.png" alt="EduCore ERP Banner" width="100%" />
admin admission
<img src="./src/assets/admin-admission.png" alt="EduCore ERP Banner" width="100%" />
admin timetable
<img src="./src/assets/admin-timetable.png" alt="EduCore ERP Banner" width="100%" />
admin assign teacher to their class
<img src="./src/assets/admim-assign-teacher.png" alt="EduCore ERP Banner" width="100%" />
admin assign subject to classes
<img src="./src/assets/admin-class-subject.png" alt="EduCore ERP Banner" width="100%" />



## ⏭️ Next Part

In **Part 2**, we'll document each ERP module in detail:

- 👨‍🎓 Student Portal
- 👩‍🏫 Teacher Portal
- 👨‍💼 Admin Portal
- 🎓 Principal Portal
- Detailed feature tables
- Permissions matrix
- Workflow diagrams
- Dashboard previews
