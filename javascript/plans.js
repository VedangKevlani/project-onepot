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

document.addEventListener('DOMContentLoaded', function () {
 // Get all purchase buttons and close buttons
 const purchaseButtons = document.querySelectorAll('.purchaseButton');
 const closeButtons = document.querySelectorAll('.closePopupBtn');
 const successPopup = document.querySelector('.success-popup');
 const closeButton = document.querySelector('.close-btn');

 // Hide all popups by default when the page loads
 const allPopups = document.querySelectorAll('.popupWindow');
 allPopups.forEach(popup => {
     popup.style.display = 'none';  // Hide all popups initially
 });

 // Loop over all purchase buttons
 purchaseButtons.forEach(button => {
     button.addEventListener('click', function (e) {
         e.preventDefault();  // Prevent the default link behavior

         const targetPopupId = button.getAttribute('data-target');  // Get target popup ID
         const targetPopup = document.getElementById(targetPopupId);  // Get the popup element

         // Close any previously opened popups
         allPopups.forEach(popup => {
             popup.style.display = 'none';  // Hide all popups
         });

         // Show the target popup
         if (targetPopup) {
             targetPopup.style.display = 'block';  // Show the selected popup
         }
     });
 });

 // Close the popup when the close button is clicked
 closeButtons.forEach(button => {
     button.addEventListener('click', function () {
         const popup = button.closest('.popupWindow');  // Get the closest popup container
         popup.style.display = 'none';  // Hide the popup
     });
 });

 // Close the popup if the user clicks outside the content area
 allPopups.forEach(popup => {
     popup.addEventListener('click', function (e) {
         if (e.target === popup) {
             popup.style.display = 'none';  // Hide the popup if the outer area is clicked
         }
     });
 });

 document.querySelector('[data-target="popupWindowBreakfast"]').addEventListener('click', function () {
    document.getElementById('popupWindow').classList.remove('hidden');
});

document.querySelector('[data-target="popupWindowLunch"]').addEventListener('click', function () {
    document.getElementById('popupWindow2').classList.remove('hidden');
});

document.querySelector('[data-target="popupWindowDinner"]').addEventListener('click', function () {
    document.getElementById('popupWindow3').classList.remove('hidden');
});

 document.getElementById('closePopupBtn').addEventListener('click', function () {
    document.getElementById('popupWindow').classList.add('hidden');
});

document.getElementById('closePopupBtn2').addEventListener('click', function () {
    document.getElementById('popupWindow2').classList.add('hidden');
});

document.getElementById('closePopupBtn3').addEventListener('click', function () {
    document.getElementById('popupWindow3').classList.add('hidden');
});

    // Initialize date picker
    const datePicker = document.getElementById('datePicker');
    datePicker.addEventListener('focus', function () {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        datePicker.value = formattedDate;
    });

    // Function to show the success popup
    function showSuccessPopup() {
        successPopup.style.display = 'flex'; // Show the popup
    }

    // Function to hide the success popup
    closeButton.addEventListener('click', () => {
        successPopup.style.display = 'none'; // Hide the popup when close button is clicked
    });

    // Prevent form submission and show success popup
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page

        // Show the success popup
        showSuccessPopup();

         // Serialize the form data (if needed, but avoid appending to URL)
         const formData = new FormData(form);

         // Send the form data using AJAX or fetch
         fetch('/php/userinfo.php', {
             method: 'POST',
             body: formData // Send form data without appending it to the URL
         })
         .then(response => {
             if (response.ok) {
                 showSuccessPopup(); // Show success popup on successful submission
             } else {
                 // Handle error (optional)
                 alert('There was an error submitting the form. Please try again.');
             }
         })
         .catch(error => {
             // Handle network or other errors (optional)
             console.error('Error:', error);
             alert('There was an error submitting the form. Please try again.');
         });
     });
    });