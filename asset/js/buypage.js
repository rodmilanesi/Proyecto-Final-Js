const conteoCarritoBuyPage = document.getElementById("conteoCarrito-buyPage");
const listaDeProductos = document.getElementById("product-list-buy-page");
const totalDePagoCliente = document.getElementById("total__de__pago");
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

  // const sumarBuyPage = () => {
  //   const referenciaBuyPage = carrito.reduce(
  //     (acu, ele) => acu + ele.precioReferencia * ele.cantidad,
  //     0
  //   );
  //   const totalBuyPage = carrito.reduce(
  //     (accu, elem) => accu + elem.precio * elem.cantidad,
  //     0
  //   );

  //   //   const totalCarritoBuyPage = document.createElement("div");
  //   //   totalAnclaje.className = "list-group-item d-flex lg-sm total_buy_page";
  //   //   totalAnclaje.innerHTML = `
  //   //     <div>
  //   //     </div>
  //   //     <div class = "total_pago">
  //   //       <p>Total a Pagar: $ ${totalBuyPage}</p>
  //   //     </div>
  //   //     `;
  //   //   //   <div class = "comprar">
  //   //   //   <a href="./buyPage.html"><button id = "pagar">Ir a Pagar!</button></a>
  //   //   // </div>
  //   //   listaDeProductos.append(totalCarritoBuyPage);
  //   // };
  //   // sumarBuyPage();
  // };
};
// montoTotal.createElement("div");
// montoTotal.className = "list-group-item d-flex lg-sm";
// montoTotal.innerHTML = `
//   <div>
//     <h6 class="my-0"> Total a Pagar:<h6>
//     <span class="text-body-primary">$ ${total}</span>
//   </div>
//   `;
// totalDePagoCliente.append(montoTotal);

recorrerCarritoBuyPage();

const pagarProductos = () => {
  let pagarMonto = document.createElement("div");
  pagarMonto.className = "d-flex justify-content-between lh-sm pagar_monto";
  pagarMonto.innerHTML = `

    <span class="text-primary">CLP$ ${sumaDePago}</span>

   
  
  `;
  totalDePagoCliente.append(pagarMonto);
  //   <div>
  //   <a href="./index.html"><button>Seguir Comprando</button></a>
  // </div>
  console.log(sumaDePago);
};
pagarProductos();
