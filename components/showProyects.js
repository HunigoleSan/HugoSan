import { dataProyects } from "./dataProyects.js";
import { iconTecnologies } from "./iconTecnologies.js";
import { cardProyect } from "./cardProyect.js";
import { cardSelectModal } from "./cardSelectModal.js";

function renderTecnologiesProyect(proyectTecnologies) {
    let iconSvgTecnologies = ``
    for (const keys in proyectTecnologies) {
        if (iconTecnologies[keys]) {
            iconSvgTecnologies += `<span class="flex align-center g-5px w-medium relative icon-animation-hover">`
            iconSvgTecnologies += iconTecnologies[keys].icon
            iconSvgTecnologies += `<span class=''>`
            iconSvgTecnologies += textColorForNameIcons(iconTecnologies[keys].name_)
            iconSvgTecnologies += `</span>`
            iconSvgTecnologies += `</span>`
        }
    }
    return iconSvgTecnologies;
}

function textColorForNameIcons(icon){
    if(icon === "HTML5"){
        return `<span class='text-orange'>${icon}</span>`
    }else if(icon === "CSS3"){
        return `<span class='text-blue'>${icon}</span>`
    }else if(icon === "JavaScript"){
        return `<span class='text-yellow'>${icon}</span>`
    }else if(icon === "Figma"){
        return `<span class='text-purple'>${icon}</span>`
    }else if(icon ==="GitHub"){
        return `<span class='text-grey'>${icon}</span>`
    }else if(icon ==="PHP"){
        return `<span class='text-blue-strong'>${icon}</span>`
    }else{
        return ""
    }
}

function getProyectByFilter(filterCategory) {
    let cardProyects_HTML = document.getElementById("cardProyects")
    if (filterCategory) {
        if (Object.keys(dataProyects[filterCategory]).length > 0) {
            let proyects = dataProyects[filterCategory]
            for (const key in proyects) {
                let titleProyect = proyects[key].title,
                    proyectTecnologies = proyects[key].tecnologies,
                    tecnologiesFound =  renderTecnologiesProyect(proyectTecnologies)
                let data = {
                    id: proyects[key].id,
                    title: titleProyect,
                    name_: proyects[key].name_,
                    filter: filterCategory,
                    img_presentation: proyects[key].img_presentation,
                    icons: tecnologiesFound,
                    link_web: proyects[key].link_web,
                    link_code: proyects[key].link_code
                }
                let cardProyectRender = cardProyect(data)
                cardProyects_HTML.insertAdjacentHTML("afterbegin", cardProyectRender)
            }
        } else {
            console.log("Proximamente...")
        }
    } else {
        console.log("No existe la categoria")
    }
}

function findByIdCardDesign(id){
    let cardProyects_HTML = document.getElementById("cardProyects")
    let cardSelect = dataProyects["design"][id]
    let html = cardSelectModal(cardSelect)
    let existModal = cardProyects_HTML.querySelector(".proyecto-modal") ?? false
    if(!existModal){
        cardProyects_HTML.insertAdjacentHTML("afterbegin",html)
    }
    let closeCardDesign = document.querySelector(".close-card-design") ?? false
    if(closeCardDesign){
        let proyectoModal = document.querySelector(".proyecto-modal")
        closeCardDesign.addEventListener("click",()=>{
            proyectoModal.remove()
        })
    }
    
    console.log(closeCardDesign)
}

function callCardDesign(){
    let cardDesign_HTML = document.querySelectorAll(".design")
    cardDesign_HTML.forEach((card)=>{
        card.addEventListener("click",()=>{
            
            findByIdCardDesign(card.id)
        })
    })
}


window.addEventListener("DOMContentLoaded", function () {
    let cardProyects_HTML = document.getElementById("cardProyects")
    let tabs_HTML = document.querySelectorAll(".tab")
    tabs_HTML.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            let filterCategory = e.target.getAttribute("aria-controls") ?? false;
            cardProyects_HTML.innerHTML = ""
            getProyectByFilter(filterCategory)
            callCardDesign()
        })
    })
})
getProyectByFilter("frontend")
