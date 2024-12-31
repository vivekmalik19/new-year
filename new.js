document.getElementById('submitBtn').addEventListener('click', function() {
    const userName = document.getElementById('nameInput').value;
    if (userName.trim() !== "") {
        document.getElementById('userName').textContent = userName;
        document.getElementById('greetingMessage').classList.remove('hidden');
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';

        document.getElementById('nameInput').value = "";  // Clear input field
    } else {
        alert("Please enter your name!");
    }
});