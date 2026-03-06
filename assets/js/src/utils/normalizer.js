

export class Normalizer {

    static valor(valor) {
        return valor
            .toLowerCase()
            .trim()
            .split(' ')
            .map(letra => letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase())
            .join(' ')
    }

    static lowerCase(texto) {
        return texto.toLowerCase().trim()
    }
}