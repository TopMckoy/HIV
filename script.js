function openDonationModal() {
    // You can implement a modal or a redirection to a donation platform here
    // For example: window.location.href = 'https://www.gofundme.com/donate';
  }
  
  document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.querySelector('#messageForm textarea').value;
    // Here you can send the message to your server or perform other actions
    console.log('Message submitted:', message);
    // Reset the form after submission
    document.querySelector('#messageForm textarea').value = '';
  });
  