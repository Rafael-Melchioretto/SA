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