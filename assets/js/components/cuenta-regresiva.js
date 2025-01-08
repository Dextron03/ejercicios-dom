export const countdown = (limit, message) => {
    const $countdown = document.getElementById("countdown"),
        countdownLimit = new Date(limit).getTime();

    document.addEventListener("DOMContentLoaded", () => {
        let countdownTimer = setInterval(() => {
            let now = new Date().getTime(),
                limitTime = countdownLimit - now,
                dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
                horas = Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutos = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
                segundos = Math.floor((limitTime % (1000 * 60)) / 1000);

            if (limitTime <= 0) {
                $countdown.innerHTML = `<h3>${message}</h3>`;
                clearInterval(countdownTimer);
            } else {
                $countdown.innerHTML = `
                    <h3>
                        ${dias}d 
                        ${horas}h 
                        ${minutos.toString().padStart(2, "0")}m 
                        ${segundos.toString().padStart(2, "0")}s
                    </h3>`;
            }
        }, 1000);
    });
};
