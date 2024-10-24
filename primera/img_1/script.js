document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    if (category) {
        // Aquí puedes agregar la lógica para mostrar solo las bicicletas
        // de la categoría seleccionada.
        console.log("Mostrando la categoría: " + category);
        // Ejemplo: ocultar todas las bicis y mostrar solo las de la categoría seleccionada
        document.querySelectorAll('.product-card').forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = 'block'; // Mostrar la bici de la categoría
            } else {
                card.style.display = 'none'; // Ocultar las otras
            }
        });
    }
    
  
});
