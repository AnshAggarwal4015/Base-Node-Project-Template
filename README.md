# Node.js Project Template

A well-structured Node.js project template following best practices for code organization and project management.

## Project Structure

```
├── src/                  # All source code for the application
│   ├── config/           # Configuration files and setup
│   ├── routes/           # API route definitions
│   ├── middlewares/      # Request interceptors
│   ├── controllers/      # Request handlers
│   ├── repositories/     # Database interaction logic
│   ├── services/         # Business logic
│   └── utils/            # Helper functions and utilities
├── tests/                # Test files (optional)
└── .env                  # Environment variables
```

### Detailed Structure

#### `src/config`
Contains configuration for libraries and modules:
- Server configuration (e.g., dotenv setup for environment variables)
- Logging configuration
- Other third-party library setups

#### `src/routes`
Defines API routes with their corresponding middlewares and controllers.

#### `src/middlewares`
Request interceptors that process requests before they reach controllers:
- Validators
- Authenticators
- Other request preprocessing

#### `src/controllers`
The final middleware layer that:
- Receives incoming requests and data
- Passes data to the business layer (services)
- Structures API responses based on service outputs

#### `src/repositories`
Database interaction layer:
- Contains all database queries
- Can use raw SQL or ORM queries

#### `src/services`
Business logic layer:
- Contains all application business logic
- Interacts with repositories to fetch or store data

#### `src/utils`
Helper functionality:
- Utility functions
- Error classes
- Common constants

## Setup Instructions

1. **Clone the template**
   ```
   git clone https://github.com/AnshAggarwal4015/Base-Node-Project-Template.git
   cd <project-folder>
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```
   PORT=3000
   ```

4. **Initialize Sequelize** (if using it as your ORM)
   ```
   cd src
   npx sequelize init
   ```
   This creates:
   - `migrations` folder
   - `seeders` folder
   - `config.json` inside the `config` folder

5. **Configure database**
   Edit `config/config.json` with your database details:
   - For development: set your local database username, password, and dialect
   - For test/production: include the host URL for your hosted database

6. **Run the server**
   ```
   npm run dev
   ```

## Customization

Feel free to modify this template to suit your specific project requirements. The structure provided follows common best practices but can be adapted as needed.
