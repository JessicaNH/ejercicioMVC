const contData = document.getElementById('containerData');

 window.showData = function(users) {
  const nameInput = document.getElementById('inputName').value;
  users.forEach(element => {
    if(element.name === nameInput) {
      contData.innerHTML = `
      <p>Nombre: ${element.name}</p>
      <p>Estado: ${element.active}</p>
      `;
    }
  });
}; 