 gsap.registerPlugin(SplitText)

//MAPEAR AS COISAS Q SERÃO INTERATIVAS
const latasMenores = document.querySelectorAll(".latas img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

//contador 
let contador = 0

let clicar = true //TRUE -> PODE CLICAR //FALSE -> NÃO PODE CLICAR

latasMenores.forEach((LataMenor) => {
    LataMenor.onclick = () => {
        

        if(clicar){
            clicar = false
            const slideAtivo = document.querySelector(".slide.active");
            slideAtivo.classList.remove("active");

            //CONDICIONAIS IF e ELSE

            if(contador == 3){
                contador = 0;
            } else {
                contador = contador + 1;
            }

            slides[contador].classList.add("active")
            animarTitulo();

            setTimeout(()=>{
                clicar = true
            }, 1000)
        }

        
        
    };
});

function animarTitulo(){
    const split = SplitText.create(".slide.active h2", {
        type: "chars",
        mask: "chars"
    });

    gsap.from(split.chars, {
        y: 100,
        stagger: .05,
        duration: .5,
        delay:.5,
        opacity: 0
    });
}
