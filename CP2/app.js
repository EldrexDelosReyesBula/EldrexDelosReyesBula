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


class Student {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    getDetails() {
        return `Name: ${this.name}, Course: ${this.course}`;
    }

    save() {
        db.prepare(`
            INSERT INTO students (name, course, type, company)
            VALUES (?, ?, ?, ?)
        `).run(this.name, this.course, "Regular", null);
    }
}


class RegularStudent extends Student {
    constructor(name, course) {
        super(name, course);
    }

    getDetails() {
        return `Regular Student -> ${super.getDetails()}`;
    }
}

class WorkingStudent extends Student {
    constructor(name, course, company) {
        super(name, course);
        this.company = company;
    }

    getDetails() {
        return `Working Student -> Name: ${this.name}, Course: ${this.course}, Company: ${this.company}`;
    }

    save() {
        db.prepare(`
            INSERT INTO students (name, course, type, company)
            VALUES (?, ?, ?, ?)
        `).run(this.name, this.course, "Working", this.company);
    }
}


const student1 = new RegularStudent("Mark", "BSIS");
const student2 = new WorkingStudent("Anna", "BSIT", "TechCorp");

student1.save();
student2.save();

console.log(student1.getDetails());
console.log(student2.getDetails());

const allStudents = db.prepare("SELECT * FROM students").all();
console.log("\nAll Students in Database:");
console.log(allStudents);
