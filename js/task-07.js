document.getElementById('font-size-control').addEventListener('input', (event) => {
    const fontSize = event.target.value;
    document.getElementById('text').style.fontSize = fontSize + 'px';
  });