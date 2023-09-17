let rey = {
    nombre: "Garen",
    apellido: "Crownguard",
}

let personas = [
    { 
        nombre: "Garen" ,  
        apellido: "Crownguard" ,
        edad: 30 ,
        salud: "Buena" ,
        antecedentes: false ,
    },

    { 
        nombre: "Fiora" ,  
        apellido: "Laurent" ,
        edad: 23 ,
        salud: "Buena" ,
        antecedentes: false ,
    },

    { 
        nombre: "Janna" ,  
        apellido: "Windforce" ,
        edad: 19 ,
        salud: "Buena" ,
        antecedentes: false ,
    },

    { 
        nombre: "Luxanna" ,  
        apellido: "Crownguard" ,
        edad: 29 ,
        salud: "Buena" ,
        antecedentes: false ,
    },
]



const data = (data) => {
    let count = 0
    data.forEach((a) => {
        if (a.apellido !== rey.apellido && !a.antecedentes && a.salud == 'Buena' && a.edad >= 18 && a.edad < 35) {
            count += 1
            console.log(a.nombre, 'es apto ✅')
        }
        else console.log(`${ a.nombre } ${ a.apellido } no es apto.🛑`)
    });
    console.log ("Sólo: " + count + " es aptx")
    return true;
};

data(personas)