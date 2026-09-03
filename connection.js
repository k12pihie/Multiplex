const EVENTS_URL = "https://script.google.com/macros/s/AKfycbzx0u4TmwyDUtzLA1SU8Ektg8IObAVJ_yg5aYuGmFU9E1kgW_OeR88Dx1jz74KUZkXRPA/exec";

async function loadEvents() {
    try {
        const response = await fetch(EVENTS_URL);

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        console.log("Events JSON:", data);

        return data;

    } catch (error) {
        console.error("Failed to load events:", error);
        return null;
    }
}

loadEvents();