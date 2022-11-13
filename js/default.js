(() => {
  // List of input fields to check
  const inputNames = ['firstname', 'lastname', 'email', 'password'];
  let inputs = [];

  // Push the inputs into an array for later use
  for (i in inputNames) {
    let input = document.getElementById(inputNames[i]);
    input.addEventListener('input', checkInput, false);
    inputs.push(input);
  }

  // Adds custom validation style class for those with JavaScript enabled
  // noscript.css handles users with JavaScript disabled
  function validateInput(input, valid) {
    if (valid)
      input.classList.remove('input-invalid');
    else
      input.classList.add('input-invalid');
  }

  // Check input as it's being typed
  function checkInput(e) {
    if (e.target.validity.valid)
      validateInput(e.target, true);
    else
      validateInput(e.target, false);
  }

  // Check inputs upon user submission
  document.getElementById('submit-button').addEventListener('click', () => {
    for (i in inputs) {
      if (inputs[i].validity.valid)
        validateInput(inputs[i], true);
      else
        validateInput(inputs[i], false);
    }
  }, false);
})();