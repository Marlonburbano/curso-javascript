let accion = 'listat'

switch (accion) {
    case 'listar':
        console.log('accion de listar')
        break; // siempre va el break, sino se ejecuta el siguiente case
    case 'guardar':
        console.log('accion de guardar')
    default: // cuando no cumple nungun case 
        console.log('ninguna accion')
}