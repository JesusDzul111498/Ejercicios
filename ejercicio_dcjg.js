let cadena_texto = 
`INICIO -------
JavaScript (abreviado comunmente JS) 
es un lenguaje de programacion interpretado, 
dialecto del estandar ECMAScript. 
Se define como orientado a objetos,
3​ basado en prototipos, imperativo, debilmente tipado y dinamico.
JavaScript se diseño con una "sintaxis similar a C", 
aunque adopta nombres y convenciones del lenguaje de programación Java.
Sin embargo, Java y "JavaScript" tienen semanticas y propsitos diferentes.
Visitenos: https://es.wikipedia.org/wiki/JavaScript

McDONALDS EN LAS REDES
"McDonalds" es una cadena de restaurantes de comida rapida estadounidense.
McDonalds sus principales productos son las "hamburguesas", 
McDonalds las papas fritas, los menus para el desayuno, los refrescos,
McDonaldslos batidos, "los helados", los postres y, recientemente,
las ensaladas de fruta y otros productos exclusivos para diversos paises.
Sorte : 555 676 5879 o al correo mcdonal@gmail.com o macdona.10@hotmail.com
visitenos en nuestra pagina: https://es.wikipedia.org/wiki/McDonald%27s
Ips
IPS, 192.168.4.3 sigla de Indianapolis Public Schools que se traduce como Escuelas Publicas de Indianapolis.
IPS Universitaria, "Institucion Prestadora de Servicios de Salud" de 192.168.0.2
la Universidad de Antioquia, sede principal en la ciudad de Medellin, Colombia 192.168.2.4
Nuesto establecimiento : 40 194, San Carlos, 97780 Valladolid, Yuc.
Numero de telefono: 9851457894

La mayoria de los libros empiezan con estos 
contenidos basicos, y es expandido por una serie de rezos y
devociones. Se leian a diversas horas del dia: la aurora (laudes), 07:00:22 (prima), 3 de la tarde (tercia), 
el 24:00:43 (la vispera) y la noche 00:01:34 (completa).
Puede encontrarnos en : Valladolid Yucatan 54 x 43 y 45 Centro 97780
Numero telefono: 9851225079
melon, mcfly , mcdavo, mcpavo mciclopedia  permro
Correo:  jesus.dzul@itsva.edu.mx
Final-------
`;






//Palabras  maypres a  7 letras
let palabras_7 = cadena_texto.replace(/[a-z||A-Z]{7,}/g,"*");
//console.log(palabras_7);
//No finalicen con vocal
let vocales = cadena_texto.replace(/[A-Z||a-z]{1,}[aeiou||AEIOU$]/g,"*");
console.log(vocales);
//M-No-vocal
let novocal = cadena_texto.replace(/\b[M||m][^aeiou][a-z-A-Z]{1,}/g," ");
console.log(novocal);
//Comillas ""
let comillas = cadena_texto.replace(/[""][a-z-A-Z]{1,}"/g,"");
console.log(comillas);
//ip´s
let ip= cadena_texto.replace(/[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/g,"");
console.log(ip);
//Horas
let horass = cadena_texto.replace(/[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/g,"");
console.log(horass);
//Telenofonos
let Telenofonos = cadena_texto.replace(/[0-9]{10}/g,"");
console.log(Telenofonos);
//Correos

let correos = cadena_texto.replace(/[A-Za-z]+@[a-z]+\.[a-z]+/g,"*");
console.log(correos);
//Urls
let url = cadena_texto.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-])\/?/g, "*");
console.log(url)
//Codigo postal
let codigo_postal = cadena_texto.replace(/[0-9]{5}/g, "*");
console.log(codigo_postal);
/*console.log(Experesion);
console.log("\n"+cadena_texto);*/
/*
var historia = "Para someter situado fuer de los limites de bayonetazo";
var ex = /[a-z-A-Z]+[aeiou$]\b/gm;
res = historia.match(ex);
console.log(res);*/