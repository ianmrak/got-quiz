// Controls game rules and variables //
var questionManager = {
  questionType: undefined,
  pointValue: undefined,
  score: 0,
  currNum: 0,
  numberCorrect: 0,
  numberIncorrect: 0,
  questions: undefined,
  selection: undefined,
  checkAnswer: function() {
    var currQuestion = this.questions[this.currNum];
    var selectedAnswer = (this.questionType < 2) ? this.selection : $('#input-field').val();
    var formatAnswer = selectedAnswer.replace(/the|[,.\s]+/gi, '').toLowerCase();
    var correctAnswer = currQuestion.correct.replace(/the|[,.\s]+/gi, '').toLowerCase();
        $('.answer-screen').show();
        $('#answer-area').show();
        $('#answer-area').find('p').text(currQuestion.fact);
      if (formatAnswer === correctAnswer) {
        $('#answer-area').find('h2').text("Correct!");
        this.numberCorrect+=1;
        this.score+=this.pointValue;
        }
      else if (selectedAnswer = undefined) {
        return false;
      }
      else {
        $('#answer-area').find('h2').html("Incorrect!<br/>Correct answer: " + currQuestion.correct);
        this.numberIncorrect+=1;
      }
    $('#score').find('.correctCount').text("Correct Answers: " + questionManager.numberCorrect);
    $('#score').find('.incorrectCount').text("Wrong Answers: " + questionManager.numberIncorrect);
    $('#score').find('.scoreCount').text("Score: " + questionManager.score);
  },
  showQuestion: function() {
    $('.answers').find('li').remove();
    $('.answers').find('form').remove();
    $('.answers').find();
    var currQuestion = this.questions[this.currNum];
    var questionAnswers = currQuestion.answers;
      $('.question-wrapper').find('.question').html(currQuestion.question);
      $('.character-photo').find('img').attr("src", currQuestion.picture);
      $('#question-count').find('#currentQuestion').text(questionManager.currNum + 1);
      $('#question-count').find('#totalQuestions').text(questionManager.questions.length);
      if (questionManager['questionType'] === 1) {
      questionAnswers.forEach(function(answer) {
        $('.answers')
          .find('ul')
          .append('<li><button class="option" type="style">' + answer + '</button></li>');
        });
        }
        else {
        $('.answers')
          .find('ul')
          .append('<form onkeypress="return event.keyCode != 13" id="input-form"><input id="input-field" type="text" autocomplete="off"/></form>');
        }

  }
};

// Loads game //
$(document).ready(function() {
  initialize();
});

// Load function //
function initialize() {
$('.difficulty').one('click', function() {
  var id = this.id;
  if (id === "1")  { questionManager.questions = loadEasyQuestions(); questionManager['questionType'] = 1; questionManager['pointValue'] = 1; }
  else if (id === "2") { questionManager.questions = loadMediumQuestions(); questionManager['questionType'] = 1; questionManager['pointValue'] = 2; }
  else if (id === "3") { questionManager.questions = loadHardQuestions(); questionManager['questionType'] = 2; questionManager['pointValue'] = 3; }
    questionManager.showQuestion();
    $('.content-wrapper').animate({height: "820px"}, 200, 'linear', function() {
        $('#game-area').animate({opacity: "1"}, 1000);
    });
    $('#game-area').css("display", "inherit");

    $('.game-start').hide();
});
}

// Loads answer for submission //
$('.answers').on('click', '.option', function() {
    questionManager.selection = $(this).text();
  });

// Activates answer check, shows fact page, and loads next question //
$('#submit').on('click', function() {
    if (questionManager.currNum === questionManager.questions.length - 1) { $('#next').text("Results"); }
    else { $('#next').text("Next question"); }
    questionManager.checkAnswer();
    questionManager.currNum++;
    questionManager.showQuestion();
  });

// Hides fact page and shows next question //
$('#next').on('click', function() {
    $(this).parent().parent().fadeOut(300);
    if (questionManager['currNum'] == questionManager['questions'].length) {
    $('#final-score').find('h2').text("Final score: " + questionManager.score);
    $('#final-score').find('p').text(questionManager.numberCorrect + " out of " + questionManager.questions.length + " questions correct");
    $('#final-score').show();
    }
  });

// Reloads page for new game - I couldn't get it to restart without a page load :( //
$('.restart').on('click', function() {
    location.reload();
    });
