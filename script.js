const form = document.getElementById("formLogin");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(email === "" || senha === ""){
    alert("Preencha todos os campos");
    return;
  }

  if(email === "adminpampaserra@gmail.com" && senha === "admin3605"){
    window.location.href = "home.html";
  } else {
    alert("Login inválido");
  }
});

const form = document.getElementById("formLogin");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const registro = document.getElementById("Registro").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

  if (email === "" || registro === "" || senha === "" || confirmarSenha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha precisa ter no mínimo 6 caracteres!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não são iguais!");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  window.location.href = "home.html";
});