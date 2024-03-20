(function(){
    'use strict';
    console.log('reading js');
    //variables
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const body=document.querySelector('#body');
    //after submitting form
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        //values
        const animal1 = document.querySelector('#animal1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun1 = document.querySelector('#noun1').value;
        const adverb1 = document.querySelector('#adverb1').value;
        const number1 = document.querySelector('#number1').value;
        const time1 = document.querySelector('#time1').value;
        const adj2 = document.querySelector('#adj2').value;
        const number2 = document.querySelector('#number2').value;
        const time2 = document.querySelector('#time2').value;
    

        //appears after submitting form
        let myText = `Here are the words you submitted: ${animal1}, ${verb1}, ${noun1}, ${adverb1}, ${number1}, ${time1}, ${adj2}, ${number2}, and ${time2}`;
        madlib.innerHTML = myText;

        if(animal1 == ''){
            myText = "Please provide an animal"
            document.querySelector('#noun2').focus();
        }
        else if(verb1 == ''){
            myText = "Please provide a verb"
            document.querySelector('#verb1').focus();
        }
        else if(noun1 == ''){
            myText = "Please provide a noun"
            document.querySelector('#noun1').focus();
        }
        else if(adverb1 == ''){
            myText = "Please provide an adverb"
            document.querySelector('#adverb1').focus();
        }
        else if(number1 == ''){
            myText = "Please provide a number"
            document.querySelector('#number1').focus();
        }
        else if(time1 == ''){
            myText = "Please provide a unit of time"
            document.querySelector('#time1').focus();
        }
        else if(adj2 == ''){
            myText = "Please provide another adjective"
            document.querySelector('#adj2').focus();
        }
        else if(number2 == ''){
            myText = "Please provide another number"
            document.querySelector('#number2').focus();
        }
        else if(time2 == ''){
            myText = "Please provide another unit of time"
            document.querySelector('#time2').focus();
        }
        //form layout for red panda choice
        else if(animal1 == 'red panda'){
            body.innerHTML=`<body id="new">
            <header></header>
            <main id="submitted">
            <div id="story">
            <h1>THE NEWS</h1><br>
            <img src="images/redpanda.jpg" alt="redpanda" width="700">
            <p>On Friday, March 13th at (a/an/the) ${noun1}, a ${animal1} (who apparently loves to ${verb1}) robbed a bunch animals and took all their money. Fortunately, the ${animal1} got caught and was taken to jail, but it was only because it took a break to ${verb1} for ${number1} ${time1}. However, the ${animal1}'s partner in crime, another ${animal1}, was watching the ${adj2} news and was saddened to see his partner not only getting arrested, but was saddened to find out he wasn't invited for the robbery. Either way, he went to break out his partner out of jail. Funny enough, that ${animal1} got caught trying to break into a window of the jail and had to spend ${number2} ${time2} in jail. As for the animals that were robbed, they police returned all the items retrieved from the ${animal1}.</p><br>
            <a href="index.html" class="button">Restart</a>
            </div>
            </main>
            </body>`;
        }
        //form layout for cat choice
        else if(animal1 == 'cat'){
            body.innerHTML=`<body id="new">
            <header></header>
            <main id="submitted">
            <div id="story">
            <h1>THE NEWS</h1><br>
            <img src="images/cat.jpg" alt="cat" width="700">
            <p>On Friday, March 13th at (a/an/the) ${noun1}, a ${animal1} (who apparently loves to ${verb1}) robbed a bunch animals and took all their money. Fortunately, the ${animal1} got caught and was taken to jail, but it was only because it took a break to ${verb1} for ${number1} ${time1}. However, the ${animal1}'s partner in crime, another ${animal1}, was watching the ${adj2} news and was saddened to see his partner not only getting arrested, but was saddened to find out he wasn't invited for the robbery. Either way, he went to break out his partner out of jail. Funny enough, that ${animal1} got caught trying to break into a window of the jail and had to spend ${number2} ${time2} in jail. As for the animals that were robbed, the police returned all the items retrieved from the ${animal1}.</p><br>
            <a href="index.html" class="button">Restart</a>
            </div>
            </main>
            </body>`;
        }//form layout for dog choice
        else if(animal1 == 'dog'){
            body.innerHTML=`<body id="new">
            <header></header>
            <main id="submitted">
            <div id="story">
            <h1>THE NEWS</h1><br>
            <img src="images/dog.jpg" alt="dog" width="700">
            <p>On Friday, March 13th at (a/an/the) ${noun1}, a ${animal1} (who apparently loves to ${verb1}) robbed a bunch animals and took all their money. Fortunately, the ${animal1} got caught and was taken to jail, but it was only because it took a break to ${verb1} for ${number1} ${time1}. However, the ${animal1}'s partner in crime, another ${animal1}, was watching the ${adj2} news and was saddened to see his partner not only getting arrested, but was saddened to find out he wasn't invited for the robbery. Either way, he went to break out his partner out of jail. Funny enough, that ${animal1} got caught trying to break into a window of the jail and had to spend ${number2} ${time2} in jail. As for the animals that were robbed, the police returned all the items retrieved from the ${animal1}.</p><br>
            <a href="index.html" class="button">Restart</a>
            </div>
            </main>
            </body>`;
        }
        else {
            body.innerHTML=`<body id="new">
            <header></header>
            <main id="submitted">
            <div id="story">
            <h1>THE NEWS</h1><br>
            <img src="images/cat.jpg" alt="cat" width="700" height="290">
            <p>On Friday, March 13th at (a/an/the) ${noun1}, a ${animal1} (who apparently loves to ${verb1}) robbed a bunch animals and took all their money. Fortunately, the ${animal1} got caught and was taken to jail, but it was only because it took a break to ${verb1} for ${number1} ${time1}. However, the ${animal1}'s partner in crime, another ${animal1}, was watching the ${adj2} news and was saddened to see his partner not only getting arrested, but was saddened to find out he wasn't invited for the robbery. Either way, he went to break out his partner out of jail. Funny enough, that ${animal1} got caught trying to break into a window of the jail and had to spend ${number2} ${time2} in jail. As for the animals that were robbed, the police returned all the items retrieved from the ${animal1}.</p><br>
            <a href="index.html" class="button">Restart</a>
            </div>
            </main>
            </body>`;
        }
        madlib.innerHTML = myText;
});

})();
