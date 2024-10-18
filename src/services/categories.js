export const renderCategories = () => {
        const ulList = document.getElementById("listFilter");
        ulList.innerHTML = `
        <li id="todo"> Todos los productos</li>
        <li id="Hamburgesas"> Hamburguesas</li>
        <li id="Papas"> Papas Fritas</li>
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