window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
recognition.continuous = true
const icon = document.querySelector('i.fa.fa-microphone')
const stop = document.querySelector('i."fa fa-stop')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');

icon.addEventListener('click', () => {
    dictate();
});

stop.addEventListener('click', () => {
    endDictate();
})

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        let speechToText = event.results;
        let oLength = Object.keys(speechToText).length - 1
        let newText = speechToText[oLength][0].transcript
        let p = document.createElement('p')
        p.innerText = newText
        container.append(p)
    }
}

const endDictate = () => {
    recognition.stop();
    // recognition.onresult = (event) => {
    //     const speechToText = event.results[0][0].transcript;

    //     paragraph.textContent = speechToText;
    // }

}
