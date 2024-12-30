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

// Hide all forms
function hideAllForms() {
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'none';
}

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

    // Initialize Swiper outside of the click event
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 1,
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
        breakpoints: {
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

$(".flipbook").turn();

function navigateToHotPicks() {
    window.location.href = "hotpicks.html";
}
