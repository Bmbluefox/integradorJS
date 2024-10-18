import { handleGetProductLocalStorage } from "../persistence/localstorage";
export const handleGetProductToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
    
}

export const handleRenderList = (productosIn) =>{

const burgers = productosIn.filter((el) => el.categories === "Hamburguesa");
const fries = productosIn.filter((el) => el.categories === "Papas Fritas");
const drinks = productosIn.filter((el) => el.categories === "Bebidas");

const renderProductGroup = (productos, title)=>{
  console.log(productos);
    if(productos.length>0){
        const productosHTML = productos.map((producto, index)=>{

            return `<div>
                <div>
                <img src=${producto.image}/>
                    <div>
                    <h2>${producto.name}</h2>
                    </div>
                    <div>
                    <p><b>Precio:</b> $ ${producto.price}</p>
                    <p><b>Categoria:</b> ${producto.categories}</p>
                    </div>
                </div>
           </div>`;
        });

        return `
            <section>
            <h3>${title}</h3>
            <div>
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
${renderProductGroup(burgers, "Hamburguesa")}
${renderProductGroup(fries, "Papas Fritas")}
${renderProductGroup(drinks, "Bebidas")}
`;

};