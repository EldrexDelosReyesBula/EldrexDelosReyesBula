const Database = require('better-sqlite3');
const db = new Database('college.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        course TEXT,
        type TEXT,
        company TEXT
    )
`).run();

function addStudent(name, course, type, company) {
    db.prepare(`
        INSERT INTO students (name, course, type, company)
        VALUES (?, ?, ?, ?)
    `).run(name, course, type, company);
}

add("Mark", "BSIS", "Regular", null);
addStudent("Anna", "BSIT", "Working", "TechCorp");

const students = db.prepare("SELECT * FROM students").all();

console.log("All Students:");
students.forEach(student => {
    console.log(
        "ID: " + student.id +
        ", Name: " + student.name +
        ", Course: " + student.course +
        ", Type: " + student.type +
        ", Company: " + (student.company ? student.company : "-")
    );
});
