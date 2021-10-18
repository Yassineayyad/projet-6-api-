const multer = require('multer');

// On crée un dictionnaire pour définire le format des images
// Donc la creation d'un objet pour ajouter une extention en fonction du type mime du ficher
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

// On crée un objet de configuration pour préciser à multer où enregistrer les fichiers images et les renommer
const storage = multer.diskStorage({
  // On mets la destination d'enregistrement des images
  destination: (req, file, callback) => {
    // On passe le dossier images qu'on a créé dans le backend
    callback(null, "images");
  },
  // On dit à multer quel nom de fichier on utilise pour éviter les doublon
  filename: (req, file, callback) => {
    // On génère un nouveau nom avec le nom d'origine, on supprime les espaces (white space avec split) et on insère des underscores à la place
    let name = file.originalname.split(" ").join("_");
    let extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");