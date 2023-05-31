

var corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía" ];


function determinarPosicion()
{

    console.log("Corredores:\n"+corredores.join("\n"));

    corredores.splice(0,0,"Jorge");
    corredores.splice(3,1);
    console.log("Jorge adelanta a Roberto\n" + corredores);

    corredores.splice(0,0,"Ramiro");
    corredores.splice(4,1);
    console.log("Ramiro adelanta a Jorge\n" + corredores);

    corredores.splice(2,1);
    console.log("Roberto se lesiona y sale de la carrera\n" + corredores);

    corredores.splice(2,2,"Sofía", "Andrea");
    console.log("Andrea baja una posición\n" + corredores);

    corredores.push("José");
    console.log("Ramiro mantiene su posición y José remplaza al quinto lugar\n" + corredores);
}

determinarPosicion();

console.log("Posiciónes:\n"+corredores.join("\n"));