
<!--
File: README.md
Author: José E. Moraes
Date: 2024-08-28
Description: 
-->

# Innovative AI Tools for Education and Legal Automation

> Author José E. Moraes / Starting Date: 2024-08-28

> Its a very (I mean Very!) _work-in-starting_

This project serves as a base for developing applications that leverage artificial intelligence for educational purposes, legal automation, and assistance to lawyers. The project is structured as a full-stack application with a `ReactJS` and `Vite` in frontend and a `FastAPI` backend using `postgress`, designed to be easily dockerized for production deployment.

## Table of Contents

- [Innovative AI Tools for Education and Legal Automation](#innovative-ai-tools-for-education-and-legal-automation)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Directory Structure](#directory-structure)
  - [Obtaining Beautiful CSS for Your Project](#obtaining-beautiful-css-for-your-project)
    - [1. Tailwind CSS Components Libraries](#1-tailwind-css-components-libraries)
    - [2. Open Source CSS Frameworks](#2-open-source-css-frameworks)
    - [3. Component Libraries and Templates](#3-component-libraries-and-templates)
    - [Example: Using DaisyUI with Tailwind CSS](#example-using-daisyui-with-tailwind-css)

## Project Overview

This project aims to create a robust foundation for building AI-driven tools that can be used in various domains such as education and legal automation. The backend is built with FastAPI, providing a high-performance API, while the frontend is developed using ReactJS with Vite for a fast and modern development experience.

## Features

- **AI Integration**: Utilize OpenAI and Transformers for advanced AI capabilities.
- **User Management**: Basic CRUD operations for user management.
- **JWT Authentication**: Secure endpoints with JSON Web Tokens (JWT).
- **Dockerized Deployment**: Easily deploy the application using Docker.
- **CORS Configuration**: Properly configured CORS for secure cross-origin requests.
- **Unit Testing**: Comprehensive unit tests for both frontend and backend.
- **Jupyter Notebooks**: A dedicated folder for experimenting with ideas and concepts using Jupyter Notebooks.

## Tech Stack

- **Frontend**: ReactJS, Vite
- **Backend**: FastAPI, Pydantic, PostgreSQL, Psycopg2
- **AI Libraries**: OpenAI, Transformers
- **Authentication**: JSON Web Tokens (JWT)
- **Containerization**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.9+
- Docker and Docker Compose

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/innovative-ai-tools.git
    cd innovative-ai-tools
    ```

2. **Frontend Setup**:
    ```sh
    cd frontend
    npm install
    npm run dev
    ```

3. **Backend Setup**:
    ```sh
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    uvicorn app.main:app --reload
    ```

4. **Docker Setup**:
    ```sh
    docker-compose up --build
    ```

## Directory Structure

```plaintext
innovative-ai-tools/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── node_modules/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   └── config.py
│   │   ├── endpoints/
│   │   │   └── user.py
│   │   ├── models/
│   │   │   └── user.py
│   │   └── main.py
│   ├── tests/
│   │   └── test_main.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── venv/
├── notebooks/
│   └── example_notebook.ipynb
├── docker-compose.yml
└── README.*md*
```

## Obtaining Beautiful CSS for Your Project

To obtain a free collection or examples of beautiful CSS for use in your project, you can explore several resources that offer pre-designed components and templates. Here are some popular options:

### 1. Tailwind CSS Components Libraries
Tailwind CSS has several community-driven component libraries that provide pre-designed components you can use directly in your project.

- **Tailwind UI (Free Components)**: [Tailwind UI](https://tailwindui.com/components) offers a collection of free components.
- **DaisyUI**: [DaisyUI](https://daisyui.com/) is a plugin for Tailwind CSS that provides a set of beautiful, customizable components.
- **Flowbite**: [Flowbite](https://flowbite.com/) offers a collection of UI components built with Tailwind CSS.

### 2. Open Source CSS Frameworks
These frameworks provide a set of pre-designed components and styles that you can use in your project.

- **Bootstrap**: [Bootstrap](https://getbootstrap.com/) is a popular CSS framework with a wide range of components.
- **Bulma**: [Bulma](https://bulma.io/) is a modern CSS framework based on Flexbox.

### 3. Component Libraries and Templates
These libraries offer a variety of pre-designed components and templates that you can use for free.

- **Material-UI**: [Material-UI](https://mui.com/) provides a set of React components that implement Google's Material Design.
- **Chakra UI**: [Chakra UI](https://chakra-ui.com/) is a simple, modular, and accessible component library for React.
- **Tailblocks**: [Tailblocks](https://tailblocks.cc/) offers a collection of ready-to-use Tailwind CSS blocks.

### Example: Using DaisyUI with Tailwind CSS

1. **Install DaisyUI**:
   ```sh
   npm install daisyui
   ```