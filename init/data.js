const sampleTasks = [
    {
        task: "create task managere website",
        dead_line: new Date("2025-11-27"),
        assign_to: "Sarthak",
        assign_at: new Date(),
        discription: "Create a task manager website using Node.js, Express, and MongoDB."
    },
    {
        task: "Make a to-do list app",
        dead_line: new Date("2025-12-01"),
        assign_to: "pawan",
        assign_at: new Date(),
        discription: "Develop a simple to-do list application with user authentication."
    },
    {
        task: "create research document",
        dead_line: new Date("2025-11-01"),
        assign_to: "Vaishnavi",
        assign_at: new Date(),
        discription: "Research and document the latest trends in web development."
    }
];

module.exports = {data: sampleTasks};