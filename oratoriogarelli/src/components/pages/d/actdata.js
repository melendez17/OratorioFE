// src/data/actividadesData.js

const actividadesData = [
    {
        idactividad: generateRandomId(),
        nombre: "Anda",
        duracion: "30 minutos",
        tipo: "",
        inventario: "",
        descripcion: ""
    },
    {
        idactividad: generateRandomId(),
        nombre: "Escondido",
        duracion: "45 minutos",
        tipo: "",
        inventario: "",
        descripcion: ""
    },
    {
        idactividad: generateRandomId(),
        nombre: "Oración al Espíritu Santo",
        duracion: "20 minutos",
        tipo: "",
        inventario: "",
        descripcion: ""
    },
    {
        idactividad: generateRandomId(),
        nombre: "Taller de Pintura",
        duracion: "2 horas",
        tipo: "",
        inventario: "",
        descripcion: ""
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
