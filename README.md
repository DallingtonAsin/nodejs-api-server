# TypeScript Node.js API Server - User Management

A TypeScript Node.js API server for managing users. This API provides endpoints for creating, updating, deleting, and fetching user data.

## Table of Contents

- [TypeScript Node.js API Server - User Management](#typescript-nodejs-api-server---user-management)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TypeScript
- MySQL or another compatible relational database

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/DallingtonAsin/nodejs-api-server.git
   cd nodejs-api-server

2. Install project dependencies:
   ```sh
   npm i body-parser dotenv express joi jsonwebtoken morgan mysql2 sequelize bcrypt
   npm i --save-dev typescript@5.1.6 @types/node @types/express

3. Create .env file and update environment variables accordingly:
   ```sh
   cp .env.example .env
   edit values in .env file according to your configurations

4. Start the application
   ```sh
   npm run start
   
