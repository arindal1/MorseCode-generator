# Morse Code Translator

## Project Overview
The Morse Code Translator is a web application that translates text to Morse code and vice versa. Additionally, it can convert Morse code to sound and play it. The application is built using HTML, CSS, and JavaScript.

## Features
- **Text to Morse Code Translation:** Input plain text to get the equivalent Morse code.
- **Morse Code to Text Translation:** Input Morse code to get the translated plain text.
- **Morse Code Sound Playback:** Listen to the Morse code translation as audio beeps.

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/arindal1/morse-code-translator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd morse-code-translator
   ```
3. Open `index.html` in your web browser.

### Usage
1. **Enter Text or Morse Code:**
   - Type text or Morse code into the input field.
   - For Morse code input, use dots (.) and dashes (-) separated by spaces. Use a slash (/) to separate words.

2. **Translate:**
   - Click the "Translate" button to get the translation.

3. **Listen to Morse Code:**
   - If the input is text, the Morse code translation will be played as sound after translation.

## Project Structure
```plaintext
morse-code-translator/
│
├── res/
│   ├── git.jpg          # GitHub icon
│   ├── icon.png         # Favicon
│   ├── in.jpg           # LinkedIn icon
│   └── x.jpg            # Twitter icon
│
├── src/
│   ├── style.css        # CSS file for styling
│   └── script.js        # JavaScript file for functionality
│
├── index.html           # Main HTML file
└── README.md            # This README file
```

## Files
- **index.html:** The main HTML file that contains the structure of the web page.
- **src/style.css:** The CSS file for styling the web page.
- **src/script.js:** The JavaScript file containing the logic for translating and playing Morse code.
- **res/:** Directory containing resource files like icons.

## Code Explanation
### HTML (`index.html`)
- Contains the structure of the web page.
- Includes input field for user input and a button to trigger translation.
- Displays the translation output.

### CSS (`src/style.css`)
- Styles the web page with a modern look.
- Ensures responsive design for different screen sizes.

### JavaScript (`src/script.js`)
- Contains Morse code dictionary and reverse dictionary for translations.
- Handles translation logic for text to Morse code and Morse code to text.
- Utilizes Web Audio API to play Morse code sounds.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- [Twitter](https://twitter.com/arindal_17)
- [GitHub](https://github.com/arindal1)
- [LinkedIn](https://www.linkedin.com/in/arindalchar)

## Keep Coding 🚀
