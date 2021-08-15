function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

//3..
const blueButton = document.getElementById('blue-btn');
         blueButton.onclick = makeBlue;
        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }
//4...
const tomatoButton = document.getElementById('tomato-btn');
        tomatoButton.onclick = function makeTomato(){
            document.body.style.backgroundColor = 'tomato';
        }
//5...using event handle

const makeGreen = document.getElementById('green-btn')
        makeGreen.addEventListener('click', greenButton)

        function greenButton(){
            document.body.style.backgroundColor = 'green';
        }
//6....
const pinkButton = document.getElementById('pink-btn');
        pinkButton.addEventListener('click', function(){
            document.body.style.backgroundColor = 'pink'
        })

//7...
document.getElementById('indigo-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'indigo';
})


