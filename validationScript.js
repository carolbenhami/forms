    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let form = document.getElementById('myForm');
let regex = /^[a-zA-Z0-9]+$/
let userInput = document.getElementById('inputField');  


form.addEventListener('submit', function(event){
    if (!regex.test(userInput.value)){
      window.alert("Invalid Input")
      event.preventDefault()
    }
    else{
      window.alert("Submitted.")
    }
    });
      