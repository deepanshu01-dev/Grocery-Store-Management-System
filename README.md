# 🛒 Grocery Store Management System

A full-stack web application for managing **products**, **customers**, and **orders** in a grocery store using Flask, MySQL, JavaScript, and Bootstrap.

---

## 📋 Table of Contents

- [🧰 Tech Stack](#-tech-stack)
- [🚀 Features](#-features)
- [📂 Project Structure](#-project-structure)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [📊 API Endpoints](#-api-endpoints)
- [🖥️ UI Previews](#-ui-previews)
- [📌 Future Improvements](#-future-improvements)
- [📄 License](#-license)

---

## 🧰 Tech Stack

| Technology     | Description                     |
|----------------|---------------------------------|
| Python + Flask | Backend server & routing        |
| MySQL          | Relational database             |
| HTML/CSS       | Frontend markup & styling       |
| Bootstrap 5    | UI framework                    |
| JavaScript     | API communication & DOM logic   |

---

## 🚀 Features

- 🔧 Add, view, and manage:
  - 🛍 Products (name, category, price)
  - 🧍‍♂️ Customers (name, email, city)
  - 🧾 Orders (quantity, total amount)
- 📄 Real-time data updates using JavaScript + Fetch API
- 🖥 Clean, responsive Bootstrap UI
- 📂 REST-style routes with JSON data exchange

## 📂 Project Structure

│grocery store management system
├── app.py # Main Flask application
├── sql_connection.py # MySQL DB connection
├── static/
│ └── index.js # Frontend JS logic
├── templates/
│ ├── index.html # Home + Forms page
│ ├── products.html # Products table view
│ ├── customer.html # Customers table view
│ └── orders.html # Orders table view
└── README.md # This file
---


---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Python 3.x
- MySQL Server
- Git
- Flask (`pip install flask`)
- MySQL connector (`pip install mysql-connector-python`)


### 🛠 Configuration
import mysql.connector

Configure your MySQL connection in sql_connection.py:
cnx = mysql.connector.connect(
    host='localhost',
    user='your_mysql_user',
    password='your_mysql_password',
    database='grocery_db'
)

Create required tables in MySQL:
CREATE DATABASE grocery_db;
USE grocery_db;

CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(100)
);

CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    quantity INT,
    total_amount DECIMAL(10, 2)
);

Run the Flask app:
python app.py
