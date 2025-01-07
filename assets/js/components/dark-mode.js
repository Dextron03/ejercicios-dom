export const activarDarkMode = () => {
    const $dataList = document.querySelectorAll("[data-dark]"),
    $darkModeBtn = document.querySelector("#dark-theme-btn i");

    document.addEventListener("click", e=>{
        if(e.target.matches("#dark-theme-btn")){
            $dataList.forEach(item=>{
                (item.className.includes("stage"))?item.classList.toggle("stage-dark"):item.classList.toggle("dark-mode");
            });

            if(document.querySelectorAll(".dark-mode").length >= 1){
                $darkModeBtn.classList.remove(["bi"], ["bi-moon-stars-fill"]);
                $darkModeBtn.classList.add(["bi"], ["bi-brightness-high-fill"]);
            }else{
                $darkModeBtn.classList.add(["bi"], ["bi-moon-stars-fill"]);
                $darkModeBtn.classList.remove(["bi"], ["bi-brightness-high-fill"]);
            }  
        }
    });
}