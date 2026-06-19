# Customer Feedback System

A full-stack Customer Feedback Management System built using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.

## Features

- User Registration
- User Login with JWT Authentication
- Submit Feedback
- Update Feedback
- Admin Dashboard
- View All Feedback
- Delete Feedback
- MongoDB Database Integration
- REST API Architecture

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- Bcrypt Password Hashing

## Project Structure

```
customer-feedback-system/
│
├── models/
│   ├── User.js
│   └── Feedback.js
│
├── routes/
│   ├── auth.js
│   └── feedback.js
│
├── app.js
├── server.js
├── db.js
│
├── register.html
├── login.html
├── feedback.html
├── admin.html
├── style.css
│
├── .env
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/customer-feedback-system.git
```

### Navigate to Project

```bash
cd customer-feedback-system
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Feedback

#### Add Feedback

```http
POST /api/feedback
```

#### Get User Feedback

```http
GET /api/feedback/:userId
```

#### Update Feedback

```http
PUT /api/feedback/:userId
```

#### Get All Feedback

```http
GET /api/feedback/all
```

#### Delete Feedback

```http
DELETE /api/feedback/:id
```

## Screenshots

- Registration Page
- Login Page
- Feedback Page
- Admin Dashboard

## Future Enhancements

- Role-Based Access Control
- Feedback Ratings
- Search & Filter Feedback
- Admin Authentication
- Dashboard Analytics

## Author

**Shaikh Bashir**

GitHub: https://github.com/fahad-sh145-b/

## License

This project is open-source and available under the MIT License.
