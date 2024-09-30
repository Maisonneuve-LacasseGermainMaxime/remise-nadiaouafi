// Element HTML

const infoUtilisateur = document.querySelector('utilisateur-info');
const infoCommande = document.querySelector('Commande-info');
const resume = document.querySelector('InfoSomaire');

const nextUserButton = document.querySelectorAll("[data-direction='1']");
const backOrderButton = document.querySelectorAll("[data-direction='-1']");
const nextOrderButton = document.querySelectorAll("[data-direction='1']");
const backSummaryButton = document.querySelectorAll("[data-direction='-1']");


const nameInput = document.querySelectorAll('name');
const emailInput = document.querySelectorAll('email');
const phoneInput = document.querySelectorAll('phone');
const adresseInput = document.querySelectorAll('Adresse');
const quantiteInput = document.querySelectorAll('quantite');
const deliveryDateInput = document.querySelectorAll('date');

const nameError = document.querySelectorAll('Erreur-name');
const phoneError = document.querySelectorAll('phone-Erreur');
const emailError = document.querySelectorAll('Email-Erreur');
const AdressError = document.querySelectorAll('Adresser non identifier')
const CodePostaleError = document.querySelectorAll('code Postal-Erreur');
const QuantiteError = document.querySelectorAll('Quantite-Erreur');
const TextError = document.querySelectorAll('texte-errone');


const InfoSomaire = document.querySelectorAll('Info-Somaire');

//Fonctions
function init() {
    formulaire.addEventListener("submit", onSubmit);

// Validation des infos saisi par l'utilisateur.

    function validerInfoUtilisateur() {
        let isValid = true;
        if (nameInput.validity.valid){
            nameError.textContent = 'Nom complet requis et doit contenir uniquement des lettres et des espaces.'; 
            isValid = false; 
        }else {
            nameError.textContent = ''
        }

        if (phoneInput.validity.valid) {
            phoneError.textContent = 'Numéro de téléphone invalide, doit contenir 10 chiffres.';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        if (emailInput.validity.valid) {
            emailError.textContent = 'Adresse email invalide.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (adresseInputdresseInput.validity.valid) {
            AdressError.textContent = 'Adresse non identifier.';
            isValid = false;
        } else {
            AdressError.textContent = '';
        }

        if (CodePostaleInput.validity.valid) {
            CodePostaleError.textContent = 'Code postale fourni non existant.';
            isValid = false;
        } else {
            AdressError.textContent = '';
        }

        

        nextUserButton.disabled = isValid;
    }


   // Validation des infos sur la commande

    function validerInfoCommande() {
        let isValid = true;

        if (quantiteInput.validity.valid) {
            QuantiteError.textContent = 'Quantité requise et doit être un nombre positif.';
            isValid = false;
        } else {
            QuantiteError.textContent = '';
        }

        if (textAreaInput.validity.valid) {
            TextError.textContent = 'pas de caractere.';
            isValid = false;
        } else {
            TextError.textContent = '';
            
        }

        nextUserButton.disabled = isValid;
    }
        
    function miseAjourResume() {
        detailsSommaire.innerHTML = `
            <strong>Nom complet:</strong> ${nameInput.value}<br>
            <strong>Email:</strong> ${emailInput.value}<br>
            <strong>Téléphone:</strong> ${phoneInput.value}<br>
            <strong>Adresse:</strong> ${adresseInput.value}<br>
            <strong>Quantité:</strong> ${quantiteInput.value}<br>
            <strong>Date de livraison:</strong> ${deliveryDateInput.value}<br>
            
        `;

    }

    nextUserButton.addEventListener('click', () => {
        infoUtilisateurSection.style.display = 'none';
        infoCommandeSection.style.display = 'block';
    });

    backOrderButton.addEventListener('click', () => {
        infoCommandeSection.style.display = 'none';
        infoUtilisateurSection.style.display = 'block';
    });


    nextOrderButton.addEventListener('click', () => {
        infoCommandeSection.style.display = 'none';
        resumeSection.style.display = 'block';
        miseAjourResume();
    });


    backSummaryButton.addEventListener('click', () => {
        resumeSection.style.display = 'none';
        infoCommandeSection.style.display = 'block';
    });


    nameInput.addEventListener('input', validerInfoUtilisateur);
    emailInput.addEventListener('input', validerInfoUtilisateur);
    phoneInput.addEventListener('input', validerInfoUtilisateur);
    adresseInput.addEventListener('input', validerInfoUtilisateur);
    quantiteInput.addEventListener('input', validerInfoCommande);
    deliveryDateInput.addEventListener('input', validerInfoCommande);

    form.querySelectorAll('formulaire de commande').addEventListener('submit', function(event) {

    });
    
  }









