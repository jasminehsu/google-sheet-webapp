const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbynaliQdn3-ym4XeGau2VNqXaraPbYMFZNtm0ny6iSV3jbO-eZOASLWDhGCenuomP1p/exec'


document.getElementById("submitBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;

  if (!input.trim()) {
    alert("Please enter some text!");
    return;
  }

  const payload = { text: input };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      redirect: 'follow', // ✅ critical!
      headers: {
        'Content-Type': 'text/plain;charset=utf-8' // ✅ avoids CORS preflight
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    alert(`✅ Success! Received: ${result.received}`);
    document.getElementById("userInput").value = "";
  } catch (err) {
    console.error("❌ Failed to send:", err);
    alert("Something went wrong!");
  }
});
