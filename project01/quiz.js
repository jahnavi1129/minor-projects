const quizForm = document.querySelector("#quizForm");
const resultBox = document.querySelector("#result");
const hintButtons = document.querySelectorAll(".hint-btn");

hintButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const hint = event.target.previousElementSibling;
    hint.classList.toggle("hidden");
  });
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const q1Buttons = document.querySelectorAll('input[name="q1"]');
  const q2Buttons = document.querySelectorAll('input[name="q2"]');
  const q3Buttons = document.querySelectorAll('input[name="q3"]');

  let q1Selected = false;
  let q2Selected = false;
  let q3Selected = false;

  q1Buttons.forEach(button => {
    if (button.checked) {
      q1Selected = true;
    }
  });

  q2Buttons.forEach(button => {
    if (button.checked) {
      q2Selected = true;
    }
  });

  q3Buttons.forEach(button => {
    if (button.checked) {
      q3Selected = true;
    }
  });

  if (!q1Selected || !q2Selected || !q3Selected) {
    resultBox.textContent = "⚠️ Please answer all questions before submitting.";
    resultBox.className = "result-box incorrect";
    return; 
  }

  // Check answers and calculate score directly using .value
  let score = 0;

  q1Buttons.forEach(button => {
    if (button.checked && button.value === "b") score++;
  });

  q2Buttons.forEach(button => {
    if (button.checked && button.value === "b") score++;
  });

  q3Buttons.forEach(button => {
    if (button.checked && button.value === "b") score++;
  });

  // Display feedback
  resultBox.innerHTML = `You scored ${score}/3 correct!`;
  resultBox.className = "result-box"; // Reset classes

  if (score === 3) {
    resultBox.classList.add("correct");
    resultBox.innerHTML += "<br>🎉 Excellent work!";
  } else if (score === 2) {
    resultBox.classList.add("correct");
    resultBox.innerHTML += "<br>👍 Good job! Try to get all right.";
  } else {
    resultBox.classList.add("incorrect");
    resultBox.innerHTML += "<br>💡 Review the module again and retry!";
  }

});