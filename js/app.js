document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For now, log credentials to console (this will be replaced with actual authentication)
    console.log(`Username: ${username}, Password: ${password}`);

    // You can redirect to a dashboard page if login is successful
    window.location.href = "pages/dashboard.html";
});