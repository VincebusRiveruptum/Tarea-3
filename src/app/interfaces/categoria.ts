export interface Categoria {
    id:number;
    nombre:string;
    color:string;
}

export let ListaCategorias:Array<Categoria> = [
    {
       id:1,
       nombre:"Mundo",
       color:"green"
    },
    {
        id:2,
        nombre:"Deportes",
        color:"yellow"
    },
    {
        id:3,
        nombre:"Ciencia",
        color:"blue"
    },
    {
        id:4,
        nombre:"Tecnología",
        color:"red"
    }
];

