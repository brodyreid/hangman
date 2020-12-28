jQuery(function() {

    // Pick random word
    let words = ["javascript", "monkey", "amazing", "pancake"]
    let word = words[Math.floor(Math.random() * words.length)]

    // Setting up answer with blanks
    for(var i = 0; i < word.length; i++) {
        $("#answer").append('<div class="letter"></div>');
        $("#answer").find(":nth-child(" + (i + 1) + ")").text(word[i].toUpperCase());
    }

    // Setting up remaining letters and counter
    let remainingLetters = word.length
    let counter = 0

    // Change the colour of the key button when clicked 
    $("button").on("click", function(event) {
        $(event.target)
            .css("background-color", "salmon")
            .css("border", "salmon")
            .css("color", "white");
        
        // Disable the button once it's been pressed
        $(this).prop("disabled", "true")

       // Define guess
        var correctGuess = false
        var guess = $(this).text()

        // Make correct guesses visible
        for (var i = 0; i < word.length; i++) {
            if (guess.toLowerCase() === word.charAt(i).toLowerCase()) {
                $("#answer").find(":nth-child(" + (i + 1) + ")").css("color", "black");
                correctGuess = true
                remainingLetters--
            }
        }
        
        // If the letter chosen was not a correct guess, then add 1 to the counter and show updated picture
        if(correctGuess === false) {
            ++counter
            $("#hangman").attr("src", "hangman-assets/" + counter + ".jpg");
        }
        
        // Player loses
        if (counter === 6) {
            setTimeout(function () { // (Needed to use setTimeout() or else alert would display before the picture was updated
                alert("Better luck next time!");
            }, 100)
        }

        // Player wins
        if (remainingLetters === 0) {
            setTimeout(function () {
                alert("Congratulations! You win!");
            }, 100)
        }
    });


});
