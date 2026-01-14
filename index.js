let contadorItens = 0;

// Filtro de Categorias (Simples)
function filtrar(categoria) {
  const itens = document.querySelectorAll(".item-card");
  const botoes = document.querySelectorAll(".cat-btn");

  // Remove classe 'ativo' de todos os botões e adiciona no clicado
  botoes.forEach((btn) => btn.classList.remove("ativo"));
  event.target.classList.add("ativo");

  // Mostra ou esconde itens
  itens.forEach((item) => {
    if (categoria === "todos") {
      item.style.display = "flex";
    } else {
      if (item.getAttribute("data-cat") === categoria) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    }
  });
}
