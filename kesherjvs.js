document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(this);

    // Send the form data to the PHP script using Fetch API
    fetch('send_mail.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data; // Display the response
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
function gotohome(){
    window.location.href = 'https://zamit00.github.io/MyWebSite/';
   
}
