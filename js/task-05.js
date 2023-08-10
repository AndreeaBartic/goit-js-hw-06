document.getElementById('name-input').addEventListener('input', (event) => {
    const inputName = event.target.value;
    const nameOutputElement = document.getElementById('name-output');
  
    if (inputName.trim() === '') {
      nameOutputElement.textContent = 'Anonymous';
    } else {
      nameOutputElement.textContent = inputName;
    }
  });