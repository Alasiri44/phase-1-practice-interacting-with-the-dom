const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likeList = document.querySelector('.likes');
const commentList = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const comment = document.getElementById('comment-input');
let myCounter = 0;
let increaseCounter;

function incrementingCounter(){   
    if(!increaseCounter) 
   { increaseCounter = setInterval(() => {
        myCounter++;
        counter.textContent = myCounter;
        }, 1000)   }
       
}

function addEvents(intervalId){
    pauseButton.addEventListener('click' , myIterator)        
        function myIterator(){
            if(pauseButton.textContent.trim() === 'pause'){
                
                pauseButton.textContent = 'resume';
                clearInterval(intervalId);
                intervalId = null;
            }else {
                pauseButton.textContent = 'pause';
               incrementingCounter;
            }
        }    
}

function incrementOrDecrementCounter(){
    plusButton.addEventListener('click', function (){
        myCounter++;
        counter.textContent = myCounter;

    })
    minusButton.addEventListener('click', function(){
        myCounter--;
        counter.textContent = myCounter;
    })
}

let mylikes = 0;
let numberIterator = 0;
function showLikes(){
    heartButton.addEventListener('click', function(){
        const createdLike = document.createElement('p');
        if(numberIterator === myCounter){
            mylikes++;
            createdLike.textContent = `Number ${myCounter} has been liked ${mylikes} times`
            likeList.appendChild(createdLike);
        }else{
            mylikes = 0;
            numberIterator = myCounter;
            mylikes++;
            createdLike.textContent = `Number ${myCounter} has been liked ${mylikes} times`
            likeList.appendChild(createdLike);
        }        
        
    });
}

function acceptComment(){
    commentForm.addEventListener('submit', function(e){
        e.preventDefault();
        let createdComment = document.createElement('p');
        createdComment.textContent = comment.value;
        commentList.appendChild(createdComment);
        comment.value = '';
    })
}

function main(){
    incrementingCounter();
    addEvents(increaseCounter);
    incrementOrDecrementCounter();
    acceptComment();
    showLikes();
}

document.addEventListener('DOMContentLoaded', function(){
   main();
})