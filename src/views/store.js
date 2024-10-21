import { handleGetProductLocalStorage } from "../persistence/localstorage";
export const handleGetProductToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
    
}

export const handleRenderList = (productosIn) =>{

const burgers = productosIn.filter((el) => el.categories === "Hamburgesa");
const fries = productosIn.filter((el) => el.categories === "Papas Fritas");
const drinks = productosIn.filter((el) => el.categories === "Bebidas");

const renderProductGroup = (productos, title)=>{
  console.log(productos);
    if(productos.length>0){
        const productosHTML = productos.map((producto, index)=>{

            return `<div class = 'containerTargetItem' id='product-${producto.categories}-${index}'>
                <div>
                <img src='${producto.image}'/>
                    <div>
                    <h2>${producto.name}</h2>
                    </div>
                    <div class = 'targetProps'>
                    <p><b>Precio:</b> $ ${producto.price}</p>
                    <p><b>Categoria:</b> ${producto.categories}</p>
                    </div>
                </div>
           </div>`;
        });

        return `
            <section class = 'sectionStore'>
           <div class = 'containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class = 'containerProductStore'>
            ${productosHTML.join("")}
            </div>
            </section>
        `;
    }else{
        return ""
    };
};
//Rendrizar cada prod en su categoria

const appContainer = document.getElementById("storeContainer");
appContainer.innerHTML = `
${renderProductGroup(burgers, "Hamburgesa")}
${renderProductGroup(fries, "Papas Fritas")}
${renderProductGroup(drinks, "Bebidas")}
`;

const addEvents = (productsIn)=> {
    
    if(productsIn){
    productsIn.forEach((element, index)=>{
        
        const productContainer = document.getElementById(`product-${element.categories}-${index}`);
        
        productContainer.addEventListener('click',()=>{
            console.log("productoActivo", element);
             });
        });
    }
};


addEvents(burgers);
addEvents(fries);
addEvents(drinks);
};