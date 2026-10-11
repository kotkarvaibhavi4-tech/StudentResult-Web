let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let marks1 = Number(document.getElementById("marks1").value);
    let marks2 = Number(document.getElementById("marks2").value);
    let marks3 = Number(document.getElementById("marks3").value);
    let marks4 = Number(document.getElementById("marks4").value);
    let marks5 = Number(document.getElementById("marks5").value);

    if (name == "" || roll == "") {
        alert("Please enter student name and roll number");
        return;
    }

    if (
        marks1 < 0 || marks1 > 100 ||
        marks2 < 0 || marks2 > 100 ||
        marks3 < 0 || marks3 > 100 ||
        marks4 < 0 || marks4 > 100 ||
        marks5 < 0 || marks5 > 100
    ) {
        alert("Marks should be between 0 and 100");
        return;
    }

    let total = marks1 + marks2 + marks3 + marks4 + marks5;

    let percentage = (total / 500) * 100;

    let student = {
        name: name,
        roll: roll,
        marks1: marks1,
        marks2: marks2,
        marks3: marks3,
        marks4: marks4,
        marks5: marks5,
        total: total,
        percentage: percentage
    };

    students.push(student);

    displayStudent(student);

    findTopper();

    clearForm();
}


function displayStudent(student) {

    let tableBody = document.getElementById("tableBody");

    let row = tableBody.insertRow();

    row.insertCell(0).innerHTML = student.roll;
    row.insertCell(1).innerHTML = student.name;
    row.insertCell(2).innerHTML = student.marks1;
    row.insertCell(3).innerHTML = student.marks2;
    row.insertCell(4).innerHTML = student.marks3;
    row.insertCell(5).innerHTML = student.marks4;
    row.insertCell(6).innerHTML = student.marks5;
    row.insertCell(7).innerHTML = student.total;
    row.insertCell(8).innerHTML = student.percentage.toFixed(2) + "%";
}


function findTopper() {

    let topper = students[0];

    for (let i = 1; i < students.length; i++) {

        if (students[i].percentage > topper.percentage) {
            topper = students[i];
        }
    }

    document.getElementById("topper").innerHTML =
        "Topper: " + topper.name +
        " | Roll No: " + topper.roll +
        " | Percentage: " + topper.percentage.toFixed(2) + "%";
}


function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";

    document.getElementById("marks1").value = "";
    document.getElementById("marks2").value = "";
    document.getElementById("marks3").value = "";
    document.getElementById("marks4").value = "";
    document.getElementById("marks5").value = "";
}