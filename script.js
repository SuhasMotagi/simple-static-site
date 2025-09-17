// Dummy users (in a real app, this would be a backend; here it's hardcoded for demo)
const dummyUsers = {
    'user1': 'pass123'
};

// Check if user is authenticated
function checkAuth() {
    const user = localStorage.getItem('username');
    if (user) {
        document.getElementById('logoutBtn').style.display = 'inline';
        document.getElementById('secretMsg').style.display = 'block';
        document.getElementById('logoutBtn').onclick = () => {
            localStorage.removeItem('username');
            location.reload();
        };
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (dummyUsers[username] && dummyUsers[username] === password) {
        localStorage.setItem('username', username);
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
}

// Handle registration (dummy: just stores if not exists)
function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    if (dummyUsers[username]) {
        alert('User already exists!');
    } else {
        dummyUsers[username] = password; // "Save" to dummy object (resets on refresh)
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    }
}