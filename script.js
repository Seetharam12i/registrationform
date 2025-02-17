document.getElementById('registrationForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');
    if (password !== confirmPassword)
    {
        messageDiv.textContent = "Passwords do not match!";
        return;
    }
    messageDiv.textContent = "Registration successful!";
    messageDiv.style.color="green";
});
