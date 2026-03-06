/*
Admin: 
    id: UUID
    usuario: string
    password: string
    rol: "admin"
*/

import { REGEX_NAME } from "../utils/constants.js"
import { Validator } from "../utils/validador.js"

export class Admin {
    #id
    #usuario
    #password
    #rol = "admin"

    constructor(usuario, password) {
        this.#id = crypto.randomUUID()
        this.#usuario = Validator.valor(usuario, REGEX_NAME, 'Campo usuario inválido')
        this.#password = password
    }

    get id() {
        return `${this.#id}`
    }

    get usuario() {
        return `${this.#usuario}`
    }

    get password() {
        return `${this.#password}`
    }

    get rol() {
        return this.#rol
    }

    setPassword(newPassword) {
        this.#password = newPassword
    }

    verificarCredenciales(usuario, password) {
        return this.#usuario === usuario && this.#password === password
    }

    getInfo() {
        return {
            id: this.#id,
            usuario: this.#usuario,
            rol: this.#rol
        }
    }
}
