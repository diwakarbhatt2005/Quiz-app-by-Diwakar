document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

   
    if (username === 'Diwakar' && password === '2005') {
        
        alert('Login Successful');
        window.location.href = '../QUIZ FOLDER 1/index.html'; // Redirect to the quiz page
    } else {
      
        alert('Invalid username or password');
    }
});
