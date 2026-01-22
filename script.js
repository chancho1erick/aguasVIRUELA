let total = 0;

function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById("listaCarrito");
  const item = document.createElement("li");
  item.textContent = `${nombre} - $${precio}`;
  lista.appendChild(item);

  total += precio;
  document.getElementById("total").textContent = total;
}
