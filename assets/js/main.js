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

const edades = alumnos.reduce((acumulador, edadesAlumnos) => {

    const { edad } = edadesAlumnos
    return acumulador + edad

}, 0)

console.log("3- ", edades);

/*----------- Ejercicio 4 -----------*/

/*const mica = alumnos.find(nombreMica => {
    
    return nombreMica.nombre === 'Micaela Orfali'

})

console.log("4- ", mica.edad);*/

/*----------- Ejercicio 5 -----------*/

const [sofi] = alumnos
const sofia = sofi.nombre

console.log("5.a - ", sofi);
console.log("5.b - ", sofia);

/*----------- Ejercicio 6 -----------*/

const primeraLetra = alumnos.filter(alumnoLetra => {

    const { nombre } = alumnoLetra
    return nombre.charAt(0) === 'L'

})

console.log("6- ", primeraLetra);

/*----------- Ejercicio 7 -----------*/

const extras = alumnos.map(extraAlumno => {

    extraAlumno.artista = artistas[alumnos.indexOf(extraAlumno)]
    return extraAlumno;

})

const alumnosConPropiedad = alumnos.map((alumno) => {

    return { ...alumno, dni: '2222' }

})

/*const extras = alumnos.map(extraAlumno => {

    extraAlumno.carrera = "Multimedia"
    return extraAlumno;

})*/

console.log('7- ', extras)
console.log('7- ', alumnosConPropiedad)

/*----------- Ejercicio 8 -----------*/

console.log("8- El promedio de edad es: ", edades / alumnos.length);

/*----------- Ejercicio 10 (12) -----------*/

const getDataWithPromises = id => {

    const json = response => response.json()

    fetch('https://rickandmortyapi.com/api/character/' + id)
        .then(status)
        .then(json)
        .then(data => {

            console.log('Request succeeded with JSON response', data)

        })
}

console.log(getDataWithPromises(2))

/*----------- Ejercicio 11 (12) -----------*/
const getDataWithAsync = idem => {
    const getId = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/' + idem)
            const character = await response.json()
            return character
        } catch (error) {

        }
    }

    const mainLogic = async () => {
        const character = await getId()
        console.log(character)
        document.querySelector("#content").innerHTML = "<p>" + character.name + "</p>"
    }
    mainLogic()

    

}

console.log(getDataWithAsync(4))
