

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
  const url = 'https://api.github.com/users/carrarook/repos';

async function listRepo() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na solicitação: ' + response.statusText);
        }
        const repos = await response.json();
        
        const filteredRepos = repos.map(repo => ({
            id: repo.id,
            name: repo.name,
            link: repo.html_url,
            description: repo.description
        }));

        createCarrousel(filteredRepos); 
    } catch (error) {
        console.error('Erro:', error);
    }
}

function createCarrousel(repos) {
    const cardContainer = document.getElementById('cardsContainer');
    bgCardsSelector = null
    // if (Math.floor(Math.random() * 2) % 2 == 0) {
    //     bgCardsSelector = 
    // } PRA TER DUAS COR ALEATORIA NO BG DOS CARDS
   
    cardContainer.innerHTML = ''; // reseta os cards

    
    repos.forEach(repo => {
        // Cria uma nova div pra cada obj o do repo
        const card = document.createElement('div');
        card.classList.add('whiskey-card');
        card.style.backgroundColor = '#679698'; // BG card

        // insere os conteudos nos cards
        card.innerHTML = `
            <h3><a href="${repo.link}" target="_blank">${repo.name}</a></h3>
            <p class="cardRepo-card--content">${repo.description}</p>
            <p class="cardRepo-card--link"><a href="${repo.link}" target="_blank">Ver repositório <svg class="HoverArrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><g fill-rule="evenodd"><path class="HoverArrow__linePath" d="M0 5h7"></path><path class="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path></g></svg></a></p>
        `;
        console.log(repo)
        // Adiciona o card no container 
        cardContainer.appendChild(card);
    });
}

//função para listar os repositórios
listRepo();