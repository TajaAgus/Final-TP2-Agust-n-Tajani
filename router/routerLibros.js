import express from 'express'
import Controller from '../controller/libros.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start() {
        this.router.get('/', this.controller.getLibros)
        this.router.post('/alta', this.controller.saveLibro)
        this.router.delete('/baja', this.controller.dltLibro)
        this.router.put('/alquilar', this.controller.alquilarLibro)
        this.router.put('/devolver', this.controller.devolverLibro)
        this.router.put('/no-apto', this.controller.marcarNoApto)
        return this.router
    }
}

export default Router