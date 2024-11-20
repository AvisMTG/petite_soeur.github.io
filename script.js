// Liste des compliments
const compliments = [
    "Tu es incroyable !",
    "Ton sourire illumine la pièce.",
    "Tu es une source d'inspiration.",
    "Tu as un cœur en or.",
    "Tu es plein(e) de talent."
];

// Liste des versets
const versets = [
    "Psaume 23:1 - L'Éternel est mon berger : je ne manquerai de rien.",
    "Philippiens 4:13 - Je puis tout par celui qui me fortifie.",
    "Jean 3:16 - Car Dieu a tant aimé le monde qu'il a donné son Fils unique.",
    "Proverbes 3:5 - Confie-toi en l'Éternel de tout ton cœur.",
    "Romains 8:28 - Tout concourt au bien de ceux qui aiment Dieu."
];

// Récupérer les boutons et la zone d'affichage
const complimentBtn = document.getElementById('compliment-btn');
const versetBtn = document.getElementById('verset-btn');
const output = document.getElementById('output');

// Ajouter des événements aux boutons
complimentBtn.addEventListener('click', () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    output.textContent = randomCompliment;
});

versetBtn.addEventListener('click', () => {
    const randomVerset = versets[Math.floor(Math.random() * versets.length)];
    output.textContent = randomVerset;
});
