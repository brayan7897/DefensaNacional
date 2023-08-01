const links = [
        "http://www.elperuano.pe/noticia/218757-presidenta-boluarte-destaca-rol-de-la-fap-en-la-defensa-nacional-apoyo-social-y-emergencias",
"https://comunicaciones.congreso.gob.pe/noticias/se-publicaron-18-normas-legales-procesadas-por-la-comision-de-defensa-nacional/",
"https://rpp.pe/politica/congreso/comision-de-defensa-vera-predictamen-de-allanamiento-a-norma-sobre-ascensos-de-la-policia-nacional-del-peru-noticia-1493216?ref=rpp", 
"https://www.infobae.com/opinion/2023/07/19/la-defensa-nacional-en-clave-de-desarrollo/",
"https://www.zona-militar.com/2023/07/23/efectismo-politico-elecciones-y-defensa-nacional/",
"https://www.pucara.org/post/qu%C3%A9-pueden-aportar-hoy-las-fuerzas-armadas-a-la-seguridad-interior"
];
const box = document.body.getElementsByClassName('li');
for(let i = 0;i<box.length;i++){
    box[i].onClick =  box[i].setAttribute("href",links[i]);
}