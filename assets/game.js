//setting timer variables 120 secs. = 2 minutes
var time = 120;
var intervalId;

//setting variables that will count the users correct and wrong answers in the Score div
var correct = 0;
var wrong = 0;


 $(document).ready(function() {
    $('#Container').hide();
    $('#restart').hide();
    $('#Score').hide();
    console.log("webpage has loaded");
    //when the start button has been clicked from the Inro div the quiz will begin with the quiz function
    $('#start-btn').on('click', function() {
        quiz();
    })
    function quiz() {
        $('#Container').show();
        $('#void').hide();
        $('#Intro').hide();
        $('#Score').hide()
        $('#restart').hide();
        console.log("Quiz has started!");
    }
    //once the start button has been clicked another function will strat that will be in run fucntion to start the timer
    $('#start-btn').on('click', function() {
        run();
    })
    //the run function runs the timer's speed = decrement, moving at 1000 = 1 sec.
    function run() {
        console.log("Timer has started");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    //the decrement function takes the time variable and sets the time vale (number) decrease and the number will appear in the Clock div with h1 heading
    function decrement() {
        time--;
        $('#Clock').html("<h1>" + time + " " + "SECONDS LEFT" + "</h1>");
        //if statement, once time value # = 0 the stop function will beginand the restart div will show a message asking the user to restart the quiz
        if (time === 0) {
            //alert("TIME IS UP, QUIZ IS OVER!!!");
            stop();
            $('#restart').show();
            $('#Score').hide();
            $('#quizForm').hide();
            $('#Clock').hide();
            $('#submit-btn').hide();
            $('#void').hide();
            console.log("Timer has stopped!");
        }
    }
    function stop() {
        //the interval will clear out and won't run into the negative numbers
        clearInterval(intervalId);
        console.log("Timer has stopped!!!")
    }
    //once the submit button has been clicked the validate function from the quiz will begin
    $('#submit-btn').on('click', function() {
        Validate();
        //stop();
    });
    function Validate () {
        var skit = "In Living Color";
        var girlPower = "Spice Girls";
        var boyBand = "AJ, Brian, Nick, Kevin & Howie";
        var tvShow = "Martin";
        var nba = "Chicago Bulls";
        var nfl = "New Orleans, Superdome";
        var film = "Titanic";
        var rugrats = "Angelica Pickles";
        var DR = "Death Row";
        var game = "1994";

        //input $([name = "variable"]:checked).val(); is checking the value that was selected from the input radio form

        var skit = $('input[name = "skit"]:checked').val();
        console.log(skit);
        var girlPower = $('input[name = "GP"]:checked').val();
        console.log(girlPower);
        var boyBand = $('input[name = "BS"]:checked').val();
        console.log(boyBand);
        var tvShow = $('input[name = "catch"]:checked').val();
        console.log(tvShow);
        var nba = $('input[name = "NBA"]:checked').val();
        console.log(nba);
        var nfl = $('input[name = "NFL"]:checked').val();
        console.log(nfl);
        var film = $('input[name = "film"]:checked').val();
        console.log(film);
        var rugrats = $('input[name = "rugrats"]:checked').val();
        console.log(rugrats);
        var DR = $('input[name = "DR"]:checked').val();
        console.log(DR);
        var game = $('input[name = "game"]:checked').val();
        console.log(game);
        //responses is a array of the variable
        responses = [skit, girlPower, boyBand, tvShow, nba, nfl, film, rugrats, DR, game];
        //for loop index = 0, if the index of responses isn't selected then then the responses is undefined and a message from the void div will appear
        for(i = 0; i < responses.length; i++) {
            if (responses[i] === undefined) {
                //alert("answer all questions please");
                $('#void').show();
                console.log("alert message!!!"); 
                return
            }
        }
        //for each if - else statement  if the variable = the value OR isn't correct value with the string associated with the radio form 
        //then the score will be counted and plugged into the appropreaite div and span = either "correct" or "wrong"
        //once the quiz is over, the score will be counted and displayed in the Score div along with the answers

        if (skit === "In Living Color") {
        //    alert("Answer #1 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
            //alert("Answer #1 is wrong = In Living Color");
            wrong++;
            document.querySelector("#wrong").innerHTML = wrong;

        }
        if (girlPower === "Spice Girls") {
          //  alert("Answer #2 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
           // alert("Answer #2 is wrong = Spice Girls");
           wrong++;
           document.querySelector("#wrong").innerHTML = wrong;
        }
        if (boyBand === "AJ, Brian, Nick, Kevin & Howie") {
           // alert("Answer #3 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #3 is wrong");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (tvShow === "Martin") {
         //   alert("Answer #4 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #4 is wrong = Martin");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (nba === "Chicago Bulls") {
         //   alert("Answer #5 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #5 is wrong = Chicago Bulls");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (nfl === "New Orleans, Superdome") {
         //   alert ("Answer #6 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else  {
         //   alert("Answer #6 is wrong = New Orleans, Superdome");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (film === "The Titanic") {
         //   alert("Answer #7 is correct");
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
         //   alert("Answer #7 is wrong = The Titanic");
         wrong++;
         document.querySelector("#wrong").innerHTML = wrong;
        }
        if (rugrats === "Angelica Pickles") {
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
            wrong++;
            document.querySelector("#wrong").innerHTML = wrong;
        }
        if (DR === "Death Row") {
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
            wrong++;
            document.querySelector("#wrong").innerHTML = wrong;
        }
        if (game === "1994") {
            correct++;
            document.querySelector("#correct").innerHTML = correct;
        }
        else {
            wrong++;
            document.querySelector("#wrong").innerHTML = wrong;
        }
        $('#Score').show();
        $('#quizForm').hide();
        $('#void').hide();
        $('#Clock').hide();
        $('#submit-btn').hide();
        console.log("Scores and answers displayed!");
    }
    //restart button clicked a reload page function is begin starting the quiz over again.
    $('.restart-btn').on('click', function () {
        location.reload();
        console.log("Page has been refreshed!");
    })
    $('.restart-btn2').on('click', function () {
        location.reload();
        console.log("Page has been refreshed!");
    });
});