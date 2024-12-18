# JWT and OAuth Frontend

This project is a frontend application demonstrating the implementation of JSON Web Tokens (JWT) and OAuth for authentication and authorization. It showcases how to integrate these technologies into a web application to manage user access securely. For backend implementation use [ JWT and OAuth Backend Repository](https://github.com/efkdk/jwt-and-oauth-backend)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for predictable and centralized state management.
- **TypeScript**: Superset of JavaScript for static typing.
- **ShadCN UI**: A highly customizable and modern UI component library
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Next-generation frontend tooling for development and build.

## Features

- **JWT Authentication**: Implements user authentication using JSON Web Tokens for secure and stateless user sessions.
- **OAuth Integration**: Integrates third-party OAuth providers (e.g., Google, GitHub) for user authentication.
- **Protected Routes**: Guards specific routes in the application, ensuring only authenticated users can access them.
- **Token Management**: Handles token storage, renewal, and expiration seamlessly on the client side.
- **Redux State Management**: Centralized application state management using Redux for better scalability and maintainability.

## Configuration

This application requires configuration for OAuth providers and JWT settings. Update the configuration files as needed:

- **OAuth Providers**: Configure your OAuth client IDs and secrets in the configuration files. *For assistance, you can watch this video:*  [Google OAuth Setup](https://youtu.be/tgO_ADSvY1I?si=zNPOmbbAdELJVbCg)
- **Important Note**: This project is only frontend part for auth. You need **API URL** and **Google OAuth Redirect Url** to use this project. For backend part use [JWT and OAuth Backend Repository](https://github.com/efkdk/jwt-and-oauth-backend).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/efkdk/jwt-and-oauth-frontend.git
   cd jwt-and-oauth-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:

   ```bash
   npm run dev
   ```

## Project Structure

- `app/`: Core files (main.tsx, router.tsx, and store.ts)
- `components/`: Reusable React components.
- `features/` Modules of the application.
- `pages/`: Application pages and routes.
- `shared/`: directory contains reusable and shared resources across the application
  - `constans/`
  - `types/`
  - `redux/`
- `utils/`: Utility functions and helpers.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
