function checkPasswordStrength(password) {
  let strength = "Easy";
  let color = "red";
  
  if (password.length >= 8) {
    if (/\d/.test(password) && /[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password)) {
      strength = "Strong";
      color = "green";
    } else if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
      strength = "Normal";
      color = "orange";
    }
  }
  
  document.getElementById("password-strength").innerText = strength;
  document.getElementById("password-strength").style.color = color;
}
  
  document.getElementById("registration-form").addEventListener("submit", function(event) {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    if (!usernameInput.value || !emailInput.value || !passwordInput.value) {
      alert("Будь ласка, заповніть всі поля!");
      event.preventDefault();
    }
  });