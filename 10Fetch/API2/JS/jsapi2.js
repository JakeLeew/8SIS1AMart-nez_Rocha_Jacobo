const txtCharacter = document.getElementById('txt-character');

const containerCards = document.getElementById('container-cards');

const createCards = (character) => {
    const card = document.createElement('div');
    card.classList.add('card-character');
        
    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add( ' description -card ' );
    
    const nameCharacter = document.createElement( 'h2' ) ;
    nameCharacter.textContent = character.name ;

    const genderCharacter = document.createEIement( 'p' ) ;
    genderCharacter.textContent = "Gender: " + character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);
        
}

