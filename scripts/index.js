// 1. Get all relevant elements from the DOM
const modalWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const titleInputField = editForm.querySelector(".popup__input_type_name");
const descriptionInputField = editForm.querySelector(
    ".popup__input_type_description"
);



// 2. Write functions to toggle modal visibility and submit button
function toggleModalVisibility(){
    modalWindow.classList.toggle("popup_opened");
    if 
    (modalWindow.classList.contains("popup_opened")){
       titleInputField.value = profileTitle.textContent;
       descriptionInputField.value = profileDescription.textContent;

    }


}

function formSubmitHandler(evt){
    evt.preventDefault();

    profileTitle.textContent = titleInputField.value;
    profileDescription.textContent =  descriptionInputField.value ;

    toggleModalVisibility();}

// 3. Connect functions from step 2 to elements in step one with event listeners
editForm.addEventListener('submit', formSubmitHandler); 
editButton.addEventListener('click', toggleModalVisibility); 
closeButton.addEventListener('click', toggleModalVisibility); 