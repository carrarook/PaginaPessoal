

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

  // Get request teste

  const url = 'https://api.github.com/users/carrarook/repos'
  async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.statusText);
        }

        // Converte pra JSON
        const repos = await response.json();
        
        console.log(repos);
    } catch (error) {
        console.error('Erro:', error);
    }
}
listRepo()