let i = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i += 1;
} while (i < 3);
