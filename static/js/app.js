document.getElementById('app').innerHTML = `
    <h1>Welcome to Priyanka AI</h1>
    <form id="chat-form">
        <input type="text" id="message" placeholder="Type your message">
        <button type="submit">Send</button>
    </form>
    <div id="chat-log"></div>
`;

document.getElementById('chat-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    const response = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    document.getElementById('chat-log').innerHTML += `<p><b>You:</b> ${message}</p><p><b>Priyanka AI:</b> ${data.response}</p>`;
    document.getElementById('message').value = '';
});
