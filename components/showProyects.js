import { dataProyects } from "./dataProyects.js";
import { iconTecnologies } from "./iconTecnologies.js";
import { cardComponent } from "./cardProyect.js";

window.addEventListener("DOMContentLoaded",function(){
    let cardProyects_HTML = document.getElementById("cardProyects")
    let iconSvgTecnologies = ``
    for (const key in dataProyects) {
        let nameProyect = dataProyects[key].name_
        let proyectTecnologies = dataProyects[key].tecnologies
        for (const keys in proyectTecnologies) {
            if (iconTecnologies[keys]){
                iconSvgTecnologies += `<span class="flex align-center g-5px w-medium relative icon-animation-hover">` 
                iconSvgTecnologies += iconTecnologies[keys].icon
                iconSvgTecnologies += `<span class='absolute icon-animation-show'>`
                iconSvgTecnologies += iconTecnologies[keys].name_
                iconSvgTecnologies += `</span>`
                iconSvgTecnologies += `</span>`
            }
        }
        let dataCard = {
            name_: nameProyect,
            img: dataProyects[key].img,
            icons: iconSvgTecnologies,
            link_web: dataProyects[key].link_web,
            link_code: dataProyects[key].link_code
        }
        let cardProyectRender = cardComponent(dataCard)
        cardProyects_HTML.insertAdjacentHTML("afterbegin",cardProyectRender)
        iconSvgTecnologies = ``
    }
})
