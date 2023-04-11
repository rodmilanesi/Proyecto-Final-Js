let carritoBuyPage = [];

const buyPageCounter = () => {
  conteoCarritoBuyPage.style.display = "block";
  const buyPageLength = carrito.length;

  // localStorage.setItem(
  //   "carritoLengthBuyPage",
  //   JSON.stringify(carritoLengthBuyPage)
  // );
  conteoCarritoBuyPage.innerText = JSON.parse(
    localStorage.getItem("carritoLength")
  );
};

buyPageCounter();

console.log(carritoBuyPage);

const recorrerCarritoBuyPage = () => {
  let carritoBuyPage = JSON.parse(localStorage.getItem("carrito"));
  carritoBuyPage.forEach((product) => {
    let carritoContentBuyPage = document.createElement("ul");
    carritoContentBuyPage.className = "peoduct-content";
    carritoContentBuyPage.innerHTML = `
    <li class="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 class="my-0">${product.nombre}</h6>
        <small class="text-body-secondary precio-anclaje">Precio Lista: $${product.precioReferencia}</small>
      </div>
      <span class="text-body-secondary">$ ${product.precio}</span>
  </li>
      `;
    modalContainer.append(carritoContentBuyPage);
  });
};

recorrerCarritoBuyPage();
