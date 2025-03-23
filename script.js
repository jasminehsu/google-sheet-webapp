const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbynaliQdn3-ym4XeGau2VNqXaraPbYMFZNtm0ny6iSV3jbO-eZOASLWDhGCenuomP1p/exec'
document.getElementById("submitBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;

  if (!input.trim()) {
    alert("Please enter some text!");
    return;
  }

  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: input })
    });

    const result = await response.json();
    alert(`✅ Success! You entered: ${result.received}`);
    document.getElementById("userInput").value = "";
  } catch (error) {
    console.error("❌ Error sending data:", error);
    alert("Something went wrong. Check console.");
  }
});
