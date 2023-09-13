

//desestructurar 

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:"Mañanitas",
    detalles: {
        autor:'cepillin',
        year:1978,
    }
}

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segunndos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);

const{volumen,segundo,cancion,detalles}=reproductor
const{autor,year}=detalles

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segunndos son: ${segundo}`);
console.log(`El cantante es: ${autor}`);