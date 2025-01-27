export const searchFilters = () => {
    const $inputSearch = document.querySelector(".card-filter");
    const $cards = document.querySelectorAll(".card");
    
    $inputSearch.addEventListener("input", () => {
      const searchText = $inputSearch.value.toLowerCase();
    
      $cards.forEach((card) => {
        const $cardText = card.querySelector("figcaption").textContent.toLowerCase();

        if ($cardText.includes(searchText)){
            card.classList.remove("filter")
        }else{
            card.classList.add("filter")
        }
      });
    });
    
}