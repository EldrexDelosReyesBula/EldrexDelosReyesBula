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

db.prepare('DELETE FROM students').run();

addStudent("Mark", "BSIS", "Regular", null);
addStudent("Anna", "BSIT", "Working", "TechCorp");
addStudent("John", "BSCS", "Regular", null);
addStudent("Lisa", "BSIT", "Working", "CodeFactory");

const students = db.prepare("SELECT * FROM students").all();
console.log(students);
