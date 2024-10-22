import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage()

    switch(categoryIn){

        case categoriaActiva:
            handleRenderList(products);
            break;
        case "todo":
            handleRenderList(products);
            break;
        case "Hamburgesa" :
        case "Papas Fritas" :
        case "Bebidas" :
            const result = products.filter((el)=> el.categories === categoryIn);
            handleRenderList(result);
            break;
        default:
            break;
        case "MayorPrecio":
            const resultPrecio = products.sort((a,b)=>b.price - a.price);
            handleRenderList(resultPrecio);
            break;
        case "MenorPrecio":
            const resultPrecio2 = products.sort((a,b)=>a.price - b.price);
            handleRenderList(resultPrecio2);
            break;

    }
}






export const renderCategories = () => {
        const ulList = document.getElementById("listFilter");
        ulList.innerHTML = `
        <li id="todo"> Todos los productos</li>
        <li id="Hamburgesa"> Hamburguesas</li>
        <li id="Papas Fritas"> Papas Fritas</li>
        <li id="Bebidas"> Bebidas</li>
        <li id="MayorPrecio"> Mayor precio</li>
        <li id="MenorPrecio"> Menor precio</li>
        `;

        const liElements = ulList.querySelectorAll("li");
        liElements.forEach((liElement)=>{
            liElement.addEventListener('click',()=>{
                handleClick(liElement);
            });
        });
        const handleClick = (elemento)=>{
            handleFilterProductsByCategory(elemento.id);
            liElements.forEach((el)=>{
                if(el.classList.contains('liActive')){
                    el.classList.remove('liActive');
                }else{
                    if(elemento === el){
                        el.classList.add('liActive');
                    }
                }
            })
        }
};