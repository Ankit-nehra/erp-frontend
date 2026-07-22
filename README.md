# 🎓 EduCore ERP

<div align="center">

<!-- Replace this with your project banner -->

<img src="../src/assets/banner.png" alt="EduCore ERP Banner" width="100%" />

<br>

# 🏫 Complete School Website + ERP Management System

### A Modern Full-Stack School Management Platform built with MERN + PostgreSQL (Supabase)

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

![NodeJS](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js)

![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)

![MongoDB](https://img.shields.io/badge/MongoDB-Website-47A248?style=for-the-badge&logo=mongodb)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-ERP-336791?style=for-the-badge&logo=postgresql)

![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)

![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)

</p>

<p align="center">

<a href="<LIVE_DEMO_URL>">
<img src="https://img.shields.io/badge/🚀_Live_Demo-4285F4?style=for-the-badge">
</a>

<a href="<GITHUB_REPOSITORY>">
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

> Replace the placeholders below with actual screenshots.

```
📷 Landing Page

📷 Student Dashboard

📷 Teacher Dashboard

📷 Admin Dashboard

📷 Principal Dashboard

📷 Attendance Module

📷 Marks Module

📷 Timetable Module

📷 Gallery

📷 Notices
```

---

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
