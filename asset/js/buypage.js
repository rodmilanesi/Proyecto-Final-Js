const conteoCarritoBuyPage = document.getElementById("conteoCarrito-buyPage");
const listaDeProductos = document.getElementById("product-list-buy-page");
const totalDePagoCliente = document.getElementById("total__de__pago");
const volverAComprar = document.getElementById("boton__return");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let sumaDePago = 0;

const buyPageCounter = () => {
  conteoCarritoBuyPage.style.display = "block";
  const buyPageLength = carrito.length;
  conteoCarritoBuyPage.innerText = carrito.length;
};

buyPageCounter();

const recorrerCarritoBuyPage = () => {
  let carritoBuyPage = carrito;

  let carritoContentBuyPage = document.createElement("ul");
  carritoContentBuyPage.className = "list-group mb-3 product-content";
  let totalCarritoPago = 0;
  carritoBuyPage.forEach((product) => {
    // console.log(product);
    let liProduct = document.createElement("li");
    liProduct.className =
      "list-group-item d-flex justify-content-between lh-sm";
    liProduct.innerHTML = `
      <div>
      <h6 class="my-0">${product.nombre}</h6>
      <small class="text-body-secondary precio-anclaje">Precio Lista: $${
        product.precioReferencia * product.cantidad
      }</small>
      </div>
      <span class="text-body-secondary">$ ${
        product.cantidad * product.precio
      }</span>`;
    carritoContentBuyPage.append(liProduct);
    sumaDePago = sumaDePago + product.cantidad * product.precio;
    return sumaDePago;
  });

  listaDeProductos.append(carritoContentBuyPage);
};

recorrerCarritoBuyPage();

const pagarProductos = () => {
  let pagarMonto = document.createElement("div");
  pagarMonto.className = "d-flex justify-content-between lh-sm pagar_monto";
  pagarMonto.innerHTML = `
    <span class="text-primary">CLP$ ${sumaDePago}</span>
  `;
  totalDePagoCliente.append(pagarMonto);

  let returnBottom = document.createElement("div");
  returnBottom.className = "d-flex justify-content-center lh-sm";
  returnBottom.innerHTML = `
  <div>
  <a href="./index.html"><button class = "btn btn-primary">Seguir Comprando</button></a>
  </div>
  `;
  volverAComprar.append(returnBottom);
};
pagarProductos();
