import requests
import time

# Turkish Alphabet Letters
alphabet = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H",
            "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P",
            "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"]

# Google Translate TTS API URL
base_url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=tr&client=tw-ob&q="

# Download each letter's pronunciation
for letter in alphabet:
    url = base_url + letter
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})

    if response.status_code == 200:
        filename = f"{letter}.mp3"
        with open(filename, "wb") as file:
            file.write(response.content)
        print(f"✅ Downloaded: {filename}")
    else:
        print(f"❌ Failed to download {letter}")

    time.sleep(1)  # Avoid hitting request limits

print("🎉 All Turkish alphabet letters downloaded successfully!")
