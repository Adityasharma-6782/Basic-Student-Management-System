# 🎓 FastAPI Student Management API

A simple REST API built with **FastAPI** that performs CRUD (Create, Read, Update, Delete) operations on student records. The data is stored in a local **JSON file**, making it an excellent beginner project for learning FastAPI.

---

## 🚀 Features

- ✅ Create a new student
- ✅ Get all students
- ✅ Get a student by Roll Number
- ✅ Update student details
- ✅ Delete a student
- ✅ Email validation using Pydantic
- ✅ JSON-based database (No SQL database required)

---

## 🛠️ Tech Stack

- Python 3.10+
- FastAPI
- Pydantic
- Uvicorn
- JSON

---

## 📂 Project Structure

```
Student_management/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── students.json
├── main.py
├── requirements.txt
├── README.md
└── .gitignore
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Adityasharma-6782/Basic-Student-Management-System.git
```

```bash
cd Basic-Student-Management-System-api
```

---

### 2. Create Virtual Environment

Windows

```bash
python -m venv venv
venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

Or install manually

```bash
pip install fastapi uvicorn pydantic email-validator
```

---

## ▶️ Run the Server

```bash
uvicorn main:app --reload
```

Server will start at

```
http://127.0.0.1:8000
```

---

## 📖 API Documentation

FastAPI automatically generates interactive documentation.

Swagger UI

```
http://127.0.0.1:8000/docs
```

ReDoc

```
http://127.0.0.1:8000/redoc
```

---

# 📌 API Endpoints

## Home

### GET /

Returns the home message.

Response

```json
{
  "message": "this is home page"
}
```

---

## Create Student

### POST /create

Request Body

```json
{
  "name": "Aditya Sharma",
  "age": 21,
  "roll_no": "101",
  "email": "aditya@gmail.com",
  "modile_No": 9876543210
}
```

Response

```json
{
  "message": "Student data created successfully"
}
```

---

## Get All Students

### GET /students

Response

```json
{
  "101": {
    "name": "Aditya Sharma",
    "age": 21,
    "email": "aditya@gmail.com",
    "modile_No": 9876543210
  }
}
```

---

## Get Student by Roll Number

### GET /student/{roll_no}

Example

```
GET /student/101
```

Response

```json
{
  "name": "Aditya Sharma",
  "age": 21,
  "email": "aditya@gmail.com",
  "modile_No": 9876543210
}
```

---

## Update Student

### PUT /update/{roll_no}

Request Body

```json
{
  "age": 22,
  "email": "newemail@gmail.com"
}
```

Response

```json
{
  "message": "Item updated successfully",
  "data": {
    "name": "Aditya Sharma",
    "age": 22,
    "email": "newemail@gmail.com",
    "modile_No": 9876543210
  }
}
```

---

## Delete Student

### DELETE /delete/{roll_no}

Response

```json
{
  "message": "Student data deleted successfully"
}
```

---

# 📁 students.json Example

```json
{
  "101": {
    "name": "Aditya Sharma",
    "age": 21,
    "email": "aditya@gmail.com",
    "modile_No": 9876543210
  }
}
```

---

# 🖥️ Frontend Features

- Student Registration Form
- Student Table
- Search Student
- Edit Student
- Delete Student
- Responsive Layout
- Clean User Interface

---

---

# 🧪 Testing

You can test the API using

- FastAPI Swagger UI
- Postman
- Thunder Client (VS Code)
- cURL

---

# 📄 requirements.txt

```
fastapi
uvicorn
pydantic
email-validator
jinja2
```

---

# ⚠️ Known Issues

- Data is stored in a JSON file, so it is not suitable for production.
- No authentication or authorization.
- No database integration.
- Concurrent requests may overwrite data.

---

# 🚀 Future Improvements

- Add SQLite or PostgreSQL support
- JWT Authentication
- Password hashing
- Search students
- Pagination
- Sorting
- Docker support
- Unit testing with Pytest
- Logging
- Environment variables
- Deployment on Render or Railway

---

## 🎯 Learning Objectives

This project demonstrates:

- Building REST APIs with FastAPI
- Performing CRUD operations
- Using Pydantic models
- Request and response validation
- Working with JSON as a data store
- Connecting a JavaScript frontend to a FastAPI backend
- Serving static files and HTML templates
- Creating beginner-friendly full-stack applications

# 👨‍💻 Author

**Aditya Sharma**

GitHub: https://github.com/Adityasharma-6782

---

## ⭐ If you found this project helpful, don't forget to star the repository!
