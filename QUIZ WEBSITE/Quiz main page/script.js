 const quizQuestions = {
          easy: [
            {
              question: "1.What does HTML stand for?",
              options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperText Machine Language", "HyperText Markup Leveler"],
              correctAnswer: "HyperText Markup Language"
            },
            {
              question: "2.Which HTML tag is used to define an internal style sheet?",
              options: ["<style>", "<script>", "<css>", "<link>"],
              correctAnswer: "<style>"
            },
            {
              question: "3.Which property is used to change the background color in CSS?",
              options: ["color", "background-color", "bgcolor", "background"],
              correctAnswer: "background-color"
            },
            {
              question: "41. Choose the  worst ipl  team  in IPL history?",
              options: ["RCB(e sala cup lolipop)", "CSK(comback super kings)", "MI(mumbai cha raja)", "KKR(kor bo lor bo jet bo)"],
              correctAnswer: "RCB(e sala cup lolipop)"
            }
          ],
          medium: [
            
                {
                  question: "1. Who is the highest run-scorer for Mumbai Indians in IPL history?",
                  options: ["Rohit Sharma", "Kieron Pollard", "Sachin Tendulkar", "Hardik Pandya"],
                  correctAnswer: "Rohit Sharma"
                },
                {
                  question: "2. How many IPL titles have Mumbai Indians and Chennai Super Kings won as of 2023?",
                  options: ["3", "4", "5", "6"],
                  correctAnswer: "5"
                },
                {
                  question: "3. Who is the captain of Chennai Super Kings in IPL 2023?",
                  options: ["MS Dhoni", "Suresh Raina", "Ravindra Jadeja", "Faf du Plessis"],
                  correctAnswer: "MS Dhoni"
                },
                {
                  question: "4. How many IPL titles have Chennai Super Kings won as of 2023?",
                  options: ["2", "3", "4", "5"],
                  correctAnswer: "4"
                },
               
            
          ],
          hard: [
            {
              question: "What is the speed of light?",
              options: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "299,792 m/s"],
              correctAnswer: "299,792 km/s"
            },
            {
              question: "Who developed the theory of relativity?",
              options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
              correctAnswer: "Albert Einstein"
            },
            {
              question: "What is the powerhouse of the cell?",
              options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
              correctAnswer: "Mitochondria"
            },
            {
              question: "What is the chemical formula for water?",
              options: ["H2O", "CO2", "O2", "H2"],
              correctAnswer: "H2O"
            }
          ]
        };
        
        let currentQuestionIndex = 0;
        let score = 0;
        let timeLeft = 30;
        let timerInterval;
        let currentLevel = 'easy';
        
       
        function startQuiz() {
          document.getElementById("start-button").style.display = "none";
          displayQuestion();
          startTimer();
        }
        
       
        function displayQuestion() {
          const currentQuestion = quizQuestions[currentLevel][currentQuestionIndex];
          const questionText = document.getElementById("question-text");
          const answerButtons = document.getElementById("answer-buttons");
        
          questionText.innerHTML = "";
          answerButtons.innerHTML = "";
        
          questionText.innerHTML = currentQuestion.question;
        
          currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("answer-button");
            answerButtons.appendChild(button);
        
            button.addEventListener("click", function() {
              checkAnswer(option);
            });
          });
        }
        
       
        function checkAnswer(selectedOption) {
          const currentQuestion = quizQuestions[currentLevel][currentQuestionIndex];
        
          if (selectedOption === currentQuestion.correctAnswer) {
            score++;
          }
        
          currentQuestionIndex++;
        
          if (currentQuestionIndex < quizQuestions[currentLevel].length) {
            displayQuestion();
          } else {
            endQuiz();
          }
        }
        
       
        function startTimer() {
          timerInterval = setInterval(function() {
            timeLeft--;
        
            document.getElementById("timer").textContent = timeLeft;
        
            if (timeLeft <= 0) {
              endQuiz();
            }
          }, 1000);
        }
        
        
        function endQuiz() {
          clearInterval(timerInterval);
        
          const scorePercentage = (score / quizQuestions[currentLevel].length) * 100;
          let prizeMoney = 0;
        
          switch (score) {
            case 1:
              prizeMoney = 10000;
              break;
            case 2:
              prizeMoney = 30000;
              break;
            case 3:
              prizeMoney = 80000;
              break;
            case 4:
              prizeMoney = 100000;
              break;
            case 5:
              prizeMoney = 200000;
              break;
            default:
              prizeMoney = 0;
          }
        
          const questionContainer = document.getElementById("question-container");
          questionContainer.innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score} out of ${quizQuestions[currentLevel].length}</p>
            <p>Score Percentage: ${scorePercentage}%</p>
            <p>Prize Money: $${prizeMoney}</p>
          `;
        }
        
       
        document.getElementById("easy-button").addEventListener("click", function() {
          currentLevel = 'easy';
          document.getElementById("level-container").style.display = "none";
          document.getElementById("start-button").classList.remove("hide");
        });
        
        document.getElementById("medium-button").addEventListener("click", function() {
          currentLevel = 'medium';
          document.getElementById("level-container").style.display = "none";
          document.getElementById("start-button").classList.remove("hide");
        });
        
        document.getElementById("hard-button").addEventListener("click", function() {
          currentLevel = 'hard';
          document.getElementById("level-container").style.display = "none";
          document.getElementById("start-button").classList.remove("hide");
        });
        
        document.getElementById("start-button").addEventListener("click", startQuiz);
        