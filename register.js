//Javascript code for previewing profile pic starts
document.getElementById("profilePic").addEventListener("change", function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById("preview");
    
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
     
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
    }
  });
//Javascript code for previewing profile pic ends

//Javascript code for previewing password starts
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  
  }
//Javascript code for previewing password ends