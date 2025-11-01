function Header() {
    return (
      <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
  
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            JyV tours
          </h1>
  
          {/* Íconos con links */}
          <div className="flex items-center space-x-6 text-white text-xl">
            {/* 🔍 Buscador */}
            <a
              href="busqueda.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Buscar"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
  
            {/* 🎧 Soporte */}
            <a
              href="atención.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Soporte"
            >
              <i className="fa-solid fa-headset"></i>
            </a>
  
            {/* 🛒 Carrito de compras */}
<a
  href="carrito.html"
  className="relative hover:text-blue-400 transition-colors duration-200"
  title="Carrito de compras"
>
  <i className="fa-solid fa-cart-shopping"></i>
  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
    3
  </span>
</a>
  
            {/* 👤 Usuario */}
            <a
              href="contacto.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Perfil"
            >
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
  
  ReactDOM.render(<Header />, document.getElementById("header"));
  
