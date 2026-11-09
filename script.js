// Controla o formulário de login apenas na página em que ele existe.
// ATENÇÃO: as credenciais abaixo são legadas e servem somente para demonstração.
// Uma versão de produção exige autenticação segura no servidor.
const formLogin = document.getElementById("formLogin");
if (formLogin) {
  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }
    if (email === "adminpampaserra@gmail.com" && senha === "admin3605") {
      window.location.href = "home.html";
    } else {
      alert("Login inválido.");
    }
  });
}

// Busca de rotas, caso os elementos estejam presentes.
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
if (searchBtn && searchInput) {
  function pesquisarRota() {
    const value = searchInput.value.trim();
    if (!value) {
      alert("Digite uma rota para pesquisar.");
      return;
    }
    alert("Pesquisa realizada: " + value);
  }
  searchBtn.addEventListener("click", pesquisarRota);
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      pesquisarRota();
    }
  });
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
if (prevBtn) prevBtn.addEventListener("click", function () { alert("Voltar rota"); });
if (nextBtn) nextBtn.addEventListener("click", function () { alert("Próxima rota"); });
