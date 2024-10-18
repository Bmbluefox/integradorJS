import { setLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import './style.css'


renderCategories();

const buttonAdd = document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click', ()=>{
openModal();
});

/*Cancelar el producto a agregar*/

const buttonCancel = document.getElementById('botonCancelar');

botonCancelar.addEventListener('click', ()=>{
    handleCancelButton();
    });

    const handleCancelButton = () =>{
        closeModal();
    }

const openModal = ()=>{
   const modal = document.getElementById('modalPopup');
   modal.style.display = "flex";
}

const closeModal = ()=>{
    const modal = document.getElementById('modalPopup');
    modal.style.display = "none";
 }


/* aceptar el producto a agregar o modificar*/

const acceptButton = document.getElementById('BotonAceptar');
acceptButton.addEventListener('click',()=>{
    handleSaveorModifyElement();
})
const handleSaveorModifyElement = () => {
const name = document.getElementById('nombreprod').value,
 image = document.getElementById('imagenprod').value,
 price = document.getElementById('precioprod').value,
 category = document.getElementById('categoriaprod').value;


let object = {
    id: new Date().toISOString(),
    name,
    image,
    price,
    category
};
setLocalStorage(object);

closeModal();
}



