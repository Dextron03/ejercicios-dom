export const slider = () => {
    const $nextBtn = document.querySelector(".next"),
    $pevtBtn = document.querySelector(".prev"),
    $slides = document.querySelectorAll(".slider-slide");

    let i = 0; //Contador
    
    document.addEventListener("click", (e) => {
        if(e.target === $pevtBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            
            if(i < 0){
                i = $slides.length - 1;
            }
            $slides[i].classList.add("active");
        }

        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if(i == $slides.length){
                i = 0;
            }
            $slides[i].classList.add("active");
        }
    })
}