

const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();

  const bgbtn = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();
  
  function createJson(event) {
    event.preventDefault(); 
    let nome = document.getElementById("Nome").value;
    let email = document.getElementById("Email").value;
    let telefone = document.getElementById("Telefone").value;
    
    let Contato = {
      Nome: nome,
      Email: email,
      Telefone: telefone
    };

    localStorage.setItem("Contato", JSON.stringify(Contato));
    
    console.log(JSON.parse(localStorage.getItem("Contato")));

    document.getElementById("formContato").reset();

    Swal.fire({
      title: 'Contato Enviado!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
  });

  }