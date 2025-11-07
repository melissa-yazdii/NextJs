# Next.js Authentication Project

A secure authentication system built with **Next.js** and **Lucia** authentication library.  
This project demonstrates how to implement **user registration, login, logout, and session management** with password hashing and secure cookies.

## 🚀 Features

- 🔒 **User Authentication** using Lucia
- 🧠 **Password hashing** with crypto for security
- 🧾 **Session management** using secure cookies
- 🔁 **Login / Logout / Signup** flows implemented
- 🗃️ Modular folder structure for scalability
- ⚙️ Environment-based configuration for credentials

## 🛠 Tech Stack

- **Frontend:** Next.js (React 18+)
- **Backend:** Next.js API Routes
- **Auth Library:** Lucia
- **Hashing:** crypto
- **Database:** SQLite

## 📁 Project Structure

## 🧩 Authentication Flow

1. **User Registration:**

   - User submits username & password.
   - Password is hashed using crypto before saving to DB.
   - Lucia creates a session and issues a cookie.

2. **User Login:**

   - Credentials are validated.
   - If correct, Lucia generates a session and sends a secure cookie.

3. **Session Validation:**

   - Middleware checks the Lucia session for each protected route.
   - Invalid or expired sessions redirect to login.

4. **Logout:**
   - Session is invalidated from Lucia and cookie is cleared.

## ⚙️ Setup

```bash
git clone https://github.com/your-username/NextJs.git
cd NextJs
npm install
```
