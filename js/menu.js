//Selecionando a palavra "Menu"
const botaoMenu = document.querySelector(".titulo-menu a");

//Selecionando a lista de links no Menu
const listaDeLinks = document.querySelector(".links-menu");

botaoMenu.addEventListener("click", function(event){
    
    event.preventDefault();
 
    
listaDeLinks.classList.toggle("aberto");

    if(listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar &times;"
    } else {
        botaoMenu.innerHTML = "Menu &equiv;"
    }




});