function filtrar(categoria) {
  const itens = document.querySelectorAll(".item-card");
  const botoes = document.querySelectorAll(".cat-btn");
  const titulos = document.querySelectorAll(".titulo-categoria");

  // Botão ativo
  botoes.forEach((btn) => btn.classList.remove("ativo"));
  event.target.classList.add("ativo");

  // Controle dos títulos
  titulos.forEach((titulo) => {
    if (categoria === "todos") {
      titulo.classList.remove("hidden");
    } else {
      titulo.dataset.cat === categoria
        ? titulo.classList.remove("hidden")
        : titulo.classList.add("hidden");
    }
  });

  // Controle dos itens
  itens.forEach((item) => {
    if (categoria === "todos") {
      item.style.display = "flex";
    } else {
      item.dataset.cat === categoria
        ? (item.style.display = "flex")
        : (item.style.display = "none");
    }
  });
}
