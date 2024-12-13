$(function () {
    "use strict";
    
    /* Preloader */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    /* Tooltip */
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* Mouseover */
    $(document).ready(function(){
        $(".main-menu ul li.megamenu").mouseover(function(){
            if (!$(this).parent().hasClass("#wrapper")){
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function(){
            $("#wrapper").removeClass('overlay');
        });
    });

    /* Toggle sidebar */
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider */
    $('#blogCarousel').carousel({
        interval: 5000
    });
});

// Função para alternar entre os formulários
function switchForm(form) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (form === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Função para validar os campos de login
function validateLoginForm() {
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    
    // Validar Email
    if (loginEmail.value === "") {
        loginEmail.setCustomValidity("Por favor, insira seu email.");
    } else {
        loginEmail.setCustomValidity("");
    }
    
    // Validar Senha
    if (loginPassword.value === "") {
        loginPassword.setCustomValidity("Por favor, insira sua senha.");
    } else {
        loginPassword.setCustomValidity("");
    }
}

// Função para validar os campos de registro
function validateRegisterForm() {
    const registerName = document.getElementById('register-name');
    const registerEmail = document.getElementById('register-email');
    const registerPassword = document.getElementById('register-password');
    
    // Validar Nome
    if (registerName.value === "") {
        registerName.setCustomValidity("Por favor, insira seu nome.");
    } else {
        registerName.setCustomValidity("");
    }

    // Validar Email
    if (registerEmail.value === "") {
        registerEmail.setCustomValidity("Por favor, insira seu email.");
    } else {
        registerEmail.setCustomValidity("");
    }
    
    // Validar Senha
    if (registerPassword.value === "") {
        registerPassword.setCustomValidity("Por favor, insira uma senha.");
    } else {
        registerPassword.setCustomValidity("");
    }
}

// Evitar o comportamento padrão de recarregar a página no login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validações antes de mostrar a mensagem de sucesso
    validateLoginForm();

    if (document.getElementById('login-email').checkValidity() && document.getElementById('login-password').checkValidity()) {
        alert('Login realizado com sucesso!');
        // Adicione sua lógica de envio aqui
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Evitar o comportamento padrão de recarregar a página no registro
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validações antes de mostrar a mensagem de sucesso
    validateRegisterForm();

    if (document.getElementById('register-name').checkValidity() && document.getElementById('register-email').checkValidity() && document.getElementById('register-password').checkValidity()) {
        alert('Registro realizado com sucesso!');
        // Adicione sua lógica de envio aqui
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
