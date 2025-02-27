document.addEventListener('DOMContentLoaded', function() {
    const studentList = document.getElementById('studentList');

    // Function to get data from local storage and display it
    function displayStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        studentList.innerHTML = '';

        students.forEach(student => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.dob}</td>
            `;

            studentList.appendChild(row);
        });
    }

    // Function to save student data to local storage
    function saveStudent(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;

        const student = { firstName, lastName, email, phone, dob };
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
    }

    // Attach event listener to the form on the registration page
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', saveStudent);
    }

    // Display students on the homepage
    displayStudents();
});