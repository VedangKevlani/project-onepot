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

document.addEventListener('DOMContentLoaded', function() {
    // Buttons for community selection
    const jamaicanBtn = document.getElementById('jamaican-btn');
    const bajanBtn = document.getElementById('bajan-btn');
    const trinidadianBtn = document.getElementById('trinidadian-btn');

    // Chat container and elements
    const chatContainer = document.getElementById('chat-container');
    const communityTitle = document.getElementById('community-title');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendMessageBtn = document.getElementById('send-message-btn');

    // Community names
    const communities = {
        jamaican: 'Jamaican Community',
        bajan: 'Bajan Community',
        trinidadian: 'Trinidadian Community'
    };

    // Add event listeners to community buttons
    jamaicanBtn.addEventListener('click', () => openCommunityChat('jamaican'));
    bajanBtn.addEventListener('click', () => openCommunityChat('bajan'));
    trinidadianBtn.addEventListener('click', () => openCommunityChat('trinidadian'));

    // Function to open chat for a selected community
    function openCommunityChat(community) {
        // Hide the community selection
        document.querySelector('.community-container').style.display = 'none';
        
        // Show chat container
        chatContainer.classList.remove('hidden');
        
        // Set the community title
        communityTitle.textContent = `Chat: ${communities[community]}`;
    }

    // Function to send a message
    sendMessageBtn.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        
        if (messageText) {
            // Create a new message div
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.textContent = messageText;

            // Add the message to the chat box
            chatBox.appendChild(messageDiv);

            // Scroll to the bottom of the chat
            chatBox.scrollTop = chatBox.scrollHeight;

            // Clear the input field
            messageInput.value = '';
        }
    });

    // Allow sending a message by pressing Enter key
    messageInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();  // Prevent new line
            sendMessageBtn.click();  // Trigger the send button click
        }
    });

        // Sample messages to display in the chatbox
    const sampleMessages = [
        { user: "Jamaican User", message: "Hey, anyone tried this new recipe for jerk chicken?" },
        { user: "Bajan User", message: "I just tried making flying fish and cou cou, so good!" },
        { user: "Trinidadian User", message: "Who's up for a doubles recipe tomorrow?" }
    ];

    // Function to render the messages in the chatbox
    function displayMessages() {
        const chatBox = document.getElementById("chat-box");
        
        sampleMessages.forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            messageDiv.innerHTML = `<strong>${msg.user}:</strong> ${msg.message}`;
            chatBox.appendChild(messageDiv);
        });
    }

    // Function to show the chat container when a community button is clicked
    function showChat(communityName) {
        // Hide the community buttons and show the chat container
        document.querySelector('.community-btns').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
        document.getElementById('community-title').textContent = `${communityName} Chat`;

        // Display the sample messages for the selected community
        displayMessages();
    }

    // Add event listeners for each community button
    document.getElementById("jamaican-btn").addEventListener("click", function() {
        showChat("Jamaican");
    });

    document.getElementById("bajan-btn").addEventListener("click", function() {
        showChat("Bajan");
    });

    document.getElementById("trinidadian-btn").addEventListener("click", function() {
        showChat("Trinidadian");
    });


    // Call the function to display the sample messages when the page loads
    document.addEventListener("DOMContentLoaded", function() {
        displayMessages();
    });

     // Send message functionality
     document.getElementById("send-message-btn").addEventListener("click", function() {
        const messageInput = document.getElementById("message-input");
        const newMessage = messageInput.value.trim();

        if (newMessage !== "") {
            const chatBox = document.getElementById("chat-box");
            const newMessageDiv = document.createElement("div");
            newMessageDiv.classList.add("message");
            newMessageDiv.innerHTML = `<strong>You:</strong> ${newMessage}`;
            chatBox.appendChild(newMessageDiv);

            // Clear the input field after sending the message
            messageInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat
        }
    });
});
