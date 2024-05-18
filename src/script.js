document.addEventListener("DOMContentLoaded", () => {
  // Morse Code Dictionary
  const morseCode = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..",
    J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
    S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
    0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....",
    7: "--...", 8: "---..", 9: "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..",
    "'": ".----.", "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...",
    ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", _: "..--.-",
    '"': ".-..-.", $: "...-..-", "@": ".--.-.", " ": "/",
  };

  // Reverse the morseCode dictionary to get a lookup for Morse code to letters and numbers
  const reverseMorseCode = {};
  for (const key in morseCode) {
    if (morseCode.hasOwnProperty(key)) {
      const value = morseCode[key];
      reverseMorseCode[value] = key;
    }
  }

  const inputField = document.getElementById("input");
  const translateButton = document.getElementById("translate");
  const outputField = document.getElementById("output");

  // Web Audio API setup
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const playMorseCodeSound = (morseCode) => {
    let time = audioCtx.currentTime;

    const dotDuration = 0.1; // Duration of a dot
    const dashDuration = 0.3; // Duration of a dash
    const spaceDuration = 0.2; // Space between dots/dashes
    const letterSpaceDuration = 0.6; // Space between letters
    const wordSpaceDuration = 1.2; // Space between words

    morseCode.split("").forEach((symbol) => {
      if (symbol === ".") {
        playBeep(time, dotDuration);
        time += dotDuration + spaceDuration;
      } else if (symbol === "-") {
        playBeep(time, dashDuration);
        time += dashDuration + spaceDuration;
      } else if (symbol === "/") {
        time += wordSpaceDuration;
      } else {
        time += letterSpaceDuration;
      }
    });
  };

  const playBeep = (startTime, duration) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); // Frequency in hertz
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  };

  translateButton.addEventListener("click", () => {
    const inputText = inputField.value.trim().toUpperCase();
    if (inputText === "") {
      outputField.textContent = "No Input Provided";
      return;
    }

    if (inputText.includes(".") || inputText.includes("-")) {
      // Input contains dots or dashes, assuming it's Morse code and translating to text
      const morseWords = inputText.split(" / ");
      const translatedWords = morseWords.map((morseWord) => {
        const morseChars = morseWord.split(" ");
        return morseChars.map((morseChar) => {
          return reverseMorseCode[morseChar] || "";
        }).join("");
      });
      outputField.textContent = translatedWords.join(" ");
    } else {
      // Input is text, translating to Morse Code
      const words = inputText.split(" ");
      const translatedWords = words.map((word) => {
        const chars = word.split("");
        const morseChars = chars.map((char) => {
          return morseCode[char] || "";
        });
        return morseChars.join(" ");
      });
      const morseTranslation = translatedWords.join(" / ");
      outputField.textContent = morseTranslation;
      playMorseCodeSound(morseTranslation); // Play the Morse code sound
    }
  });
});
