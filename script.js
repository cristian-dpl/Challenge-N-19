/* Nota: No comprendi muy bien como hacer el servidor como el profesor nos explico en clase, cuando lo intente se me hizo
muy complicado, asi que encontre esta otra pagina: https://www.npoint.io/ donde pegas un archivo json y te lo sube 
a la nube, simulando una API*/

// punto 2
document.getElementById("searchForm").addEventListener("submit",(e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value.trim().toLowerCase();
    searchProduct(productName);
});

// punto 3
const searchProduct = async (productName) => {
    try {
        // punto 4
        const respuesta = await fetch('https://api.npoint.io/eaae368b74a5a4270867');
        const data = await respuesta.json();
        // punto 5
        console.log(data)
        const filteredProducts = data.filter(product => product.nombre.toLowerCase().includes(productName));
        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);

            // punto 7
        } else {
            displayMessage("No se encontraron productos.");
        }
    } catch (error) {
        console.error('Error al buscar productos:', error);
        displayMessage("Ocurrió un error al buscar productos.");
    }
};

const displayProducts = (products) =>{
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    // punto 6
    products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.innerHTML = `${product.nombre} - Precio: ${product.precio}`;
        productList.appendChild(productItem);
    });
}

const displayMessage = (message) => {
    const productList = document.getElementById("productList");
    productList.innerHTML = `<li>${message}</li>`;
}