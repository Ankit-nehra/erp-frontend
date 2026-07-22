🎓 EduCore ERP
Complete School Website & ERP Management System

A modern full-stack School Website + ERP Management System built using the MERN Stack with PostgreSQL (Supabase) for ERP data management.

This project provides a complete digital solution for schools by combining a dynamic public website with a powerful ERP portal for Students, Teachers, Admins, and Principals.

📌 Features
🌐 Dynamic School Website

The public website allows visitors to explore school information while administrators can manage content in real time.

Admin can:

Publish school notices
Upload gallery images
Post achievements
Manage website content dynamically
🏫 ERP Modules

The ERP consists of four dedicated portals:

👨‍🎓 Student Portal
👩‍🏫 Teacher Portal
👨‍💼 Admin Portal
👨‍🎓 Principal Portal
👩‍🏫 Teacher Portal

Teachers can:

View their profile
View weekly timetable
Take attendance only for assigned classes
Upload Test marks
Upload Mid-Term marks
Upload Final Exam marks
Send notices to assigned classes
View complete student profiles
Track student attendance
Monitor student academic performance
Update syllabus progress as:
✅ Completed
🟡 In Progress
🔴 Pending

The syllabus progress is visible to both students and the principal.

👨‍🎓 Student Portal

Students can:

View complete profile
View parent information
View personal details
Gender
Blood Group
Hostel
Bus Information
View attendance history
View monthly attendance
View overall attendance
View timetable
View teacher notices
View uploaded marks
Track academic performance
Track syllabus progress
👨‍💼 Admin Portal

The Admin has complete control over the ERP and website.

Website Management
Publish Notices
Upload Gallery Images
Publish School Achievements
Teacher Management
Assign teachers to classes
Assign subjects
Manage teacher allocations
Student Management
Student Admission
Edit Student
View Student
Delete Student
Academic Management
Upload class timetable
Manage school academic information
👨‍🎓 Principal Portal

The Principal can monitor the complete academic performance of the school.

Principal can:

View all student profiles
Monitor attendance
View academic performance
View marks
Monitor syllabus completion
Track overall school progress
🛠 Tech Stack
Frontend
React.js
Backend
Express.js
Node.js
Databases
MongoDB (Website Data)
PostgreSQL (Supabase + pg) (ERP Data)
File Storage
Cloudinary
File Upload
Multer
⚡ Key Highlights
Dynamic School Website
Role-Based Authentication
Four Dedicated Dashboards
Attendance Management
Marks Management
Timetable Management
Notice Management
Gallery Management
Achievement Management
Student Performance Tracking
Syllabus Progress Tracking
Cloud Image Storage
Responsive User Interface
📂 Project Architecture
Website
│
├── Home
├── About
├── Gallery
├── Notices
├── Achievements
└── Contact

ERP
│
├── Student
├── Teacher
├── Admin
└── Principal
🚀 Installation
git clone https://github.com/your-username/your-repository.git
cd your-repository

Install dependencies

npm install

Run the frontend

npm run dev

Run the backend

npm start
🔐 Environment Variables

Create a .env file and configure the following variables:

MONGODB_URI=

SUPABASE_URL=

SUPABASE_ANON_KEY=

DATABASE_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

JWT_SECRET=

PORT=
📸 Screenshots

Add screenshots of:

Landing Page
Student Dashboard
Teacher Dashboard
Admin Dashboard
Principal Dashboard
Attendance Module
Marks Module
Timetable
Gallery
Notices
🌐 Live Demo

Add your deployed application link here.

Website: https://your-demo-link.com

Future Improvements
Online Fee Management
Parent Portal
Online Assignments
Homework Submission
Report Card PDF
Email Notifications
SMS Notifications
Real-time Chat
Mobile Application
🤝 Contributions

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a Pull Request.

⭐ Support

If you found this project useful, consider giving it a ⭐ Star on GitHub.

It helps the project reach more developers.

👨‍💻 Developer

Made with ❤️ using React.js, Express.js, MongoDB, PostgreSQL (Supabase), Cloudinary, Multer, and Node.js.
