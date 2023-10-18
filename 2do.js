const palette = {
    red: ["\x1b[31m", "\x1b[0m"],
    green: ["\x1b[32m", "\x1b[0m"]
}

class Console {

    static Approved(text) {
        process.stdout.write(`${palette.green[0]}${text}${palette.green[1]}\n`)
    }
    static Denied(text) {
        process.stdout.write(`${palette.red[0]}${text}${palette.red[1]}\n`)
    }
}

async function obtenerDatos(cantidad, edad, cantidadDeLetras) {
    try {
        const getData = await fetch('https://dummyjson.com/users?limit=100'); // Busco la informacion ----- ESPERO LA INFORMACION
        const parseData = await getData.json();                               // PARSEO LOS DATOS EN JSON O SE PUEDE LLAMAR TAMBIEN, TRANSFORMO EN DATOS CON LOS QUE PUEDA TRABAJAR
        const filterData = parseData.users.slice(0, cantidad).filter(item => item.age > edad);       // FILTRO LOS DATOS QUE SEAN MAYORES A 30
        if (!filterData.length)Console.Denied('No se encontro usuarios');
        else {

            const mapData = filterData.map(person => {
                return {
                    id: person.id,
                    nombre: person.firstName,
                    lastname: person.lastName,
                    age: person.age,
                    gender: person.gender,
                }
            })
            const sortData = []
            mapData.forEach(item => {
                if (item.nombre.length > cantidadDeLetras) {
                    sortData.push(item);
                }
            })

            for (let i = 0; i < sortData.length; i++) {
                console.log(sortData[i])
            }
        }
    }
    catch (error) {
        console.error(error)
    }
}
obtenerDatos(10, 15, 4);