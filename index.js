window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
// const sound = document.querySelector('.sound');

icon.addEventListener('click', () => {
    // sound.play();
    dictate();
});

// icon.addEventListener('click', ()=> {

// })

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;

        console.log(event.results[0])

        paragraph.textContent = speechToText;

    }
}

// const endDictate = () => {
//     recognition.stop();
//     recognition.onresult = (event) => {
//         const speechToText = event.results[0][0].transcript;

//         paragraph.textContent = speechToText;
//     }

// }
