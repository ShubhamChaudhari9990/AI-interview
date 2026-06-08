# 🚀 AI Interview Platform

An AI-powered mock interview platform built with **Angular 21**, **Tailwind CSS**, **Node.js**, and **Firebase**. The platform helps candidates prepare for technical interviews through personalized interview sessions, AI-generated feedback, and performance analytics.

---

## 📖 Overview

AI Interview Platform simulates real-world technical interviews by generating technology-specific questions, collecting candidate responses, evaluating answers using AI, and providing detailed feedback and performance reports.

Candidates can select their preferred technology, experience level, and interview difficulty to receive a customized interview experience. The system analyzes responses and generates insights to help users improve their interview skills and confidence.

---

## ✨ Features

### 🔐 Authentication

* Email & Password Login
* Google Sign-In
* Forgot Password
* Secure Route Guards
* User Profile Management

### 📊 Dashboard

* Interview Statistics
* Average Score Tracking
* Recent Interviews
* Performance Overview
* Progress Analytics

### 🤖 AI-Powered Interviews

* Technology-Based Question Generation
* Multiple Difficulty Levels
* Real-Time Interview Sessions
* AI Answer Evaluation
* Instant Feedback & Scoring

### 📑 Interview Reports

* Overall Interview Score
* Question-Wise Evaluation
* Strengths & Weaknesses Analysis
* Improvement Recommendations
* Historical Performance Tracking

### 📄 Resume Analysis

* Resume Upload Support
* Skill Extraction
* Resume-Based Interview Questions

### 👨‍💼 Admin Panel

* User Management
* Question Management
* Technology Management
* Platform Analytics

### 📱 Responsive Design

* Mobile-Friendly Interface
* Modern UI with Tailwind CSS
* Cross-Device Compatibility

---

## 🛠️ Technology Stack

### Frontend

* Angular 21
* TypeScript
* Tailwind CSS
* Angular Router
* RxJS
* Chart.js

### Backend

* Node.js
* Express.js
* TypeScript

### Database & Cloud Services

* Firebase Authentication
* Cloud Firestore
* Firebase Storage

### AI Integration

* OpenAI API

### Deployment

* Firebase Hosting
* Node.js Server

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── core/
│   ├── shared/
│   ├── layouts/
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── interview/
│   │   ├── reports/
│   │   ├── profile/
│   │   ├── resume/
│   │   └── admin/
│   │
│   └── app.routes.ts
│
├── environments/
├── styles/
└── main.ts
```

---

## 🔄 Interview Flow

```text
User Login
     ↓
Select Technology
     ↓
Configure Interview
     ↓
Start Interview
     ↓
Answer Questions
     ↓
AI Evaluation
     ↓
Generate Report
     ↓
View Analytics
```

---

## 💻 Supported Technologies

* Angular
* React
* Node.js
* JavaScript
* TypeScript
* Firebase
* HTML/CSS
* SQL
* Ionic Framework

---

## 📦 Core Modules

### Authentication Module

Handles:

* User Registration
* Login & Logout
* Google Authentication
* Password Reset
* Session Management

### Dashboard Module

Provides:

* User Statistics
* Interview History
* Performance Insights
* Score Analytics

### Interview Module

Manages:

* Interview Configuration
* Question Flow
* Answer Submission
* Interview Completion

### Reports Module

Generates:

* AI Feedback
* Score Summaries
* Performance Reports
* Recommendations

### Resume Module

Supports:

* Resume Upload
* Skill Analysis
* Personalized Question Generation

### Admin Module

Allows:

* User Management
* Question Management
* Technology Management
* Platform Monitoring

---

## 🗄️ Database Collections

### Users

```json
{
  "uid": "",
  "name": "",
  "email": "",
  "role": "candidate"
}
```

### Technologies

```json
{
  "name": "Angular",
  "active": true
}
```

### Questions

```json
{
  "technology": "Angular",
  "difficulty": "Medium",
  "question": "What are Angular Standalone Components?"
}
```

### Interviews

```json
{
  "userId": "",
  "technology": "Angular",
  "score": 85,
  "status": "Completed"
}
```

### Answers

```json
{
  "interviewId": "",
  "question": "",
  "answer": "",
  "score": 8,
  "feedback": ""
}
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/ai-interview-platform.git
```

### Install Dependencies

#### Frontend

```bash
npm install
```

#### Backend

```bash
cd backend
npm install
```

### Configure Firebase

Create environment files and add your Firebase configuration.

```ts
export const environment = {
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

### Run Frontend

```bash
ng serve
```

### Run Backend

```bash
npm run dev
```

---

## 🔮 Future Enhancements

* Voice-Based Interviews
* Video Interview Support
* Coding Assessment Module
* AI Follow-Up Questions
* Interview Recording
* Multi-Language Support
* Certification Generation
* Team & Organization Accounts

---

## 🎯 Benefits

* Realistic Interview Practice
* Instant AI Feedback
* Personalized Learning Experience
* Performance Tracking
* Resume-Based Preparation
* Scalable Cloud Architecture

---

## 📄 License

This project is licensed under the MIT License.
