window.addEventListener('load',me)
let time=5;
let score=0;
let play;

const word=document.querySelector('#word-input');
const currentword=document.querySelector('#current');
const game_score=document.querySelector('#score');
const game_time=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const random_words=[

    'mayur',
    'river',
    'india',
    'cricket',
    'football',
    'baseball',
    'badminton',
    'soccer',

];

````````````````````````````````````````

function me()
{
    showword(random_words);
    word.addEventListener('input',starMatch);
    setInterval(countdown,1000);
    setInterval(check,50);
}

function starMatch()
{
    if(matchWord())
    {
       play=true;
       time=6;
       showword(random_words);
       word.value='';
       score++;
    }
    game_score.innerHTML=score;

}
function matchWord()
{
    if(word.value === currentword.innerHTML)
    {
        message.innerHTML="correct";
        return true;
    }
    else{
        message.innerHTML="";
        return false;
    }
}


function showword(hello)
{
const randword=Math.floor(Math.random() * hello.length);
currentword.innerHTML=hello[randword];
}

function countdown()
{
    if(time>0)
    {
        time--;
    }
    else if(time===0)
    {
        play=false;
    }
    game_time.innerHTML=time;
}

function check()
{
    if(!play && time===0)
    {
        message.innerHTML="game over";
    }
}