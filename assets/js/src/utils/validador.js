import { Normalizer } from "./normalizer.js"


export class Validator {
    static valor(valor, regex, error) {

        if (!regex.test(valor)) {
            throw new Error(error || 'Valor inválido')
        }

        return Normalizer.valor(valor)
    }
}