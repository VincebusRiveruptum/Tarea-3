export interface Noticia {
    id:number;
    idcat:number;
    titular:string;
    subtitulo:string;
    cuerpo:string;
    fecha:string;
    imagen:string;
};

export let ListaNoticias:Array<Noticia> = [
    {
        id:1,
        idcat:1,
        titular:"Informatico casi se desmaya del sueño",
        subtitulo:"Increible historia de un joven programador",
        cuerpo:"La persona que diseño este sitio no ha dormido lo suficiente :(",
        fecha:"29/10/2021",
        imagen:"../../assets/sleep1.jpg"
    },
    {
        id:2,
        idcat:4,
        titular:"Paneles Solares en el Norte de Chile",
        subtitulo:"Gobierno de Chile aprueba proyecto de construcción de paneles solares en la región de Tarapacá",
        cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        fecha:"7/5/2021",
        imagen:"../../assets/panel.jpg"
    },
    {
        id:3,
        idcat:1,
        titular:"Hombre fue baleado al interior de un hotel en Villa Alemana",
        subtitulo:"La víctima de 30 años de edad se negó a entregar información de lo ocurrido a carabineros, al igual que su compañero de pieza, quien guardó silencio.",
        cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        fecha:"28/10/2021",
        imagen:"../../assets/villa.jpg"
    },
    {
        id:4,
        idcat:3,
        titular:"Noticia",
        subtitulo:"Subtitulo",
        cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        fecha:"1/1/2021",
        imagen:"../../assets/p1.jpg"
    },
    {
        id:5,
        idcat:2,
        titular:"Noticia",
        subtitulo:"Subtitulo",
        cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        fecha:"1/1/2021",
        imagen:"../../assets/p1.jpg"
    },
    {
        id:6,
        idcat:2,
        titular:"Noticia",
        subtitulo:"Subtitulo",
        cuerpo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        fecha:"1/1/2021",
        imagen:"../../assets/p1.jpg"
    }  
  ];