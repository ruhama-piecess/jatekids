document.addEventListener('DOMContentLoaded', function() {
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

        // Redirect to the homepage after saving the student
        window.location.href = '../html/homepage.html';
    }

    // Attach event listener to the form on the registration page
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', saveStudent);
    }
});