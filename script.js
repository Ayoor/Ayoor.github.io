function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


    // Character counter for the message textarea
    const messageInput = document.getElementById('message');
    const counter = document.getElementById('counter');

    messageInput.addEventListener('input', function () {
      const remainingChars = 500 - this.value.length;
      counter.textContent = `${remainingChars} characters remaining`;
    });

      // Validate inputs and show error tips
    function validateAndSubmit() {
      // Validate subject
      const subjectInput = document.getElementById('subject');
      if (!subjectInput.checkValidity()) {
        showErrorTip(subjectInput, 'Please enter a valid subject.');
        return;
      }

      // Validate message
      const messageInput = document.getElementById('message');
      if (!messageInput.checkValidity()) {
        showErrorTip(messageInput, 'Please enter a message with up to 500 characters.');
        return;
      }

      // Validate email
      const emailInput = document.getElementById('email');
      if (!emailInput.checkValidity()) {
        showErrorTip(emailInput, 'Please enter a valid email address.');
        return;
      }

      // Validate robot check
      const robotCheckInput = document.getElementById('robotCheck');
      if (!robotCheckInput.checkValidity()) {
        showErrorTip(robotCheckInput, 'Please complete the robot check.');
        return;
      }

      // If all inputs are valid, proceed with the submission (replace with actual form submission logic)
      alert('Message sent Suceessfully, I will message you shortly.');
    }

    // Function to show error tip and focus on the input
    function showErrorTip(inputElement, errorMessage) {
      const errorTip = document.createElement('div');
      errorTip.className = 'error-tip';
      errorTip.textContent = errorMessage;

      // Append the error tip after the input element
      inputElement.parentNode.insertBefore(errorTip, inputElement.nextSibling);

      // Focus on the input element
      inputElement.focus();

      // Remove the error tip after a short delay (you can adjust the delay as needed)
      setTimeout(() => {
        errorTip.parentNode.removeChild(errorTip);
      }, 3000); // 3000 milliseconds (3 seconds) delay
    }

