const nomeBusca = document.querySelector(".input");
const mensagemErro = document.querySelector("#mensagemErro");
const botaoBuscar = document.querySelector("#botao_buscar");
const titulo = document.querySelector("#titulo");
const ano = document.querySelector("#ano");
const duracao = document.querySelector("#duracao");
const genero = document.querySelector("#genero");
const diretor = document.querySelector("#diretor");
const atores = document.querySelector("#atores");
const poster = document.querySelector(".poster");
const sinopse = document.querySelector("#sinopse");
const apiKey = "c4f07ff4";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}

botaoBuscar.addEventListener("click", () => {
     limparCampos();
     console.log("Buscando filme...");
     core();
});

async function core(){
     const filme = await buscaFilme(nomeBusca.value);
     definirValores(filme);
}

function definirValores(filme){
     titulo.textContent = filme.Title;
     sinopse.textContent = filme.Plot;
     ano.textContent = `Year: ${filme.Year}`;
     duracao.textContent = `Run time: ${filme.Runtime}`;
     genero.textContent = `Genre: ${filme.Genre}`;
     atores.textContent = `Actors: ${filme.Actors}`;
     diretor.textContent = `Director: ${filme.Director}`;
     poster.setAttribute("src", filme.Poster);
}

function limparCampos(){
     titulo.textContent = "";
     sinopse.textContent = "";
     ano.textContent = "";
     duracao.textContent = "";
     genero.textContent = "";
     atores.textContent = "";
     diretor.textContent = "";
     poster.setAttribute("src", imgDefault);
}