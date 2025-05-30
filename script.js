function mostrarProductos(categoria, reset = false) {
  if (reset || categoria !== categoriaActual) {
    contenedor.innerHTML = "";
    productosMostrados = 0;
    categoriaActual = categoria;
  }

  const lista = productos[categoria];
  const total = lista.length;
  const limite = Math.min(productosMostrados + productosPorPagina, total);

  for (let i = productosMostrados; i < limite; i++) {
    const prod = lista[i];
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100 bg-secondary text-white">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.titulo}">
        <div class="card-body">
          <h5 class="card-title">${prod.titulo}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">${prod.precio}</span>
            <button class="btn btn-sm btn-warning" onclick='agregarAlCarrito(${JSON.stringify(prod)})'>
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  }

  productosMostrados = limite;
  btnCargar.style.display = productosMostrados < lista.length ? "block" : "none";
}
<span>${producto.precio} ${producto.boton || ''}</span>

function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const metodoPago = document.getElementById("metodoPago").value;

  if (!nombre || !direccion || !metodoPago || carrito.length === 0) {
    alert("Por favor completa todos los campos y agrega productos al carrito.");
    return;
  }

  let mensaje = `📦 *Nuevo Pedido - Pollos Nycol*%0A`;
  mensaje += `👤 Nombre: ${nombre}%0A`;
  mensaje += `📍 Dirección: ${direccion}%0A`;
  mensaje += `💳 Pago: ${metodoPago}%0A`;
  mensaje += `🛒 Pedido:%0A`;

  let total = 0;
  carrito.forEach((item, i) => {
    mensaje += `- ${item.nombre}: Bs ${item.precio.toFixed(2)}%0A`;
    total += item.precio;
  });

  mensaje += `💰 Total: Bs ${total.toFixed(2)}%0A`;

  // Número de WhatsApp (código país + número sin espacios ni símbolos)
  const numeroWhatsApp = "59163066792"; // ← Cambia este número por el tuyo

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  window.open(url, '_blank');

  carrito = [];
  actualizarCarrito();
  formulario.style.display = 'none';
}
