
// Mostrar u ocultar el botón de desplazamiento hacia arriba
window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scroll-top');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Función para desplazar hacia arriba
document.getElementById('scroll-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const categorias = document.querySelectorAll('.categoria');
    
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            // Hide all categories
            categorias.forEach(cat => {
                cat.style.display = 'none';
            });
            
            // Show the selected category
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show default category (optional)
    document.querySelector('.categoria-btn').click();
});







const products = [
    { id: 1, name: 'Sombrero Zenú', price: 450000.000, section: 'sombreros', img: 'img/slider-2.png', description: 'Hermoso sombrero elaborado artesanalmente en caña flecha.' },
    { id: 2, name: 'Bolso Zenú', price: 160000, section: 'bolso', img: 'img/bolso.jpg', description: 'Elegantes bolsos tejidos a mano en caña flecha.' },
    { id: 3, name: 'Monedero Zenú', price: 80000, section: 'monederos', img: 'img/slider-4.png', description: 'Monedero artesanal con cierre, tejido en caña flecha.' },
    { id: 4, name: 'Aretes Zenú', price: 46000, section: 'aretes', img: 'img/arete.jpg ', description: 'Aretes artesanales, tejido en caña flecha.' }
    // Más productos
];

const productsSection = document.querySelector('.products');

const renderProducts = () => {
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.dataset.id = product.id;
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">$${product.price.toFixed(2)}</span>
            
        `;
        productsSection.appendChild(productElement);
    });
};

renderProducts();


