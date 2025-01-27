export const deteccionDeDispositivo = () => {
    const $fragmento = document.createDocumentFragment(),
        $ul = document.createElement("ul"),
        $moreInfo = document.createElement("div"),
        $div = document.getElementById("user-device");

    const userAgent = navigator.userAgent;

    const isMobile = {
        android: () => userAgent.match(/android/i),
        ios: () => userAgent.match(/iphone|ipad|ipod/i),
        windows: () => userAgent.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        },
    };

    const isDesktop = {
        linux: () => userAgent.match(/linux/i),
        mac: () => userAgent.match(/mac os/i),
        windows: () => userAgent.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        },
    };

    const isBrowser = {
        chrome: () => userAgent.match(/chrome/i),
        safari: () => userAgent.match(/safari/i),
        firefox: () => userAgent.match(/firefox/i),
        opera: () => userAgent.match(/opera|opera mini/i),
        ie: () => userAgent.match(/msie|iemobile/i),
        edge: () => userAgent.match(/edge/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                "Unknown Browser"
            );
        },
    };

    const contentFrag = {
        contUserAgent: userAgent,
        platform: isMobile.any()
            ? (isMobile.ios() ? "iOS" : isMobile.android() ? "Android" : "Windows Phone")
            : isDesktop.any()
            ? (isDesktop.mac() ? "MacOS" : isDesktop.linux() ? "Linux" : "Windows")
            : "Unknown",
        navegador: isBrowser.any(),
    };

    for (const key in contentFrag) {
        const element = contentFrag[key],
            $li = document.createElement("li");

        if (key === "contUserAgent") $li.innerHTML = `<strong>${element}</strong>`;
        if (key === "platform") $li.innerHTML = `Plataforma: <strong>${element}</strong>`;
        if (key === "navegador") $li.innerHTML = `Navegador: <strong>${element}</strong>`;

        $ul.appendChild($li);
    }

    $fragmento.appendChild($ul);

    $moreInfo.innerHTML = `
        <p>Este contenido solo se puede ver en ${contentFrag.navegador}
        <br>
        Este contenido solo se puede ver en ${contentFrag.platform}</p>`;
    
    $fragmento.appendChild($moreInfo);

    $div.appendChild($fragmento);

/*     if(contentFrag.platform === "iOS") window.location.href = "https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=93"*/
};
