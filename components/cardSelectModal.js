export function cardSelectModal(data){
    console.log(data)
    let {name_,img} = data
    let html = `
        <div class="proyecto-modal width-full flex-justify-center">
            <div class='proyect-layout width-full flex-justify-center'>
                <div class="proyect-layout-xl flex-direction g-normal p-normal">
                    <div class="proyectDataUser">
                        <div class='proyect-padding flex g-normal show-column-reverse align-center relative'>
                            <label class='hamburguer flex-justify-align-center-direction' for='hamburguer'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type='checkbox' hidden id='hamburguer' name='hamburguer' />
                            <div class='show-mobile flex g-normal'>
                                <div class="proyect flex-justify-align-center g-10px">
                                    <img class="proyect-perfil-user" src="img/card-perfil.png" alt="FBOH perfil hugo sanchez valencia">
                                    <p class="flex-direction proyect-data">
                                        <span class="w-semi-bold">${name_}</span>
                                        <span class="w-regular">HugoSan <span class="circle"></span></span>
                                    </p>
                                </div>
                                <!--<div class="contact flex radius flex-justify-align-center g-5px radius">
                                    <svg class="mail" width="30" height="31" viewBox="0 0 30 31" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24.8438 5.1875H5.15625C4.28629 5.18843 3.45224 5.53443 2.83708 6.14958C2.22193 6.76474 1.87593 7.59879 1.875 8.46875V22.5312C1.87593 23.4012 2.22193 24.2353 2.83708 24.8504C3.45224 25.4656 4.28629 25.8116 5.15625 25.8125H24.8438C25.7137 25.8116 26.5478 25.4656 27.1629 24.8504C27.7781 24.2353 28.1241 23.4012 28.125 22.5312V8.46875C28.1241 7.59879 27.7781 6.76474 27.1629 6.14958C26.5478 5.53443 25.7137 5.18843 24.8438 5.1875ZM24.0129 10.615L15.5754 17.1775C15.4109 17.3054 15.2084 17.3749 15 17.3749C14.7916 17.3749 14.5891 17.3054 14.4246 17.1775L5.98711 10.615C5.88798 10.5402 5.80471 10.4464 5.74215 10.339C5.67959 10.2317 5.63898 10.113 5.62269 9.98988C5.60639 9.86673 5.61473 9.74157 5.64723 9.62167C5.67972 9.50177 5.73572 9.38952 5.81197 9.29145C5.88822 9.19338 5.9832 9.11145 6.09139 9.0504C6.19959 8.98936 6.31883 8.95042 6.4422 8.93586C6.56557 8.9213 6.6906 8.93141 6.81003 8.96559C6.92946 8.99976 7.0409 9.05734 7.13789 9.13496L15 15.2498L22.8621 9.13496C23.0587 8.9865 23.3058 8.92138 23.5501 8.9537C23.7943 8.98601 24.016 9.11316 24.1672 9.30765C24.3184 9.50214 24.387 9.74833 24.3581 9.99299C24.3292 10.2376 24.2052 10.4611 24.0129 10.615Z"
                                            fill="white" />
                                    </svg>
                                    <p class="w-semi-bold">Contratar</p>
                                </div>-->
                            </div>
                            <div class="responsive flex-align-center justify-end flex-full g-normal">
                                <p>Responsive Design</p>
                                <div class="responsive-buttons flex">
                                    <button class="proyect-responsive proyect-responsive-movil" type="button">Movil</button>
                                    <button class="proyect-responsive proyect-responsive-desktop" type="button">Desktop</button>
                                </div>
                            </div>
                            <span class='close close-card-design flex-justify-align-center'>
                                <svg class="close" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0909 12.5L18.5441 8.04687C18.7554 7.8359 18.8743 7.54962 18.8745 7.25099C18.8748 6.95237 18.7564 6.66587 18.5455 6.45453C18.3345 6.24319 18.0482 6.12431 17.7496 6.12404C17.451 6.12378 17.1645 6.24215 16.9531 6.45312L12.5 10.9062L8.04687 6.45312C7.83553 6.24178 7.54888 6.12305 7.25 6.12305C6.95111 6.12305 6.66447 6.24178 6.45312 6.45312C6.24178 6.66447 6.12305 6.95111 6.12305 7.25C6.12305 7.54888 6.24178 7.83553 6.45312 8.04687L10.9062 12.5L6.45312 16.9531C6.24178 17.1645 6.12305 17.4511 6.12305 17.75C6.12305 18.0489 6.24178 18.3355 6.45312 18.5469C6.66447 18.7582 6.95111 18.8769 7.25 18.8769C7.54888 18.8769 7.83553 18.7582 8.04687 18.5469L12.5 14.0937L16.9531 18.5469C17.1645 18.7582 17.4511 18.8769 17.75 18.8769C18.0489 18.8769 18.3355 18.7582 18.5469 18.5469C18.7582 18.3355 18.8769 18.0489 18.8769 17.75C18.8769 17.4511 18.7582 17.1645 18.5469 16.9531L14.0909 12.5Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <section class="width-full">
                        <img class="width-full" src="img/figma/${img.desktop}" alt="">
                    </section>
                </div>
            </div>
        </div>
    `
    return html
}



window.addEventListener("DOMContentLoaded",function(){

})