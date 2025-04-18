/* 
Desactivar funcionalidades de vectores
function imageVectorByDesignCardCode(){
    let imgVector = `
        <img class="card-vector-border-top-left absolute hidden" src="img/vector/card-product-vector-border-top-left.png" alt="Vector FBOH Card proyectos">
        <img class="card-vector-border-bottom-left absolute hidden" src="img/vector/card-product-vector-border-bottom-left.png" alt="Vector FBOH Card proyectos">
        <img class="card-vector-border-back-middle-right absolute hidden" src="img/vector/card-product-vector-back-middle-right.png" alt="Vector FBOH Card proyectos">
        <img class="card-vector-border-front-middle-right absolute hidden index-3" src="img/vector/card-producto-vector-front-middle-right.png" alt="Vector FBOH Card proyectos">
    `
    return imgVector
} */

function cardRender (data){
    let existWeb = data.link_web ?? false,
        existCode = data.link_code ?? false,
        existIcon = data.icons ?? false,
        existId = data.id ?? "",
        buttonWeb = "",
        buttonCode = "",
        buttonLinks = "",
        iconhtml = ""
    /* let imgVector = imageVectorByDesignCardCode() */
    if(existWeb){
        buttonWeb = `
            <a class="visit_web flex-justify-align-center g-5px" href="${data.link_web}">
                Web
                <svg class="bxl-dropbox-svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.004 3.5L2 6.689L7.004 9.875L12.006 6.689L7.004 3.5ZM17.009 3.5L12.006 6.689L17.009 9.875L22.012 6.689L17.009 3.5ZM2 13.062L7.004 16.249L12.006 13.062L7.004 9.875L2 13.062ZM17.009 9.875L12.006 13.062L17.009 16.249L22.012 13.062L17.009 9.875ZM7.004 17.311L12.006 20.5L17.009 17.311L12.006 14.125L7.004 17.311Z"
                        fill="white" />
                </svg>
            </a>
        `
        buttonLinks += buttonWeb
    }
    if(existCode){
        buttonCode = `
            <a class="visit_web visit_web-code flex-justify-align-center g-5px" href="${data.link_code}">
                Código
                <svg class="bxs-file-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 22C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18ZM13 4L18 9H13V4ZM7 8H10V10H7V8ZM7 12H17V14H7V12ZM7 16H17V18H7V16Z" fill="white" />
                </svg>
            </a>
        `
        buttonLinks += buttonCode
    }
    if(buttonLinks){
        buttonLinks = `
            <div class="card-links p-normal g-10px">
                ${buttonLinks}
            </div>
        `
    }


    if(existIcon){
        iconhtml = `
            <div id="tecnogolies" class="flex-wrap g-10px fz-15">
                ${data.icons}
            </div>
        `
        
    }

    let card = `
        <article id='${existId}' class='card ${data.filter} relative animation-appearance-card'>
            <div class="relative overflow-hidden index-2">
                <div class="card-img">
                    <img class="width-full" src="img/${data.img_presentation}" alt="Proyecto GitHub FBOH">
                </div>
            </div>
            <p class="fz-16 card-title w-medium">${data.name_}</p>
            ${iconhtml}
            ${buttonLinks}
            
        </article>
    `
    return card;
}



export function cardProyect(data) {
    if(data){
        return cardRender(data)
    }
}