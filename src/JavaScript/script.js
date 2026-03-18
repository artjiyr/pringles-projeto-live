//MAPEAR AS COISAS Q SERÃO INTERATIVAS

const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");

const slides = document.querySelectorAll(".slide");

//contador 
let contador = 0

latasMenores.forEach(LataMenor=> {
    LataMenor.onclick = () => {
        const slideAtivo = document.querySelector(".slide.active");
        slideAtivo.classList.remove("active")

        //CONDICIONAIS IF e ELSE

        if(contador == 3){
            contador = 0
        } else {
            contador = contador + 1
        }

        
        slides[contador].classList.add("active")
        
    }
})

