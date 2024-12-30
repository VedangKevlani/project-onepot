// Show Sidebar
function showSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

// Hide Sidebar
function hideSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'none';
}

// Close the form popup
function closeForm() {
    hideAllForms(); // Close all forms
}

// Handle password reset form submission
function handleResetPasswordSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Send reset code request to backend
    sendResetCodeRequest(email);
}

// Forgot Password link click
function forgotPassword() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'block';
}

// Simulate sending a reset code via email (Replace with backend API)
function sendResetCodeRequest(email) {
    const resetCode = generateCode();
    console.log(`Sending reset code: ${resetCode} to ${email}`);
        
    // Use fetch to send the request to your backend
    fetch('/send-reset-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, resetCode: resetCode })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("A reset code has been sent to your email.");
        // After the reset, allow the user to login
        document.getElementById('resetPasswordForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Generate a 6-digit reset code
function generateCode() {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
}

// Send reset code email using backend (simulated for now)
function sendResetCodeToEmail(email, code) {
    // This should be moved to a backend API like Node.js, PHP, etc.
    console.log(`Sending reset code ${code} to ${email}`);
    // Example of how to send an email using backend (e.g., with SendGrid or another service)
    // After sending email, allow the user to proceed with resetting password
}

// Call this function to handle form submission for Create Account
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(document.querySelector('form'));
    
    fetch('/userinfo.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Log the response text for debugging
        return response.text().then(text => {
            console.log(text); // Check if this is valid JSON
            return text ? JSON.parse(text) : {};
        });
    })
    .then(data => {
        console.log(data);
        window.location.href = 'homepage.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
    }

function nextPage(pageNumber) {
    const inputs = document.querySelectorAll(`#formPage${pageNumber} input[required]`);
    let allFilled = true;

    // Check if inputs are being selected
    console.log('Checking inputs for page: ', pageNumber);
    console.log(inputs);

    inputs.forEach(input => {
        console.log(`${input.name} value: `, input.value);  // Log the value of each input

        // Check if the input value is empty or contains only spaces
        if (!input.value.trim()) {
            allFilled = false;
            input.style.border = '2px solid red'; // Highlight empty fields
        } else {
            input.style.border = ''; // Reset the border if the field is filled
        }
    });

    // If all required fields are filled, proceed to the next page
    if (allFilled) {
        const currentPage = document.getElementById(`formPage${pageNumber}`);
        const nextPage = document.getElementById(`formPage${pageNumber + 1}`);

        if (currentPage && nextPage) {
            currentPage.style.display = 'none';
            nextPage.style.display = 'block';
        } else {
            console.error(`Page ${pageNumber} or ${pageNumber + 1} not found`);
        }
    } else {
        alert('Please fill out all required fields before proceeding.');
    }
}


function previousPage(pageNumber) {
    const currentPage = document.getElementById(`formPage${pageNumber}`);
    const previousPage = document.getElementById(`formPage${pageNumber - 1}`);

    if (currentPage && previousPage) {
        currentPage.style.display = 'none';
        previousPage.style.display = 'block';
    } else {
        console.error(`Page ${pageNumber} or ${pageNumber - 1} not found`);
    }
}

// Hide all forms
function hideAllForms() {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'none';
}
// Ensure no forms are shown on page load
hideAllForms();

document.addEventListener('DOMContentLoaded', function () {

    // Function to open the form popup and blur the background columns
    document.addEventListener('click', function(event) {
        const formType = event.target.getAttribute('data-form-type');  // Assuming you use data attributes to specify form type

        if (formType) {
            hideAllForms();
            if (formType === 'getStarted') {
                document.getElementById('myForm').style.display = 'block';  // Show Create Account form
            } else if (formType === 'alreadyMember') {
                document.getElementById('loginForm').style.display = 'block';  // Show Login form
            }
        }
    });

    var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
});
