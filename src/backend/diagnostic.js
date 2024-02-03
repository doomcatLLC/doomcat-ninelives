document.getElementById('submitButton').addEventListener('click', async function() {
    console.log("Button clicked"); // Check if the event listener is working
    const userInput = document.getElementById('userInput').value;
    console.log("User input:", userInput); // Verify the input is captured

    try {
        const response = await fetch('/api/havid', { // Make sure to use the correct endpoint URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: userInput })
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('havidResponse').value = data.response; // Display Havid's response
            console.log("Response received:", data.response); // Check the response is received
        } else {
            console.log("HTTP Error Response:", response.status);
        }
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
});
