// Grab all elements
const frontSelector = document.getElementById('frontSelector');
const eyeSelector = document.getElementById('eyeSelector');
const mouthSelector = document.getElementById('mouthSelector');
const hatSelector = document.getElementById('hatSelector');
const clothesSelector = document.getElementById('clothesSelector');
const backgroundSelector = document.getElementById('backgroundSelector');
const backgroundAestheticSelector = document.getElementById('backgroundAestheticSelector');
const calvinizeBtn = document.getElementById('calvinizeBtn');
const clearBtn = document.getElementById('clearBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Character image containers
const characterBackground = document.getElementById('character-background');
const characterBody = document.getElementById('character-body');
const characterEyes = document.getElementById('character-eyes');
const characterMouth = document.getElementById('character-mouth');
const characterHat = document.getElementById('character-hat');
const characterClothes = document.getElementById('character-clothes');

// Calvinize functionality (randomize button renamed)
calvinizeBtn.addEventListener('click', () => {
    const randomFront = `front${Math.floor(Math.random() * 10) + 1}`;
    const randomEyes = `eyes${Math.floor(Math.random() * 25) + 1}`;
    const randomMouth = `mouth${Math.floor(Math.random() * 10) + 1}`;
    const randomHat = `hat${Math.floor(Math.random() * 30) + 1}`;
    const randomClothes = `clothes${Math.floor(Math.random() * 40) + 1}`;
    const randomBackgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const randomAesthetic = `aesthetic${Math.floor(Math.random() * 10) + 1}`;

    // Update selectors
    frontSelector.value = randomFront;
    eyeSelector.value = randomEyes;
    mouthSelector.value = randomMouth;
    hatSelector.value = randomHat;
    clothesSelector.value = randomClothes;
    backgroundSelector.value = randomBackgroundColor;
    if (backgroundAestheticSelector) {
        backgroundAestheticSelector.value = randomAesthetic;
    }

    updateCharacter();
});

// Clear functionality
clearBtn.addEventListener('click', () => {
    frontSelector.value = 'front1';
    eyeSelector.value = 'eyes1';
    mouthSelector.value = 'mouth1';
    hatSelector.value = 'hat1';
    clothesSelector.value = 'clothes1';
    backgroundSelector.value = '#ffffff';
    if (backgroundAestheticSelector) {
        backgroundAestheticSelector.value = 'aesthetic1';
    }
    updateCharacter();
});

// Update character based on selections
function updateCharacter() {
    // Update front
    characterBody.style.backgroundImage = `url('front/${frontSelector.value}.png')`;

    // Update eyes
    characterEyes.style.backgroundImage = `url('eyes/${eyeSelector.value}.png')`;

    // Update mouth
    characterMouth.style.backgroundImage = `url('mouth/${mouthSelector.value}.png')`;

    // Update hat
    characterHat.style.backgroundImage = `url('hat/${hatSelector.value}.png')`;

    // Update clothes
    characterClothes.style.backgroundImage = `url('clothes/${clothesSelector.value}.png')`;

    // Update background color
    characterBackground.style.backgroundColor = backgroundSelector.value;

    // Update aesthetic (for example, using image filters or special background patterns)
    if (backgroundAestheticSelector) {
        characterBackground.className = `background ${backgroundAestheticSelector.value}`;
    }
}

// Download the final character as an image
downloadBtn.addEventListener('click', () => {
    html2canvas(document.querySelector("#character")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'calvin-character.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
