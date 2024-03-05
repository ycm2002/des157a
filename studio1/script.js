(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const adj1 = document.querySelector('#adj1').value;
        const animal1 = document.querySelector('#animal1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun1 = document.querySelector('#noun1').value;
        const adverb1 = document.querySelector('#adverb1').value;
        const number1 = document.querySelector('#number1').value;
        const time1 = document.querySelector('#time1').value;
        const animal2 = document.querySelector('#animal2').value;
        const adj2 = document.querySelector('#adj2').value;
        const number2 = document.querySelector('#number2').value;
        const time2 = document.querySelector('#time2').value;


        let myText = `Here are the words you submitted: ${adj1}, ${animal1}, ${verb1}, ${noun1}, ${adverb1}, ${number1}, ${time1}, ${animal2}, ${adj2}, ${number2}, and ${time2}`;
        madlib.innerHTML = myText;

        if(adj1 == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adj1').focus();
        }
        else if(animal1 == ''){
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
        else if(animal2 == ''){
            myText = "Please provide another animal"
            document.querySelector('#animal2').focus();
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
        else {
            myText = `<h2>Once upon a time...</h2> <br> There was a ${adj1} ${animal1} who loved to ${verb1}. Recently, the ${animal1} went to ${noun1} where it ${adverb1} robbed the other animals there. Fortunately, the ${animal1} got caught and taken to jail, but it was only because it took a break to ${verb1} for ${number1} ${time1}. However, the ${animal1}'s partner in crime, a ${animal2}, was watching the ${adj2} news and went to break the ${animal1} out of jail. Funny enough, the ${animal2} got caught, too, and had to spend ${number2} ${time2} in jail.<br>
            <p>The end</p>`;
        }
        madlib.innerHTML = myText;
});

})();
