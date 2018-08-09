const users = [
  {
    name: 'Leslie',
    active: true 
  },
  {
    name: 'Cindy',
    active: true 
  },
  {
    name: 'Daniela',
    active: false 
  },
  {
    name: 'Francesca',
    active: false 
  },
  {
    name: 'Carolo',
    active: true 
  },
  {
    name: 'Miranda',
    active: true 
  },
  {
    name: 'Lucia',
    active: false 
  },
  {
    name: 'Jessica',
    active: true 
  },
]

window.addAge = function() {
  users.forEach(element => {
    if (element.name.charAt(0)=== 'L'){ //chartAt recorre el string (value de la propiedad name)
      element.age = 18;
    }
   
  });
  return users;
};