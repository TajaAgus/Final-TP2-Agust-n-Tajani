class ModelMem {
    constructor() {
        this.libros = [
        {
            codigo: 1,
            titulo: "libro 1",
            autor: "autor 1",
            estado: "disponible",
        },
        {
            codigo: 2,
            titulo: "libro 2",
            autor: "autor 2",
            estado: "disponible",
        },
        {
            codigo: 3,
            titulo: "libro 3",
            autor: "autor 3",
            estado: "disponible",
        },
        ];
    }

    saveLibro = async (libro) => {
        this.libros.push(libro);
        return libro;
    };

    dltLibro = async (codigo) => {
        const indiceLibro = this.libros.findIndex((libro) => libro.codigo === codigo);
        if (indiceLibro !== -1){
            const libroEliminado = this.libros.splice(indiceLibro, 1)[0];
            return libroEliminado;
        }
        else{
            throw new Error("Libro no encontrado");
        }
    };

    alquilarLibro = async (codigo) => {
        const libro = this.libros.find((libro) => libro.codigo === codigo);
        if (libro){
            if (libro.estado === "disponible"){
                libro.estado = "alquilado";
                return libro
            } else {
                throw new Error("Libro no disponible");
            }
            
        }else{
            throw new Error("Libro no encontrado");
        }
    };

    devolverLibro = async (codigo) => {
        const libro = this.libros.find((libro) => libro.codigo === codigo);
        if (libro){
            libro.estado = "disponible";
            return libro
        }else{
            throw new Error("Libro no encontrado");
        }
    };

    marcarNoApto = async (codigo) => {
        const libro = this.libros.find((libro) => libro.codigo === codigo);
        if (libro){
            libro.estado = "no-apto";
            return libro
        }else{
            throw new Error("Libro no encontrado");
        }
    };

    getLibros = async () => this.libros;
}

export default ModelMem;
