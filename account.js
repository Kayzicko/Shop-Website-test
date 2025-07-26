// Buttons holen
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Wenn "Registrieren" geklickt wird
signUpButton.addEventListener('click', () => {
    container.classList.add("signup-active");
});

// Wenn "Einloggen" geklickt wird
signInButton.addEventListener('click', () => {
    container.classList.remove("signup-active");
});
