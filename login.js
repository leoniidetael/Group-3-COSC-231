document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordButton = document.getElementById('forgotPassword');
    const registerButton = document.getElementById('registerButton');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Basic validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here you would typically send the data to a server
        // For demonstration, we'll just log it and show an alert
        console.log('Login attempt:', { username, password, rememberMe });
        alert('Login submitted! (This is a demo - in a real app, this would authenticate the user)');

        // You could redirect to another page here
        // window.location.href = 'dashboard.html';
    });

    forgotPasswordButton.addEventListener('click', function() {
        // In a real app, this might open a modal or redirect to a reset page
        alert('Forgot Password functionality would be implemented here.');
    });

    registerButton.addEventListener('click', function() {
        // In a real app, this might redirect to a registration page
        alert('Register functionality would be implemented here.');
        // window.location.href = 'register.html';
    });
});