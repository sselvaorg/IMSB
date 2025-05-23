# inventory-manager

A web-based inventory management system built with Spring Boot for the backend and React with Tailwind CSS for the frontend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation Guide](#installation-guide)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Manage articles, categories, Suppliers, and stock entries and exits
- Dashboard with visual analytics
- Responsive design using Tailwind CSS

## Technologies

- **Backend**: Spring Boot
- **Frontend**: React, Tailwind CSS
- **Database**: PostgreSQL (or your preferred database)
- **Build Tool**: Gradle (for Spring Boot)

## Installation Guide

### Prerequisites

- Java 17 or higher
- Node.js and npm
- PostgreSQL (or your preferred database)

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/oussamahdidou/inventory-manager-springboot-react.git
   cd inventory-manager-springboot-react/api
   ```

### Configure the database:

Create a PostgreSQL database.

1. **Update the database configuration in src/main/resources/application.properties:**

```
 spring.datasource.url=jdbc:postgresql://localhost:5432/yourdbname
 spring.datasource.username=yourusername
 spring.datasource.password=yourpassword
```

2. **Build the backend:**

```
./gradlew build
```

3. **Run the backend:**

```
./gradlew bootRun
```

### Frontend Setup

1. **Navigate to the client directory:**

```
 cd ../client
```

2. **Install dependencies:**

```
npm install
```

3. **Start the frontend:**

```
   npm start
```

Access the Application
Open your web browser and go to http://localhost:3000 to access the frontend.
The backend will be running on http://localhost:8083.
