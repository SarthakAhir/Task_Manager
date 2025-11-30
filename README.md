# Task Manager

A simple and intuitive Task Manager web application built with Node.js, Express, EJS, and MongoDB. This application allows users to efficiently manage their tasks with full CRUD (Create, Read, Update, Delete) functionality.

## Features

- ✅ **Create Tasks** - Add new tasks with assignee and deadline
- 📋 **List Tasks** - View all tasks in an organized manner
- 👁️ **View Task Details** - See complete information about individual tasks
- ✏️ **Update Tasks** - Edit task details and update status
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- 🎨 **Status Tracking** - Visual badges for task status:
  - `incomplete` (default)
  - `in-progress`
  - `complete`

## Task Fields

Each task includes the following information:
- **Task Name** - Description of the task
- **Assigned To** - Person responsible for the task
- **Deadline** - Due date for completion
- **Status** - Current state of the task (incomplete/in-progress/complete)

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) running locally

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SarthakAhir/Task_Manager.git
   cd Task_Manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   
   Make sure MongoDB is running on your local machine. The application uses the default connection URI:
   ```
   mongodb://127.0.0.1:27017/taskmanager
   ```

## Usage

### Running in Production Mode

```bash
node app.js
```

### Running in Development Mode

For development with auto-restart on file changes:

1. Install nodemon as a dev dependency:
   ```bash
   npm install --save-dev nodemon
   ```

2. Run the application:
   ```bash
   npx nodemon app.js
   ```

### Using NPM Scripts (Optional)

You can add these scripts to your `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Then run with:
```bash
npm run start    # Production mode
npm run dev      # Development mode
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/tasks` | List all tasks |
| GET | `/tasks/new` | Show form to create a new task |
| POST | `/tasks` | Create a new task |
| GET | `/tasks/:id` | Show details of a single task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

*Note: PUT and DELETE methods use the `method-override` middleware for form compatibility.*

## Database Configuration

The application uses Mongoose to connect to MongoDB. The default connection URI is:

```javascript
mongodb://127.0.0.1:27017/taskmanager
```

If you need to use a different MongoDB URI, update the connection string in `app.js`.

## Troubleshooting

### Git Line Ending Warnings

If you see `LF will be replaced by CRLF` warnings on Windows:

1. Ensure `node_modules/` is in `.gitignore` (already included)
2. Run:
   ```bash
   git config --global core.autocrlf true
   ```

### Status Not Updating

If the update form doesn't change the task status, verify that the `<select>` element in your form has:
```html
name="task[status]"
```
This ensures the server receives the status value correctly.

### Adding Sample Data

To populate your database with sample tasks, you can create a seed script using the `Task` model to insert documents.

## Project Structure

```
Task_Manager/
├── app.js              # Main application file
├── models/             # Mongoose models
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## Best Practices

- ⚠️ **Do not commit `node_modules/`** - It's already in `.gitignore`
- 📝 Keep line endings consistent across platforms
- 🔧 Consider adding a `.gitattributes` file to normalize line endings

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Template Engine:** EJS
- **Middleware:** method-override (for PUT/DELETE support)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

**Sarthak Ahir**
- GitHub: [@SarthakAhir](https://github.com/SarthakAhir)

