/* 2 variables para las secciones */
const inicio = document.querySelector("#inicio");

const comofunciona = document.querySelector("#comofunciona");

const prestamos = document.querySelector("#prestamos");

const comunidad = document.querySelector("#comunidad");

const planesdepago = document.querySelector("#planesdepago");

const recomendaciones = document.querySelector("#recomendaciones");

/* menu inicio */
inicio.addEventListener("click", (i) => {
    i.preventDefault();

    const sectionI = document.querySelector(".inicio");

    sectionI.scrollIntoView({behavior: "smooth"});

})

/* menu comofunciona */
comofunciona.addEventListener("click", (c) => {
    c.preventDefault();

    const sectionC = document.querySelector(".comofunciona");

    sectionC.scrollIntoView({behavior: "smooth"});

})

/* menu prestamos */
prestamos.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".prestamos");

    sectionP.scrollIntoView({behavior: "smooth"});

})

/* menu comunidad */
comunidad.addEventListener("click", (co) => {
    co.preventDefault();

    const sectionCO = document.querySelector(".comunidad");

    sectionCO.scrollIntoView({behavior: "smooth"});

})

/* menu planesdepago */
planesdepago.addEventListener("click", (pl) => {
    pl.preventDefault();

    const sectionPL = document.querySelector(".planesdepago");

    sectionPL.scrollIntoView({behavior: "smooth"});

})

/* menu recomendaciones */
recomendaciones.addEventListener("click", (r) => {
    r.preventDefault();

    const sectionR = document.querySelector(".recomendaciones");

    sectionR.scrollIntoView({behavior: "smooth"});

})