function makeRed(){
    document.body.style.backgroundColor = 'red'
}

//adding blue button setting by function
const makeBlue=document.getElementById('blue');
//just set the name of the function
makeBlue.onclick = blues;
function blues(){
    document.body.style.backgroundColor = 'blue';
}

//handle event using anonymous function

const blueButton = document.getElementById('make-blue-btn');
       //anonymous function
       blueButton.onclick = function(){
           document.body.style.backgroundColor = 'green';
       }

//handle by using add event listener

const pinkButton = document.getElementById('make-pink-btn');
       pinkButton.addEventListener('click', makePink);

       function makePink(){
           document.body.style.backgroundColor = 'pink'
       }
//addEventListener anonymous
const purpleButton = document.getElementById('make-purple-btn');
       
       purpleButton.addEventListener('click', function(){
           document.body.style.backgroundColor = 'purple';
       } );

//another 
document.getElementById('make-tomato-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})