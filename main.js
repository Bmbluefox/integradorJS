import { setLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { handleGetProductToStore } from "./src/views/store";
import './style.css'

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
};


export let productoActivo = null;
export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
};

handleGetProductToStore();
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
    };

export const openModal = ()=>{
   const modal = document.getElementById('modalPopup');
   modal.style.display = "flex";

   if(productoActivo){
    const name = document.getElementById('nombreprod'),
    image = document.getElementById('imagenprod'),
    price = document.getElementById('precioprod'),
    categories = document.getElementById('categoriaprod');
    image.value = productoActivo.image;
 price.value = productoActivo.price;
 name.value = productoActivo.name;
 categories.value = productoActivo.categories;
   }
};

export const closeModal = ()=>{
    const modal = document.getElementById('modalPopup');
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
 };

const resetModal = ()=>{
    const name = document.getElementById('nombreprod'),
 image = document.getElementById('imagenprod'),
 price = document.getElementById('precioprod'),
 categories = document.getElementById('categoriaprod');
 image.value = "";
 price.value = 0;
 name.value = "";
 categories.value = "Seleccione una categoria";
};
/* aceptar el producto a agregar o modificar*/

const acceptButton = document.getElementById('BotonAceptar');
acceptButton.addEventListener('click',()=>{
    handleSaveorModifyElement();
});
const handleSaveorModifyElement = () => {
const name = document.getElementById('nombreprod').value,
 image = document.getElementById('imagenprod').value,
 price = document.getElementById('precioprod').value,
 categories = document.getElementById('categoriaprod').value;

 let object = null;

 if(productoActivo){
    object = {
    ... productoActivo,
    name,
    image,
    price,
    categories,
    };
 }else{
 object = {
    id: new Date().toISOString(),
    name,
    image,
    price,
    categories
};
 };

setLocalStorage(object);
handleGetProductToStore();
closeModal();
}

const buttonSearch = document.getElementById('buttonSearch');

buttonSearch.addEventListener('click', ()=>{
handleSearchProductByName();
});

