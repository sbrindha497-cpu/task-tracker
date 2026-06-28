# Full Stack Task Tracker
A simple Full Stack Task Tracker application built using Spring Boot, React and MySQL.
## Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- MySQL

### Frontend
- React
- Axios
- CSS

### Database
- MySQL

---

# Project Structure

```
task-tracker/
│
├── backend/
├── frontend/
└── README.md
```
# How to Run the Project

## 1. Clone the Repository

```bash
git clone https://github.com/sbrindha497-cpu/task-tracker.git
```

## 2. Database Setup

Create a MySQL database.

```sql
CREATE DATABASE task_tracker;
```

Update the database credentials in:

```
backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/task_tracker
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

## 3. Run the Backend

Navigate to the backend folder.

```bash
cd backend
```

Run the application.

```bash
mvn spring-boot:run
```

The backend will run at:

```
http://localhost:8080
```

## 4. Run the Frontend

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

The frontend will run at:

```
http://localhost:3000
```

---

# API Endpoints

## Project APIs

### Get All Projects

```
GET /api/projects
```

### Create Project

```
POST /api/projects
```

Example Request

```json
{
  "projectName": "Task Tracker",
  "description": "Spring Boot Project"
}
```

---

## Task APIs

### Get All Tasks

```
GET /api/tasks
```

### Create Task

```
POST /api/tasks
```

Example Request

```json
{
  "title": "Complete Backend API",
  "description": "Create CRUD APIs",
  "status": "Pending",
  "priority": "High",
  "dueDate": "2026-07-15",
  "project": {
    "id": 2
  }
}
```

### Update Task

```
PUT /api/tasks/{id}
```

### Delete Task

```
DELETE /api/tasks/{id}
```

---

# Design Notes

## Design Decisions

- The application follows a simple full-stack architecture.
- Spring Boot is used to build REST APIs.
- React is used for the frontend user interface.
- MySQL stores project and task information.
- Spring Data JPA simplifies database operations.
- Axios is used to communicate between React and Spring Boot.

## Future Improvements

- User Authentication (JWT)
- Search and Filtering
- Pagination
- Docker Compose support
- Unit Testing
- Better UI using Material UI or Bootstrap

---
# AI Assistant Usage

This project was developed with assistance from ChatGPT for:

- Designing the Spring Boot REST APIs
- React component development
- CSS styling
- Debugging issues
- Preparing the README documentation

All code was reviewed, tested, and integrated manually.
