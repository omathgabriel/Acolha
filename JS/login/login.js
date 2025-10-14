let email = document.getElementById("email")
let senha = document.getElementById("senha")
let btn = document.querySelector(".btn")
const form = document.getElementById('formLogin');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
    

    let user = {
        email: email.value,
        senha: senha.value
    }

    fetch('http://localhost:3000/acolha/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Erro na autenticação');
        }
    })
    .then(data => {
        console.log('Sucesso:', data);
        alert('Login realizado com sucesso!');
        if(data.role === 'admin'){
            window.location.href = '#'; 
        } else {
            window.location.href = '../index.html'; 
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Falha no login. Verifique suas credenciais e tente novamente.');
    });

})