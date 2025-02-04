export const contactFormValidations = () => {
    const $inputs = document.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input)=>{
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    document.addEventListener("input", e => {
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
    
            if(pattern && $input.value !== ""){
                let reg = new RegExp(pattern);

                return !reg.exec($input.value) ?
                    document.getElementById($input.name).classList.add("is-active") :
                    document.getElementById($input.name).classList.remove("is-active");
            }
    
            if(!pattern){
                return $input.value === "" ?
                    document.getElementById($input.name).classList.add("is-active") :
                    document.getElementById($input.name).classList.remove("is-active");
            }
        }

    })
    
}