export const videoInteligencia = () => {
    const $videos = document.querySelectorAll("video[data-smart-video]");

    const callback = (entries) => {
        entries.forEach((entry)=>{
            const $video = entry.target;
            (entry.isIntersecting) ? $video.play() : $video.pause();

            window.addEventListener("visibilitychange", e=> document.visibilityState === "visible" ? $video.play() : $video.pause());
        })
        
    }

    const observer = new IntersectionObserver(callback, {
        threshold:0.8
    });

    $videos.forEach(video => observer.observe(video));   
}