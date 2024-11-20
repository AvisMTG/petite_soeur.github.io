// Liste des références de versets
const versets = [
    "matthieu-6-9-10",
    "jean-3-16",
    "psaume-23-1",
    "philippiens-4-13",
    "proverbes-3-5",
    "romains-8-28",
    "esaie-40-31",
    "jacques-1-5"
];

// Récupérer les boutons et la zone d'affichage
const complimentBtn = document.getElementById('compliment-btn');
const versetBtn = document.getElementById('verset-btn');
const output = document.getElementById('output');

// Ajouter des événements aux boutons
complimentBtn.addEventListener('click', () => {
    const compliments = [
        "Tu es incroyable !",
        "Ton sourire illumine la pièce.",
        "Tu es une source d'inspiration.",
        "Tu as un cœur en or.",
        "Tu es plein(e) de talent."
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    output.textContent = randomCompliment;
    output.style.display = "block"; // Pour s'assurer que le texte s'affiche correctement
});

// Générer un verset sous forme d'image
versetBtn.addEventListener('click', () => {
    const randomReference = versets[Math.floor(Math.random() * versets.length)];
    const imageUrl = `https://dailyverses.net/images/fr/sg21/xl/${randomReference}.jpg`;

    // Afficher l'image dans le conteneur
    output.innerHTML = `<img src="${imageUrl}" alt="Verset de la Bible" style="max-width: 100%; height: auto; border-radius: 10px;">`;
    output.style.display = "block";
});
