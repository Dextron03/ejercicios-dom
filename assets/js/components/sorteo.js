export const draw = () => {
    const $listlLanguages = document.querySelectorAll(".player");

    document.addEventListener("click", e => {
        if(e.target.matches("#winner-btn")){
            const winningIndex = Math.floor(Math.random()*($listlLanguages.length+1)),
                winner = $listlLanguages[winningIndex];

            alert(`EL ganador es ${winner.textContent}.`)
            console.log(`EL ganador es ${winner.textContent}.`);
        }
    })
}