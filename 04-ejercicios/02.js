function nombreResolucion(ancho, alto) {
    if (ancho >= 1280 && ancho < 1920 && alto >= 720 && alto < 1080) {
        return 'HD'

    } else if (ancho >= 1920 && ancho < 2560 && alto >= 1080 && alto < 1440) {
        return 'FHD'

    } else if (ancho >= 2560 && ancho < 3840 && alto >= 1440 && alto < 2160) {
        return 'WQHD'

    } else if (ancho < 1280 && alto < 720) {
        return 'false'
    }
}
let nombre = nombreResolucion(900, 20)

console.log(nombre)