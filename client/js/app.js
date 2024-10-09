document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
        localStorage.setItem('token', data.token);  // Store token in localStorage
        window.location.href = 'pages/dashboard.html';  // Redirect to dashboard
    } else {
        alert(data.msg);  // Show error message
    }
});
