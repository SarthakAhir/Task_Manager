# Task Manager

A simple Task Manager web app built with Express, EJS and MongoDB.

## Features
- Create, list, view, update and delete tasks
- Task fields: task, assign_to, dead_line, status (default: `incomplete`)
- Status badges/colors for `incomplete`, `in-progress`, `complete`

## Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node)
- MongoDB running locally (default connection URI used: `mongodb://127.0.0.1:27017/taskmanager`)

## Install
From the project root run:

```bash
npm install
```

## Run
Start MongoDB (if not running). Then run the server:

```bash
node app.js
```

For development (auto-restart on changes) install `nodemon` and run:

```bash
npm install --save-dev nodemon
npx nodemon app.js
```

You can also add scripts to `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

and run with `npm run start` or `npm run dev`.

## Endpoints
- `GET /tasks` — list all tasks
- `GET /tasks/new` — show form to create a new task
- `POST /tasks` — create a task
- `GET /tasks/:id` — show a single task
- `PUT /tasks/:id` — update a task (method-override is used)
- `DELETE /tasks/:id` — delete a task

## Database
The app uses Mongoose and expects a MongoDB server at `mongodb://127.0.0.1:27017/taskmanager` by default. If you need a different URI, update `app.js`.

## Notes & Troubleshooting
- If you see many `LF will be replaced by CRLF` warnings when running `git add`, ensure `node_modules/` is in `.gitignore` (this project already adds it) and set `git config --global core.autocrlf true` on Windows to avoid repeated warnings.
- If the update form doesn't change status, make sure the `<select>` element has `name="task[status]"` so the server receives the value. The project already includes this fix.
- To seed sample data, you can create a small script that uses the `Task` model to insert documents.

## Contributing
- Please do not commit `node_modules`.
- Keep line endings consistent — consider adding a `.gitattributes` file to normalize endings across platforms.

## License
ISC

---

If you want I can also:
- Add `start`/`dev` scripts to `package.json` and commit them,
- Create a small `seed.js` to populate example tasks,
- Add `.gitattributes` and normalize line endings.

Tell me which of those you want me to do next.