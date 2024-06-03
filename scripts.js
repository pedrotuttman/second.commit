document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Substitua 'admin@example.com' e 'admin' pelo email e senha desejados para validação
    if (email === 'admin@example.com' && password === 'admin') {
        alert('Login bem-sucedido!\nEmail: ' + email + '\nSenha: ' + password);
        // Redirecionar ou realizar outras ações
    } else {
        errorMessage.textContent = 'Email ou senha incorretos';
    }
});