const alumnos = [
    { nombre: 'Sofia Bonavena', edad: 23 },
    { nombre: 'Micaela Fernandez', edad: 22 },
    { nombre: 'Giuliano Giovanola', edad: 20 },
    { nombre: 'Lautaro Hudson', edad: 19 },
    { nombre: 'Alejandro Nieco', edad: 22 },
    { nombre: 'Micaela Orfali', edad: 24 },
    { nombre: 'Pedro Balza', edad: 26 },
    { nombre: 'Leandro Amaro', edad: 35 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
]

const artistas = ['Taylor Swift', 'No sé', 'Damas Gratis', 'L-Gante', 'Muse', 'Ariana Grande', 'Miles Davis', 'Daft Punk', 'Ni idea', 'Leon Gieco']


/*----------- Ejercicio 1 -----------*/

const nombres = alumnos.map(nombreAlumno => {

    return nombreAlumno.nombre

})

console.log("1- Los nombres son:", nombres);

/*----------- Ejercicio 2 -----------*/

const edadFilter = alumnos.filter(edadAlumno => {

    return edadAlumno.edad > 25

})

console.log("2- Los mayores de 25 son:", edadFilter);

/*----------- Ejercicio 3 -----------*/

const edades = alumnos.map(edadesAlumnos => {

    return edadesAlumnos.edad

})

const edadesTotal = edades.reduce((a, b) => a + b)

console.log("3- ", edadesTotal);

/*----------- Ejercicio 4 -----------*/

const mica = alumnos.find(nombreMica => {

    return nombreMica.nombre === 'Micaela Orfali'

})

console.log("4- ", mica.edad);

/*----------- Ejercicio 5 -----------*/

const [sofi] = alumnos

console.log("5.a - ", sofi);
console.log("5.b - ", sofi.nombre);

/*----------- Ejercicio 6 -----------*/

const primeraLetra = alumnos.filter(alumnoLetra => {

    return alumnoLetra.nombre[0] === 'L'

})

console.log("6- ", primeraLetra);

/*----------- Ejercicio 7 -----------*/

const extras = alumnos.map(extraAlumno => {

    extraAlumno.artista = artistas[alumnos.indexOf(extraAlumno)]
    return extraAlumno;

})

console.log('7- ', extras)

/*----------- Ejercicio 8 -----------*/

console.log("8- El promedio de edad es: ", edadesTotal / alumnos.length);
