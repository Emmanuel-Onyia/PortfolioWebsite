const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try 
  {
    console.log("Fetching data from Lambda...");
    let response = await fetch("https://yewmiquilv4eyeep37un75lvc40ufusz.lambda-url.us-east-1.on.aws/");
    console.log("Response received:", response);

    if (!response.ok) 
      {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    let data = await response.json();
    console.log("Parsed data:", data);

    counter.textContent = `Visits: ${data.counter}`;
  } catch (error) 
  {
    console.error("Error updating counter:", error);
    counter.textContent = `Error: ${error.message}`;
  }
}

updateCounter();


