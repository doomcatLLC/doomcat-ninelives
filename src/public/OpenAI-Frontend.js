<!DOCTYPE html>
<html>
<head>
    <title>Chat with Havid</title>
    <style>
        textarea {
            width: 300px;
            height: 100px;
            margin-bottom: 10px;
        }
        button {
            padding: 5px 10px;
        }
    </style>
</head>
<body>
    <textarea id="userInput" placeholder="Ask Havid anything..."></textarea>
    <button id="submitButton">Ask Havid</button>
    <textarea id="havidResponse" placeholder="Havid's response will appear here..." readonly></textarea>

    <script>
        document.getElementById('submitButton').addEventListener('click', async function() {
            const userInput = document.getElementById('userInput').value;
            const responseBox = document.getElementById('havidResponse');
            responseBox.value = "Thinking..."; // Placeholder text while waiting for response

            const response = await fetch('/api/havid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userInput })
            });

            if (response.ok) {
                const data = await response.json();
                responseBox.value = data.response; // Display Havid's response
            } else {
                responseBox.value = "Sorry, I couldn't process that. Try again later.";
            }
        });
    </script>
</body>
</html>
