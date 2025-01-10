export const responsiveMedia = (id, mq, mobileContent, desktopContent) => {
    let breakPonit = window.matchMedia(mq);

    const reponsive = (e) => {
        if(e.matches){
            document.getElementById(id).innerHTML = desktopContent;
        }else{
            document.getElementById(id).innerHTML = mobileContent;
        }
    }

    breakPonit.addListener(reponsive)
    reponsive(breakPonit)
}