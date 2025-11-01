function CarritoDeCompras() {
  const [productos, setProductos] = React.useState([
    { id: 1, nombre: "Tour Huacachina", precio: 50 },
    { id: 2, nombre: "Tour Paracas", precio: 80 },
    { id: 3, nombre: "Tour Islas Ballestas", precio: 100 },
  ]);

  const [carrito, setCarrito] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* 🛒 Encabezado */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🛍️ Carrito de Compras
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Aquí puedes revisar y gestionar los paquetes turísticos que agregaste.
            </p>
          </div>

          {/* 🧳 Lista de productos */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  S/ {producto.precio}.00
                </p>
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>

          {/* 🛒 Carrito de compras */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🛒 Tu Carrito
            </h3>

            {carrito.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                No hay productos en tu carrito.
              </p>
            ) : (
              <ul className="space-y-4">
                {carrito.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <span className="text-gray-800 dark:text-white">
                      {item.nombre}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 dark:text-gray-300">
                        S/ {item.precio}
                      </span>
                      <button
                        onClick={() => eliminarDelCarrito(index)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Eliminar"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Total */}
            <div className="mt-6 flex justify-between font-semibold text-gray-800 dark:text-white">
              <span>Total:</span>
              <span>S/ {total}.00</span>
            </div>

            {/* Botón de pagar */}
            {carrito.length > 0 && (
              <button
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors shadow-md"
                onClick={() => alert("¡Compra realizada con éxito! 🎉")}
              >
                Finalizar compra
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<CarritoDeCompras />, document.getElementById("carrito-content"));
