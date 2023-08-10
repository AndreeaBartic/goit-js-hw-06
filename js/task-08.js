document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const formElements = event.target.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
  
    if (!email || !password) {
      alert('Toate câmpurile trebuie completate!');
      return;
    }
  
    const loginData = {
      email: email,
      password: password
    };
  
    console.log(loginData);
  
    event.target.reset();
  });
