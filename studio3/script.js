(function () {

    'use strict';
    console.log('reading js');
 

    //INSTRUCTIONS OVERLAY
    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className="hidden";
    })
    
    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className="hidden";
        }
    })

    //VARIABLES
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    //GAME IMAGES AND DATA
    const gameData = {
        dice: ['images/1fire.PNG', 'images/2ball.PNG', 'images/3ball.PNG', 'images/4ball.PNG', 'images/5ball.PNG', 'images/6ball.PNG'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    
    //START THE GAME
    startGame.addEventListener("click",function(){
        //randomly set game index here
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        
        //GAME STARTED AND QUITTING OPTION
        gameControl.innerHTML='<h2>The Game Has Started!</h2>'
        score.innerHTML+='<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click",function(){
            location.reload();
        });

        //SET UP TURN AND THROWING DICE 
        function setUpTurn(){
            game.innerHTML = `<h3>It's ${gameData.players[gameData.index]}'s turn to roll the ball</h3>`;
            actionArea.innerHTML ='<button id="roll">Roll the Ball</button>';
            document.getElementById('roll').addEventListener('click',function(){
                
                function throwDice(){
                    actionArea.innerHTML = '';
                    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
                    gameData.roll2 = Math.floor(Math.random() * 6) + 1;

                    game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                                        <img src="${gameData.dice[gameData.roll2-1]}">`;
                    gameData.rollSum = gameData.roll1 + gameData.roll2;
                    //if two 1's are rolled...
                    if( gameData.rollSum === 2){
                        game.innerHTML += '<p>Oh no! Both balls landed in the fire! You lost all your points :(<p>';
                        gameData.score[gameData.index] = 0;
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        //show the current score
                        setTimeout(setUpTurn,2000);
                        showCurrentScore();
                    }
                    // if EITHER die is a 1..
                    else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                        gameData.index ?  (gameData.index = 0) : (gameData.index = 1);
                        game.innerHTML += `<p>Oh no! One of your balls went into the fire, switching to ${
                            gameData.players[gameData.index]
                        }</p>`;
                        setTimeout(setUpTurn,2000);
                    }
                    //if NEITHER die is a 1...
                    else{
                        gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                        actionArea.innerHTML = '<button id="rollagain">Roll</button> or <button id="pass">Pass</button>';

                        document.getElementById('rollagain').addEventListener('click', function(){
                            setUpTurn();
                        });
                        document.getElementById('pass').addEventListener('click',function (){
                            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                            setUpTurn();
                        });
                        //check winning condition
                        checkWinningCondition();
                        
                    }
                }

                //SHOWING SCORES
                function showCurrentScore(){
                    score.innerHTML = `<p><strong>${gameData.players[0]}</strong> currently has <strong>${gameData.score[0]}</strong> points <br> <strong>${gameData.players[1]}</strong> has <strong>${gameData.score[1]}</strong> points!</p>`;    
                }

                //WINNER AND START NEW GAME
                function checkWinningCondition(){
                    if(gameData.score[gameData.index] > gameData.gameEnd){
                        score.innerHTML = `<h2>${gameData.players[gameData.index]}
                        wins with ${gameData.score[gameData.index]} points!</h2>`;

                        actionArea.innerHTML='';
                        document.getElementById('quit').innerHTML="Start a New Game?";
                    }
                    else{
                        //show current score
                        showCurrentScore();
                        score.innerHTML = `<p><strong>${gameData.players[0]}</strong> has <strong>${gameData.score[0]}</strong> points <br> <strong>${gameData.players[1]}</strong> has <strong>${gameData.score[1]}</strong> points!</p>`;        
                    }
                }

                throwDice();
            });

        }
        setUpTurn();
    })
})();
