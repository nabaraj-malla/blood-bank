## Blood Bank
The Blood Bank project is a web application designed to streamline the process of blood donation, storage, and distribution among various stakeholders: donors, organizations, and hospitals.

## key Features
- **Donors**: Can donate blood to registered organizations, view their donation history, and access organizations details they have donated to through their personal dashboard.
- **Organizations**: can receive blood donations, manage their blood inventory, and distribute blood to hospitals.
- **Hospital**: can request blood from organizations, manage their blood supply, and administer blood to patients.
- **Analytics**: The system provides analytics on blood quantity.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: html, css, js, bootstrap, react
- **Databse**: mongodb
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: Mongoose (for MongoDB), bcrypt (for password hashing), dotenv (for environment variables)

## Installation 
### Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js
- MongoDB (local or cloud-based)
- Git (for version control)
### Installation
- Clone the repository
  ```bash
  git clone https://github.com/nabaraj-malla/blood-bank.git
- Install dependencies
  ```bash
  npm install
- Set up environment variables: Create a .env file and add the following variables:
  ```bash
  PORT = 8080 # or any available port
  DEV_MODE = development
  MONGO_URL = mongodb://your_database_uri
  JWT_SECRET = YourSecretKey
- Start the development server
  ```bash
  npm start || node server.js
