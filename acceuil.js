// Affichage de la liste de produits
//Création du tableau d'objets pour les produits

const produits = [

    {
        id : 1,
        produit :"Serum" ,
        nom :"serum du Jour",
        prix : 35 ,
        application : "jour",
        enStock : true ,
        scr : "assets/img/Serum.webp",
    
    },

    {
        id : 2,
        produit :"Serum Hydratant" ,
        nom :"serum du nuit",
        prix : 40 ,
        application : "nuit",
        enStock : true,
        scr : "assets/img/Serum Hydratant.webp",
    },
    {
        id : 3,
        produit :"Creme de nuit" ,
        nom :"Creme de nuit",
        prix : 90 ,
        application : "nuit",
        enStock : true,
        scr : "assets/img/Creme de nuit.webp",

    },
    {
        id : 4,
        produit :"Creme Hydratante" ,
        nom :"Creme Hydratante",
        prix : 120,
        application : "jour",
        enStock : true,
        scr : "assets/img/Creme Hydratante.webp",

    },
    {
        id : 5,
        produit :"masques pour visage" ,
        nom :"Masques pour visage",
        prix : 135,
        application : "jour",
        enStock : true,
        scr : "assets/img/masques pour visage.webp",

    },
]

// Création du tableau d'objets pour les liens

const lienspages = [
    { 
        url: 'index.html',
        text: 'Accueil', 
 },
    {
        url: 'contact.html', 
        text: 'Contact',
     },

    { 
        url: 'apropos.html',
        text: 'À propos',  }
];

// === les elements HTML
const liensNavigation = document.querySelector('.nav__liste');
const pageCourante = document.location.pathname.split('/').pop(); 
const listeProduitsHTML = document.querySelector(".liste-produits");


//Fonctions
function init (){
    // Génération des onglets de navigation 

function genererNavigation(Navigation) {
    const ul = document.createElement('ul');
    ul.classList.add('nav__liste');


    Navigation .forEach(lien=> {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = lien.text;
        a.href = lien.url;
       
        
    });
}
genererNavigation(Navigation);


// Mise en évidence du lien de la page courante 

function afficherPageCourante(liens) {
    const liens = liensNavigation.querySelectorAll('a');
    liens.forEach(lien => {
        if (lien.getAttribute('href') ===pageCourante) {
            lien.classList.add('page-courante'); 
        }
    });
}
afficherPageCourante(liens);

//Génération de la liste de produits :

function genererListeProduits(produits) {
    produits.forEach(produit => {
        const div = document.createElement('div');
        div.classList.add('produit');
        div.id = `
            <img src="${produit.image}" alt="${produit.nom}">
            <h3>${produit.nom}</h3>
            <p>${produit.description}</p>
            <p>Prix: ${produit.prix}$</p>
        `;
        listeProduitsHTML.appendChild(div);
    });

}
genererListeProduits(produits) 


function afficherDetail(produit) {
    const produitDescriptionElement = document.querySelector('.produit-description'); 
    produitDescriptionElement.innerHTML = `
        <strong>${produit.nom}</strong><br>
        Prix:$ ${produit.prix.toFixed(2)}
    `;
}
afficherDetail(produit) 

// Ajout des fonctionnalités de tri

function selectionproduit(filtre) {
    if (filtre === 'prix-moins-plus') {
        produits.sort((a, b) => a.price - b.price);

    } else if (filtre === 'name-a-z') {
        produits.sort((a, b) => a.nom.localeCompare(b.nom));
    } else if (filtre === 'name-z-a') {
        produits.sort((a, b) => a.nom.localeCompare(b.nom));
    } 
   
}
selectionproduit(filtre);
}
//Exécution
init();
