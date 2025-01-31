
export const scrollSpy = () => {
    const $sections = document.querySelectorAll("section[data-scroll-spy]")


    const callback = (entries) => {
        entries.forEach((entry)=>{
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            }else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")

            }
        })
    }

    const observer = new IntersectionObserver(callback,{
        //root: toma por defecto el objeto document
        //rootMargin:"-250px"
        threshold:0.5 // Es practicamente lo mismo que rootMargin, solo que va por porcentajes. Si lo pasas un array de porcentajes puedes manejar en el momento que se vera
    });

    $sections.forEach((section)=>observer.observe(section));

}