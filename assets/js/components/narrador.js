export const narratePhrase = () => {
    const $textarea = document.getElementById("speech-text"),
        $fragOptions = document.createDocumentFragment(),
        $select = document.getElementById("speech-select"),
        $btn = document.getElementById("speech-btn");

    const loadVoices = () => {
        const listaVoces = speechSynthesis.getVoices();
        

        listaVoces.forEach(voice => {
            const $option = document.createElement("option");
            $option.value = voice.name;
            $option.textContent = `${voice.name} (${voice.lang})`;
            $fragOptions.appendChild($option);
        });

        $select.appendChild($fragOptions);
    };

    speechSynthesis.onvoiceschanged = loadVoices;

    $btn.addEventListener("click", () => {
        if (!$textarea.value.trim()) return; // Evitar que hable sin texto

        const narrator = new SpeechSynthesisUtterance($textarea.value);
        const listaVoces = speechSynthesis.getVoices();
        const selectedVoice = listaVoces.find(voice => voice.name === $select.value);

        if (selectedVoice) {
            narrator.voice = selectedVoice;
        }

        speechSynthesis.speak(narrator);
    });
};
