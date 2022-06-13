// Script para generar instrucciones de
// inserción de proveedores en MySQL

const { v4: uuidv4} = require('uuid');
const fs = require('fs');

const names = [
    'Transportes', 
    'Distribuciones', 
    'Logística',
    'Repuestos',
    'Suministros',
    'Importaciones',
    'Exportaciones'
]

const surnames = [
    'García',
    'González',
    'Rodríguez',
    'Fernández',
    'López',
    'Martínez',
    'Sánchez',
    'Pérez',
    'Gómez',
    'Martin',
    'Jiménez',
    'Ruiz',
    'Hernández',
    'Diaz',
    'Moreno',
    'Muñoz',
    'Álvarez',
    'Romero',
    'Alonso',
    'Gutiérrez',
    'Navarro',
    'Torres',
    'Domínguez',
    'Vázquez',
    'Ramos',
    'Gil',
    'Ramírez',
    'Serrano',
    'Blanco',
    'Molina',
    'Morales',
    'Suarez',
    'Ortega',
    'Delgado',
    'Castro',
    'Ortiz',
    'Rubio',
    'Marín',
    'Sanz',
    'Núñez',
    'Iglesias',
    'Medina',
    'Garrido',
    'Cortes',
    'Castillo',
    'Santos',
    'Lozano',
    'Guerrero',
    'Cano',
    'Prieto',
    'Méndez',
    'Cruz',
    'Calvo',
    'Gallego',
    'Vidal',
    'León',
    'Márquez',
    'Herrera',
    'Peña',
    'Flores',
    'Cabrera',
    'Campos',
    'Vega',
    'Fuentes',
    'Carrasco',
    'Diez',
    'Caballero',
    'Reyes',
    'Nieto',
    'Aguilar',
    'Pascual',
    'Santana',
    'Herrero',
    'Lorenzo',
    'Montero',
    'Hidalgo',
    'Giménez',
    'Ibáñez',
    'Ferrer',
    'Duran',
    'Santiago',
    'Benítez',
    'Mora',
    'Vicente',
    'Vargas',
    'Arias',
    'Carmona',
    'Crespo',
    'Román',
    'Pastor',
    'Soto',
    'Sáez',
    'Velasco',
    'Moya',
    'Soler',
    'Parra',
    'Esteban',
    'Bravo',
    'Gallardo',
    'Rojas'
];

let streets = [
    'Gran Vía',
    'Av. de España',
    'Av. de la Constitución',
    'Av. de América',
    'Clara Campoamor',
    'Ramón y Cajal',
    'ACDC',
    'Las Margaritas',
    'Av. de París',
    'Av. de la Hispanidad'
]

let cities = [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Cáceres',
    'Albacete',
    'Teruel',
    'Bilbao',
    'Badajoz',
    'Soria',
    'Salamanca'
]

let queries = [];

const deleteDiacritics = text => {
    const textWithoutDiacritics = text.replace(/á/ig, 'a')
                                      .replace(/é/ig, 'e')
                                      .replace(/í/ig, 'i')
                                      .replace(/ó/ig, 'o')
                                      .replace(/ú/ig, 'u')
                                      .replace(/ü/ig, 'u');
    return textWithoutDiacritics;
}

for (i = 0; i < 200; i++) {
    const id = uuidv4().toString();
    const name = names[Math.floor(Math.random() * names.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    const cif = 'B' + (Math.random()).toString().slice(2,10);
    const address = streets[Math.floor(Math.random() * streets.length)] +
                    ', ' + Math.ceil(Math.random() * 10);
    const city = cities[Math.floor(Math.random() * cities.length)];
    const email = 'info@' + name.toLowerCase() + surname.toLowerCase() +
                  '.com';
    const phone = '+346' + (Math.random()).toString().slice(2,10);
    const query = "INSERT INTO proveedores (id, nombre, cif, direccion, localidad, email, telefono, fecha_alta)" +
                  " VALUES('" + id + "','" +
                  name + ' ' + surname + ', S.L.' + "','" +
                  cif + "','" +
                  address + "','" +
                  city + "','" +
                  deleteDiacritics(email) + "','" +
                  phone + "'" +
                  ",CURDATE());";
    queries.push(query);
}

const queriesText = queries.join('\n');

fs.writeFileSync('queries.txt',  queriesText, 'utf-8');