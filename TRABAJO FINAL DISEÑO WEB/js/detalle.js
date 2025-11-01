const MOVIES_URL = "detalle.html"; // 👈 pon la ruta correcta

// Obtener el ID desde la URL (por ejemplo detalle.html?id=3)
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

fetch(MOVIES_URL)
  .then((res) => res.json())
  .then((data) => {
    // Buscar el paquete (movie) por ID
    const movie = data.find((m) => m.id == movieId);

    if (movie) {
      // Mostrar los datos en el HTML
      document.getElementById("movie-detail").innerHTML = `
        <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <img src="${movie.image}" alt="${movie.title}" class="w-full rounded-lg mb-4">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">${movie.title}</h1>
          <p class="text-gray-700 dark:text-gray-300 mb-4">${movie.description}</p>

          <p><strong>Ubicación:</strong> ${movie.genre}</p>
          <p><strong>Duración:</strong> ${movie.duration}</p>
          <p><strong>Calificación:</strong> ${movie.rating}</p>
          <p><strong>Guía:</strong> ${movie.director}</p>

          <h2 class="text-xl font-semibold mt-4 mb-2">Integrantes del tour:</h2>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
            ${movie.cast.map((c) => `<li>${c}</li>`).join("")}
          </ul>

          <h2 class="text-xl font-semibold mt-4 mb-2">Más información:</h2>
          <p class="text-gray-600 dark:text-gray-300">${movie.synopsis}</p>

          <a href="index.html" class="inline-block mt-6 text-blue-600 hover:underline">← Volver a paquetes</a>
        </div>
      `;
    } else {
      document.getElementById("movie-detail").innerHTML = `
        <p class="text-center text-gray-600 dark:text-gray-300">No se encontró el paquete turístico.</p>
      `;
    }
  })
  .catch((error) => console.error("Error al cargar detalles:", error));
