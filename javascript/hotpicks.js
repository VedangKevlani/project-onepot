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

function navigateToHotPicks() {
    window.location.href = "hotpicks.html";
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the popup windows and buttons
    const popupWindow1 = document.getElementById('popupWindow'); // First popup window
    const openPopupBtn1 = document.querySelector('.popupWindow'); // First trigger link
    const closePopupBtn1 = document.getElementById('closePopupBtn'); // Close button for the first popup

    const popupWindow2 = document.getElementById('popupWindow2'); // Second popup window
    const openPopupBtn2 = document.querySelector('.popupWindow2'); // Second trigger link
    const closePopupBtn2 = document.getElementById('closePopupBtn2'); // Close button for the second popup
    
    const popupWindow3 = document.getElementById('popupWindow3'); // Third popup window
    const openPopupBtn3 = document.querySelector('.popupWindow3'); // Third trigger link
    const closePopupBtn3 = document.getElementById('closePopupBtn3'); // Close button for the third popup

    // Open the first popup when the link is clicked
    openPopupBtn1.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        popupWindow1.style.display = 'flex'; // Show the first popup
    });

    // Close the first popup when the close button is clicked
    closePopupBtn1.addEventListener('click', function() {
        popupWindow1.style.display = 'none'; // Hide the first popup
    });

    // Close the first popup if the user clicks outside of the popup content
    popupWindow1.addEventListener('click', function(e) {
        if (e.target === popupWindow1) {
            popupWindow1.style.display = 'none'; // Close if the area outside the popup is clicked
        }
    });

    // Open the second popup when the second link is clicked
    openPopupBtn2.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        popupWindow2.style.display = 'flex'; // Show the second popup
    });

    // Close the second popup when the close button is clicked
    closePopupBtn2.addEventListener('click', function() {
        popupWindow2.style.display = 'none'; // Hide the second popup
    });

    // Close the second popup if the user clicks outside of the popup content
    popupWindow2.addEventListener('click', function(e) {
        if (e.target === popupWindow2) {
            popupWindow2.style.display = 'none'; // Close if the area outside the popup is clicked
        }
    });

    // Open the third popup when the third link is clicked
    openPopupBtn3.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        popupWindow3.style.display = 'flex'; // Show the third popup
    });

    // Close the third popup when the close button is clicked
    closePopupBtn3.addEventListener('click', function() {
        popupWindow3.style.display = 'none'; // Hide the third popup
    });

    // Close the third popup if the user clicks outside of the popup content
    popupWindow3.addEventListener('click', function(e) {
        if (e.target === popupWindow3) {
            popupWindow3.style.display = 'none'; // Close if the area outside the popup is clicked
        }
    });
});
