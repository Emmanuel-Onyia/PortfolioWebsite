const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    // Fetch data from the AWS Lambda endpoint
    let response = await fetch("https://yewmiquilv4eyeep37un75lvc40ufusz.lambda-url.us-east-1.on.aws/");
    
    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    let data = await response.json();

    // Update the counter text
    counter.textContent = `Visits: ${data.counter}`;
  } catch (error) {
    console.error("Error updating counter:", error);
    counter.textContent = "Couldn't read views";
  }
}

updateCounter();