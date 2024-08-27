// src/data/actividadesData.js

const actividadesData = [
    {
        idactividad: generateRandomId(),
        nombre: "Anda",
        duracion: "30 minutos",
        tipo: "Recreativa",
        inventario: "Zapatillas, ropa cómoda",
        descripcion: "Una actividad de movimiento libre que incentiva a los participantes a caminar por diferentes áreas designadas, explorando su entorno y manteniéndose activos."
    },
    {
        idactividad: generateRandomId(),
        nombre: "Escondido",
        duracion: "45 minutos",
        tipo: "Recreativa",
        inventario: "Espacios amplios con escondites",
        descripcion: "Un juego clásico donde los participantes se turnan para esconderse mientras uno de ellos cuenta y luego intenta encontrar a los demás. Ideal para mejorar la agilidad y el pensamiento estratégico."
    },
    {
        idactividad: generateRandomId(),
        nombre: "Oración al Espíritu Santo",
        duracion: "20 minutos",
        tipo: "Oración",
        inventario: "Velas, música suave",
        descripcion: "Un momento de oración y meditación dedicado al Espíritu Santo. Se sugiere utilizar velas y música tranquila para crear un ambiente adecuado para la reflexión y la conexión espiritual."
    },
    {
        idactividad: generateRandomId(),
        nombre: "Taller de Pintura",
        duracion: "2 horas",
        tipo: "Creativa",
        inventario: "Lienzos, pinturas, pinceles",
        descripcion: "Un taller práctico donde los participantes pueden explorar su creatividad a través de la pintura. Se proporcionan todos los materiales necesarios y se alienta a experimentar con diferentes técnicas y estilos."
    }
];

export default actividadesData;

function generateRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
