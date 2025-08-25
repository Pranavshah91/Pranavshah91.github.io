const API_TOKEN = "your_actual_token_here"; // paste full token

async function testSamsara() {
  try {
    const response = await fetch("https://api.samsara.com/fleet/drivers", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + API_TOKEN,
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("✅ Success:", data);
  } catch (error) {
    console.error("❌ Fetch failed:", error);
  }
}

testSamsara();
