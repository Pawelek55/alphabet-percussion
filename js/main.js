/*


window.addEventListener('keydown', function(event){

    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
//    console.log(audio);
    if(!audio) return; // Stop function if you haven't ASCII kode in index.html;
    
    audio.currentTime = 0;
    audio.play();      
    
    let playing = document.querySelector(`.box[data-key="${event.keyCode}"]`);
    if(!playing) return;
    

    playing.classList.add('playing');    
});

function removeTransition(event){
    console.log(event);
//    if(event.propertyName !== 'transform') return;
    console.log(event.propertyName);
//    console.log(this);
//    this.classList.remove('playing');
    
}

let boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('transitionend', removeTransition));
*/

















/*
1. W console.log pokazuje, że klawisz został wciśnięty; Jep
2. Został wciśnięty bo został odpowiednio złpany przez querySelector Jep
3. Jak zostaje odpowiedni naciśnity to pojawia się odpowiednia muzyka czyli audio jep
4. Następnie łapie poprzez dodawanie klasy jep
5. Dodawanie klasy jep
6. Odejmowanie klasy poprzez funkcję, która nasłuchuje zakończenia property; 
7. Powinno działać
*/
/*
function boxesShow(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    
    let playing = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    
    playing.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
    
}

let boxes = document.querySelectorAll('.box');
//boxes.forEach(box => box.addEventListener('transitionend', removeTransition));

boxes.forEach(function(box){
    box.addEventListener('transitionend', removeTransition);
});

document.addEventListener('keydown', boxesShow);*/














function clickKey(e){    
//    console.log(e);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    
    let playing = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if(!playing) return;

    playing.classList.add('playing');
}

function endOfPlaying(e){
    
    if(e.propertyName !== "transform") return;
        console.log(e.propertyName);
    this.classList.remove('playing');
};

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('transitionend', endOfPlaying))

document.addEventListener('keydown', clickKey);



























































