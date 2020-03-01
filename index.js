window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
recognition.continuous = true
const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');

icon.addEventListener('click', () => {
    dictate();
});

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
//event.results[0][0].transcript;
// const speak = (action) => {
//     utterThis = new SpeechSynthesisUtterance(action());
//     synth.speak(utterThis);
// };

// const getTime = () => {
//     const time = new Date(Date.now());
//     return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
// };

// const getDate = () => {
//     const time = new Date(Date.now())
//     return `today is ${time.toLocaleDateString()}`;
// };

// const getTheWeather = (speech) => {
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[5]}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (weather) {
//             if (weather.cod === '404') {
//                 utterThis = new SpeechSynthesisUtterance(`I cannot find the weather for ${speech.split(' ')[5]}`);
//                 synth.speak(utterThis);
//                 return;
//             }
//             utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
//             synth.speak(utterThis);
//         });
// };