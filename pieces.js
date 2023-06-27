// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

//Création des quatre balises avec createElement 
const article = pieces[0];

const imageElement = document.createElement (img);
imageElement.scr = article.image;

const nomElement = document.createElement ("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement ("p");
prixElement.innerText = 'Prix: $(article.prix) €'; //littéraux de gabarit (ou template strings, en anglais)

const categorieElement = document.createElement ("p");
categorieElement.innerText = article.categorie;



//Comme parent nous allons prendre la balise section avec la classe “fiches” grâce à querySelector 
const sectionFiches = document.querySelector (".fiches"); //Parent
//Rattachement des éléments à un parent avec la fonction appendChild 
sectionFiches.appendChild (imageElement);
sectionFiches.appendChild (nomElement);
sectionFiches.appendChild (prixElement);
sectionFiches.appendChild (categorieElement);



