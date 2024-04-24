const loginForm = document.querySelector('.login-form');

 const onDataSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === '' || password.trim() === '') {
        form.elements.email.value = '';
        form.elements.password.value = '';
        return alert('All form fields must be filled in');
    }

    const objInfo = {
        email: email.trim(),
        password: password.trim(),
    }

    console.log(objInfo);
    form.reset();
};

loginForm.addEventListener('submit', onDataSubmit);
