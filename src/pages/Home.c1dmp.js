import { getOpenAIResponse } from 'backend/openai-backend.jsw'; // Adjust the path as needed

$w.onReady(function () {
    $w("#submitButton").onClick(() => {
        const userPrompt = $w("#text3").value; // Get the user's input from the updated input field
        // Call the backend function and process the response
        getOpenAIResponse(userPrompt)
            .then(response => {
                $w("#aiResponse").text = response.choices[0].text; // Display the AI response
            })
            .catch(error => {
                console.error("Error fetching response:", error);
                $w("#aiResponse").text = "Sorry, there was an error processing your request.";
            });
    });
});