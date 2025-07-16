A simple blogging platform API built using Node.js, Express, MongoDB, and JWT authentication. The API provides user registration/login, protected routes, CRUD operations for blog posts, and comment management.

# Features
User Authentication

Register & Login using JWT

Password encryption using bcrypt

Protected Routes

Only authenticated users can create, update, or delete posts

Blog Management

Create, view, edit, delete posts

Auto-increment numeric post IDs using mongoose-sequence

Comment System

Add and fetch comments for specific posts

MongoDB Integration

Mongoose for schema modeling

Error Handling

Proper validation and error responses

Environment Config

.env for sensitive configs like Mongo URI and JWT secret

# Tech Stack
Backend: Node.js, Express.js

Database: MongoDB (with Mongoose)

Authentication: JWT (JSON Web Token)

Password Security: bcrypt.js

Auto Increment IDs: mongoose-sequence

# Project Structure
blog-backend/
│
├── /models
│   ├── User.js        # User schema
│   ├── Post.js        # Post schema
│   └── Comment.js     # Comment schema
│
├── /routes
│   ├── auth.js        # Authentication routes
│   ├── posts.js       # Blog post routes
│   └── comments.js    # Comment routes
│
├── /middleware
│   └── authMiddleware.js  # JWT verification
│
├── .env               # Environment variables
├── server.js          # App entry point
└── README.md          # Documentation