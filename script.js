'use strict';
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
const pscore0=document.getElementById('current--0');
const pscore1=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const diced=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

let current_score, active, scores, playing;
const init=function()
{
score0.textContent=0;
score1.textContent=0;

current_score=0;
active=0;
scores=[0,0];
playing =true;

diced.classList.add('hidden');
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');
};

init();

const switchp=function()
{
    document.getElementById(`current--${active}`).textContent=0;
    active= active==0? 1:0;
    current_score=0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};


//rolling a dice
    btnroll.addEventListener('click',function()
{
    if(playing)
    {
        //generating a dice
        const roll=Math.trunc(Math.random()*6)+1;

        //display dice
        diced.classList.remove('hidden');
        diced.src=`dice-${roll}.png`;

        //check for 1: if true switch to next player
        if(roll!==1)
        {
            current_score+=roll;
            console.log(current_score);
            document.getElementById(`current--${active}`).textContent=current_score;
        }
        else
        {
            switchp();
        }
    }
        
});


 

btnhold.addEventListener('click', function()
{
   if(playing)
    {
        scores[active]+=current_score;
    document.getElementById(`score--${active}`).textContent=scores[active];

    if(scores[active]>=10)
    {
        document.querySelector(`.player--${active}`).classList.add('player--winner');
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        playing=false;
    }
    else
    {
        switchp();
    }
    }
    
});

btnnew.addEventListener('click', init);

