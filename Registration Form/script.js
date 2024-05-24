document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    if (!username || !email || !password || !cpassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== cpassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Registration successful!');
    // Here you can add the code to handle the form submission,like sending the data to a server or saving it locally.
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
