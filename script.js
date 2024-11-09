// Obtener el título y la descripción
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');

// Crear un array con las frases que quieres mostrar
const frases = [
    { titulo: "Energía limpia", descripcion: "Transforma la luz solar en energía para todos." },
    { titulo: "Cargando el futuro", descripcion: "¡Únete a la revolución solar!" },
    { titulo: "Sostenibilidad", descripcion: "Tecnología que protege el planeta." },
    { titulo: "Innovación ecológica", descripcion: "Soluciones tecnológicas para un futuro más verde." },
    { titulo: "Energía solar al alcance", descripcion: "¡Potencia tus dispositivos con la luz del sol!" }
];

// Índice para saber qué frase mostrar
let index = 0;

// Función para cambiar la frase cada 5 segundos
function cambiarFrase() {
    // Cambiar el texto del título y la descripción
    titulo.textContent = frases[index].titulo;
    descripcion.textContent = frases[index].descripcion;

    // Incrementar el índice para mostrar la siguiente frase
    index++;

    // Si llegamos al final del array, volver al inicio
    if (index >= frases.length) {
        index = 0;
    }
}

// Llamar a la función de cambiar frase cada 5 segundos (5000 milisegundos)
setInterval(cambiarFrase, 5000);

// Llamar a la función de inmediato para mostrar la primera frase al cargar
cambiarFrase();
