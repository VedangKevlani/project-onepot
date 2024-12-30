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

    // Get the elements for zooming
    const recipeCardImage = document.getElementById('zoomImage');
    const recipeCardImage2 = document.getElementById('zoomImage2');
    const zoomModal = document.getElementById('zoomModal');
    const zoomImg = document.getElementById('zoomImg');
    const zoomClose = document.querySelector('.zoom-close');

    // Click to open the zoom modal
    recipeCardImage.addEventListener('click', function () {
        zoomModal.style.display = 'flex'; // Show the zoom modal
        zoomImg.src = recipeCardImage.src; // Set the zoom modal image to the clicked image
    });

    recipeCardImage2.addEventListener('click', function () {
        zoomModal.style.display = 'flex'; // Show the zoom modal
        zoomImg.src = recipeCardImage2.src; // Set the zoom modal image to the clicked image
    });

    // Close the zoom modal when the close button is clicked
    zoomClose.addEventListener('click', function () {
        zoomModal.style.display = 'none'; // Hide the zoom modal
    });

    // Close the zoom modal when the background area is clicked
    zoomModal.addEventListener('click', function (event) {
        if (event.target === zoomModal) {
            zoomModal.style.display = 'none'; // Close modal when clicking outside the image
        }
    });

     // Popup functionality
     const popupWindow1 = document.getElementById('popupWindow');
     const openPopupBtn1 = document.querySelector('.popupWindow');
     const closePopupBtn1 = document.getElementById('closePopupBtn');
     const closePopupBtn2 = document.getElementById('closePopupBtn2');
 
     const popupWindow2 = document.getElementById('popupWindow2');
     const openPopupBtn2 = document.querySelector('.popupWindow2');
 
     const popupWindow3 = document.getElementById('popupWindow3');
     const openPopupBtn3 = document.querySelector('.popupWindow3');
 
     // Open popups
     openPopupBtn1.addEventListener('click', function (e) {
         e.preventDefault();
         popupWindow1.style.display = 'flex';
     });
 
     closePopupBtn1.addEventListener('click', function () {
         popupWindow1.style.display = 'none';
     });

     closePopupBtn2.addEventListener('click', function () {
        popupWindow2.style.display = 'none';
    });
 
     openPopupBtn2.addEventListener('click', function (e) {
         e.preventDefault();
         popupWindow2.style.display = 'flex';
     });
 
     openPopupBtn3.addEventListener('click', function (e) {
         e.preventDefault();
         popupWindow3.style.display = 'flex';
     });


    if ($('.flipbook').length) {
        const flipbook = $('.flipbook');

        // Initialize the flipbook
        flipbook.turn({
            width: 800,
            height: 500,
            autoCenter: true,
            display: 'single',
            gradients: true,
            elevation: 50,
            duration: 1000, // Smooth page turn speed
        });

        // Navigate to the previous page
        document.getElementById('prevPage').addEventListener('click', function () {
            flipbook.turn('previous');
        });

        // Navigate to the next page
        document.getElementById('nextPage').addEventListener('click', function () {
            flipbook.turn('next');
        });

    }

});
