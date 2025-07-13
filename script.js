// Datos de productos
const productos = [
    // ROPA (13 productos)
    {
        id: 1,
        nombre: "Camiseta Básica",
        precio: 15.99,
        imagen: "https://i.postimg.cc/h42ML8r2/Whats-App-Image-2025-07-05-at-11-12-25-4.jpg",
        descripcion: "Camiseta de algodón 100% orgánico, suave al tacto y transpirable. Perfecta para uso diario con corte clásico y costuras reforzadas. Disponible en colores neutros que combinan con todo.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        nombre: "Jeans Clásicos",
        precio: 35.99,
        imagen: "https://i.postimg.cc/CxkjQbGT/Whats-App-Image-2025-07-05-at-11-12-25-5.jpg",
        descripcion: "Jeans de mezclilla premium con lavado stonewash, corte recto y bolsillos funcionales. Fabricados con denim de alta calidad que mantiene su forma y color después de múltiples lavados.",
        categoria: "ropa",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: 3,
        nombre: "Chaqueta de Cuero",
        precio: 100.99,
        imagen: "https://i.postimg.cc/pX07db4X/Whats-App-Image-2025-07-05-at-11-12-25-3.jpg",
        descripcion: "Chaqueta de cuero genuino con forro interior suave, cierre frontal con cremallera YKK y bolsillos internos y externos. Estilo motociclista con protecciones en hombros y codos.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        nombre: "Hoodie oversize",
        precio: 45.99,
        imagen: "https://i.postimg.cc/8zhh01Ty/Whats-App-Image-2025-07-04-at-21-02-13.jpg",
        descripcion: "Sudadera oversize con capucha amplia y bolsillo frontal tipo canguro. Tejido de algodón suave con interior afelpado. Estilo urbano y cómodo para uso diario.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 5,
        nombre: "Camisa Formal",
        precio: 20.99,
        imagen: "https://i.postimg.cc/9MvKCGnP/Whats-App-Image-2025-07-04-at-21-02-14-1.jpg",
        descripcion: "Camisa de vestir en algodón premium con corte entallado. Cuello italiano y puños ajustables. Ideal para oficina o eventos formales.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        nombre: "camisa de cuadros",
        precio: 30.99,
        imagen: "https://i.postimg.cc/fys4Ycfz/Whats-App-Image-2025-07-05-at-11-12-25-2.jpg",
        descripcion: "La camisa de cuadros es un básico infaltable en cualquier armario. Hecha con algodón suave y resistente, ofrece frescura y comodidad durante todo el día",
        categoria: "ropa",
        tallas: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 7,
        nombre: "Pantalón Deportivo",
        precio: 30.99,
        imagen: "https://i.postimg.cc/mrhTry8K/Whats-App-Image-2025-07-05-at-11-12-25-1.jpg",
        descripcion: "Pantalón jogger de poliéster con tecnología Dri-FIT. Cintura elástica con cordón ajustable. Ideal para ejercicio y uso casual.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 8,
        nombre: "skinny jeans",
        precio: 30.99,
        imagen: "https://i.postimg.cc/7Zf3Mp66/Whats-App-Image-2025-07-05-at-11-12-25.jpg",
        descripcion: "Nuestros skinny jeans están diseñados para ofrecer un ajuste ceñido que realza tu figura sin sacrificar la comodidad.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
   {
        id: 9,
        nombre: "Pantalón Chino",
        precio: 49.99,
        imagen: "https://i.postimg.cc/2yRVD1tZ/Whats-App-Image-2025-07-11-at-20-56-33.jpg",
        descripcion: "Pantalón tipo chino de corte slim fit, disponible en varios tonos.",
        categoria: "ropa",
        tallas: ["30", "32", "34", "36"]
    },
    {
        id: 10,
        nombre: "Chaqueta Casual",
        precio: 69.99,
        imagen: "https://i.postimg.cc/QxqV2xJF/Whats-App-Image-2025-07-11-at-20-56-33-1.jpg",
        descripcion: "Chaqueta ligera ideal para entretiempo, diseño moderno.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 11,
        nombre: "Hoodie Deportivo",
        precio: 39.99,
        imagen: "https://i.postimg.cc/FFyKSsqT/Whats-App-Image-2025-07-11-at-20-56-34.jpg",
        descripcion: "Sudadera con capucha, ajuste cómodo y tejido transpirable.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        nombre: "Polo Rayado",
        precio: 29.99,
        imagen: "https://i.postimg.cc/VL4L7ZzM/Whats-App-Image-2025-07-11-at-20-56-34-1.jpg",
        descripcion: "Polo de algodón con diseño rayado y cuello clásico.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 13,
        nombre: "Suéter Ligero",
        precio: 44.99,
        imagen: "https://i.postimg.cc/rwPyTd0w/Whats-App-Image-2025-07-11-at-20-56-34-2.jpg",
        descripcion: "Suéter liviano, cuello en V, tejido suave y elegante.",
        categoria: "ropa",
        tallas: ["S", "M", "L", "XL"]
    },
    
    // ZAPATOS (15 productos)
  {
    id: 14,
    nombre: "Sneakers Air Max",
    precio: 129.99,
    imagen: "https://i.postimg.cc/6pgKSDg7/Whats-App-Image-2025-07-11-at-20-56-35.jpg",
    descripcion: "Zapatillas Nike Air Max con amortiguación visible",
    categoria: "zapatos",
    marca: "Nike",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 15,
    nombre: "Ultraboost 22",
    precio: 149.99,
    imagen: "https://i.postimg.cc/ZnHZM0zZ/Whats-App-Image-2025-07-11-at-20-56-35-1.jpg",
    descripcion: "Zapatos Adidas Ultraboost con tecnología Boost para máximo retorno de energía y comodidad.",
    categoria: "zapatos",
    marca: "Adidas",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 16,
    nombre: "Chuck Taylor All Star",
    precio: 74.99,
    imagen: "https://i.postimg.cc/vH8G675m/Whats-App-Image-2025-07-11-at-20-56-35-2.jpg",
    descripcion: "Zapatillas clásicas de lona con suela de goma, ícono de la cultura urbana.",
    categoria: "zapatos",
    marca: "Converse",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 17,
    nombre: "Old Skool Classic",
    precio: 69.99,
    imagen: "https://i.postimg.cc/gky41R73/Whats-App-Image-2025-07-11-at-21-09-04.jpg",
    descripcion: "Zapatillas Vans con diseño skate y banda lateral icónica.",
    categoria: "zapatos",
    marca: "Vans",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 18,
    nombre: "React Infinity Run",
    precio: 159.99,
    imagen: "https://i.postimg.cc/HkBzkmdx/Whats-App-Image-2025-07-11-at-21-09-05.jpg",
    descripcion: "Running shoes con espuma React, soporte para largas distancias.",
    categoria: "zapatos",
    marca: "Nike",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 19,
    nombre: "Classic Leather",
    precio: 89.99,
    imagen: "https://i.postimg.cc/zfQkTkLY/Whats-App-Image-2025-07-11-at-21-09-05-1.jpg",
    descripcion: "Reebok clásico de cuero, diseño retro ideal para looks casuales.",
    categoria: "zapatos",
    marca: "Reebok",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 20,
    nombre: "RS-X Reinvent",
    precio: 119.99,
    imagen: "https://i.postimg.cc/HnD4hs4S/Whats-App-Image-2025-07-11-at-21-09-05-2.jpg",
    descripcion: "Zapatillas Puma RS-X con diseño futurista y suela robusta.",
    categoria: "zapatos",
    marca: "Puma",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 21,
    nombre: "Sk8-Hi High Top",
    precio: 79.99,
    imagen: "https://i.postimg.cc/8cRBQQZT/Whats-App-Image-2025-07-11-at-21-09-05-3.jpg",
    descripcion: "Zapatillas altas Vans, acolchadas y con diseño para skate.",
    categoria: "zapatos",
    marca: "Vans",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 22,
    nombre: "Gel-Kayano 29",
    precio: 169.99,
    imagen: "https://i.postimg.cc/VsnFbnm2/Whats-App-Image-2025-07-11-at-21-09-06.jpg",
    descripcion: "Calzado de running ASICS con tecnología de estabilidad y gel.",
    categoria: "zapatos",
    marca: "ASICS",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 23,
    nombre: "FuelCell Rebel",
    precio: 139.99,
    imagen: "https://i.postimg.cc/9QFPSkZj/Whats-App-Image-2025-07-11-at-21-09-06-1.jpg",
    descripcion: "Zapatillas New Balance con espuma FuelCell ",
    categoria: "zapatos",
    marca: "New Balance",
    tallas: ["38", "39", "40", "41", "42", "43", "44"]
  },
  {
    id: 24,
    nombre: "Gel-Lyte III",
    precio: 119.99,
    imagen: "https://i.postimg.cc/xdXvjb6x/Whats-App-Image-2025-07-11-at-21-09-06-2.jpg",
    descripcion: "Diseño clásico de ASICS con lengüeta dividida y estilo retro.",
    categoria: "zapatos",
    marca: "ASICS",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 25,
    nombre: "Cloud X",
    precio: 149.99,
    imagen: "https://i.postimg.cc/9XZvFDSQ/Whats-App-Image-2025-07-11-at-21-20-23.jpg",
    descripcion: "Zapatos de entrenamiento On con amortiguación CloudTec para movimientos dinámicos.",
    categoria: "zapatos",
    marca: "On Running",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 26,
    nombre: "ZX 2K Boost",
    precio: 139.99,
    imagen: "https://i.postimg.cc/kXjwn9n5/Whats-App-Image-2025-07-11-at-21-20-23-1.jpg",
    descripcion: "Zapatillas Adidas con estilo moderno y entresuela Boost completa.",
    categoria: "zapatos",
    marca: "Adidas",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 27,
    nombre: "Slip-On Checkerboard",
    precio: 59.99,
    imagen: "https://i.postimg.cc/GmVQyQTw/Whats-App-Image-2025-07-11-at-21-20-23-2.jpg",
    descripcion: "Vans sin cordones con diseño a cuadros, fáciles de poner y súper cómodas.",
    categoria: "zapatos",
    marca: "Vans",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 28,
    nombre: "Zerogrand Wingtip",
    precio: 169.99,
    imagen: "https://i.postimg.cc/bJHH4fCp/Whats-App-Image-2025-07-11-at-21-20-24.jpg",
    descripcion: "Zapato híbrido entre formal y deportivo con tecnología de amortiguación avanzada, ideal para planes mas especiales y de importancia, dejaras sorprendido a todos.",
    categoria: "zapatos",
    marca: "Cole Haan",
    tallas: ["38", "39", "40", "41", "42", "43"]
  },
  
    // ACCESORIOS (10 productos)
    {
        id: 29,
        nombre: "Reloj Elegante",
        precio: 149.99,
        imagen: "https://i.postimg.cc/kXVRbdQG/Whats-App-Image-2025-07-11-at-21-20-24-1.jpg",
        descripcion: "Reloj de pulsera con caja de acero inoxidable y cristal mineral resistente a rayones. Movimiento de cuarzo japonés, correa de cuero genuino y resistente al agua hasta 50m.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 30,
        nombre: "Gorra Deportiva",
        precio: 19.99,
        imagen: "https://i.postimg.cc/PqHC9pBv/Whats-App-Image-2025-07-11-at-21-20-24-2.jpg",
        descripcion: "Gorra ajustable con cierre de velcro, fabricada en poliéster de secado rápido. Visera curva y banda interior absorbente de sudor. Perfecta para deportes al aire libre y protección solar.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 31,
        nombre: "Mochila Urbana",
        precio: 69.99,
        imagen: "https://i.postimg.cc/br4JTsxJ/Whats-App-Image-2025-07-11-at-21-20-25.jpg",
        descripcion: "Mochila con compartimento acolchado para laptop de 15', múltiples bolsillos organizadores y puerto USB externo. Material impermeable con cremalleras YKK",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 32,
        nombre: "Cinturón de Cuero",
        precio: 44.99,
        imagen: "https://i.postimg.cc/BZzXswr0/Whats-App-Image-2025-07-11-at-21-20-25-1.jpg",
        descripcion: "Cinturón de cuero genuino con hebilla metálica clásica. Ancho de 3.5cm, disponible en varios agujeros para ajuste perfecto. Elegante y duradero.",
        categoria: "accesorios",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 33,
        nombre: "Gafas de Sol",
        precio: 79.99,
        imagen: "https://i.postimg.cc/DwPG2PQP/Whats-App-Image-2025-07-11-at-21-36-33.jpg",
        descripcion: "Gafas de sol con protección UV400 y lentes polarizadas. Montura de acetato resistente y diseño clásico aviador. Incluye estuche y paño de limpieza.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 34,
        nombre: "Bufanda",
        precio: 89.99,
        imagen: "https://i.postimg.cc/cHn4JsyG/Whats-App-Image-2025-07-11-at-21-36-33-1.jpg",
        descripcion: "Bufanda de cachemira pura, suave y ligera. Medidas generosas de 180x70cm. Disponible en colores neutros que combinan con cualquier outfit.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 35,
        nombre: "Billetera",
        precio: 59.99,
        imagen: "https://i.postimg.cc/90PmGJQx/Whats-App-Image-2025-07-11-at-21-36-34.jpg",
        descripcion: "Billetera de piel genuina con múltiples compartimentos para tarjetas y billetes. Diseño minimalista con protección RFID integrada para mayor seguridad.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 36,
        nombre: "Collar",
        precio: 119.99,
        imagen: "https://i.postimg.cc/g0wGMY0L/Whats-App-Image-2025-07-11-at-21-36-34-1.jpg",
        descripcion: "Collar de plata 925 con cadena delicada y dije minimalista. Cierre de seguridad y acabado brillante. Elegante para uso diario o ocasiones especiales.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 37,
        nombre: "Pañuelo de Seda",
        precio: 34.99,
        imagen: "https://i.postimg.cc/9Q02MWZg/Whats-App-Image-2025-07-11-at-21-36-34-2.jpg",
        descripcion: "Pañuelo cuadrado de seda natural con estampado artístico. Versátil para usar al cuello, en el cabello o como accesorio de bolso. Calidad premium.",
        categoria: "accesorios",
        tallas: ["Único"]
    },
    {
        id: 38,
        nombre: "Sombrero",
        precio: 94.99,
        imagen: "https://i.postimg.cc/YSmw6bX1/Whats-App-Image-2025-07-11-at-21-36-34-3.jpg",
        descripcion: "Sombrero tejido a mano con paja toquilla auténtica. Ala ancha para protección solar superior. Clásico atemporal perfecto para vacaciones y verano.",
        categoria: "accesorios",
        tallas: ["S", "M", "L"]
    }
    ]
// Variables globales
let carrito = [];
let productosFiltrados = productos;
let paginaActual = 1;
const productosPorPagina = 8;
let enPerfil = false;
let historialPedidos = JSON.parse(localStorage.getItem("historialPedidos")) || [];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    mostrarProductos();
    actualizarCarrito();
    crearPaginacion();

    const btnInicio = document.getElementById("btn-inicio");
    if (btnInicio) btnInicio.addEventListener("click", mostrarTienda);

    const misPedidos = document.getElementById("btn-mis-pedidos");
    if (misPedidos) misPedidos.addEventListener("click", mostrarHistorialPedidos);

    const inputFoto = document.getElementById("input-foto");
    const imgPerfil = document.getElementById("foto-perfil");

    if (inputFoto && imgPerfil) {
        inputFoto.addEventListener("change", function () {
            const archivo = inputFoto.files[0];
            if (archivo) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imgPerfil.src = e.target.result;
                    localStorage.setItem("fotoPerfil", e.target.result);
                };
                reader.readAsDataURL(archivo);
            }
        });

        const guardada = localStorage.getItem("fotoPerfil");
        if (guardada) imgPerfil.src = guardada;
    }
});

function mostrarProductos() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';
    const inicio = (paginaActual - 1) * productosPorPagina;
    productosFiltrados.slice(inicio, inicio + productosPorPagina).forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p class="descripcion">${p.descripcion}</p>
            <p><strong>$${p.precio}</strong></p>
            <label>Talla:</label>
            <select id="talla-${p.id}" class="selector-talla">
                ${p.tallas.map(t=>`<option>${t}</option>`).join('')}
            </select><br>
            <button class="add-btn" onclick="agregarAlCarrito(${p.id})">+</button>
        `;
        catalogo.appendChild(div);
    });
}
function mostrarFactura() {
  if (carrito.length === 0) return alert('Carrito vacío');

  historialPedidos.push([...carrito]);
  localStorage.setItem("historialPedidos", JSON.stringify(historialPedidos));
  carrito = []; 
  actualizarCarrito();
  mostrarHistorialPedidos(); 

}

// Función para abrir WhatsApp al hacer clic
function enviarWhatsApp() {
  const numero = '573222850507';
  const mensaje = encodeURIComponent("Hola, quiero más información sobre mi pedido.");
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, '_blank');
}

// Event listener del botón flotante
const btnWhatsapp = document.querySelector('.whatsapp-float');
if (btnWhatsapp) {
  btnWhatsapp.addEventListener('click', enviarWhatsApp);
}


function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const tallaSelect = document.getElementById(`talla-${id}`);
    if (!producto || !tallaSelect) return;

    const talla = tallaSelect.value;
    const key = `${id}-${talla}`;
    const existente = carrito.find(item => item.key === key);

    if (existente) existente.cantidad++;
    else carrito.push({ ...producto, talla, cantidad: 1, key });

    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('carrito-lista');
    const totalEl = document.getElementById('total');
    if (!lista || !totalEl) return;

    lista.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nombre} (${item.talla}) x${item.cantidad}</span>
            <span>$${subtotal.toFixed(2)}</span>
            <div class="acciones">
                <button onclick="eliminarDelCarrito('${item.key}')" class="btn-eliminar">−</button>
            </div>
        `;
        lista.appendChild(li);
    });

    totalEl.textContent = total.toFixed(2);
}

function eliminarDelCarrito(key) {
    carrito = carrito.filter(x => x.key !== key);
    actualizarCarrito();
}

function filtrarCategoria(cat) {
    if (enPerfil) return;
    productosFiltrados = cat === 'todos' ? productos : productos.filter(x => x.categoria === cat);
    paginaActual = 1;
    mostrarProductos();
    crearPaginacion();
}

function crearPaginacion() {
    const pagDiv = document.getElementById('paginacion');
    pagDiv.innerHTML = '';
    const totalPag = Math.ceil(productosFiltrados.length / productosPorPagina);
    for (let i = 1; i <= totalPag; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = `pagina-btn ${i === paginaActual ? 'activa' : ''}`;
        btn.onclick = () => { paginaActual = i; mostrarProductos(); crearPaginacion(); };
        pagDiv.appendChild(btn);
    }
}

function mostrarCarrito() {
    if (enPerfil) return;
    document.getElementById('pagina-perfil').classList.add('oculto');
    document.getElementById('carrito').classList.remove('oculto');
    document.getElementById('catalogo').classList.remove('oculto');
    document.getElementById('categorias').classList.remove('oculto');
    document.getElementById('paginacion').classList.remove('oculto');
    document.getElementById('factura-container').classList.add('oculto');
    document.getElementById('carrito').scrollIntoView({ behavior: 'smooth' });
}

function mostrarPerfil() {
    enPerfil = true;
    document.getElementById('pagina-perfil').classList.remove('oculto');
    document.querySelectorAll('#catalogo, #categorias, #paginacion, #carrito, #factura-container')
        .forEach(e => e.classList.add('oculto'));
    document.getElementById('pagina-perfil').scrollIntoView({ behavior: 'smooth' });
}

function volverATienda() {
    enPerfil = false;
    document.getElementById('pagina-perfil').classList.add('oculto');
    document.querySelectorAll('#catalogo, #categorias, #paginacion, #carrito')
        .forEach(e => e.classList.remove('oculto'));
}

function mostrarTienda() {
    document.getElementById('pagina-perfil').classList.remove('oculto');
    mostrarPerfil();
}

function buscarProductos() {
    if (enPerfil) return;
    const term = document.getElementById('buscar-input').value.toLowerCase().trim();
    productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(term));
    paginaActual = 1;
    mostrarProductos();
    crearPaginacion();
    document.getElementById('modal-busqueda').classList.add('oculto');
}

function mostrarHistorialPedidos() {
    const perfil = document.getElementById('pagina-perfil');
    perfil.innerHTML = `
        <h2>📦 Historial de Pedidos</h2>
        <div class="historial-grid" id="contenedor-pedidos"></div>
    `;

    const contenedor = document.getElementById('contenedor-pedidos');

    if (historialPedidos.length === 0) {
        contenedor.innerHTML = '<p>No hay pedidos realizados.</p>';
    } else {
        const estados = ['Entregado', 'En proceso', 'Cancelado'];
        const coloresEstado = {
            'Entregado': 'estado-verde',
            'En proceso': 'estado-amarillo',
            'Cancelado': 'estado-rojo'
        };

        historialPedidos.forEach((pedido, index) => {
            let total = pedido.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
            let fecha = new Date().toLocaleDateString();
            let detalles = '';
            const estado = estados[Math.floor(Math.random() * estados.length)];

            pedido.forEach(item => {
                detalles += `<p>${item.nombre} (${item.talla}) x${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}</p>`;
            });

            const html = `
                <div class="pedido-box">
                    <div class="pedido-header">
                        <strong>Total: $${total.toFixed(2)}</strong>
                        <div class="estado-pedido ${coloresEstado[estado]}">${estado}</div>
                    </div>
                    <h3>Pedido ${index + 1}</h3>
                    <small>🗓️ ${fecha}</small>
                    ${detalles}
                    <div class="acciones-pedido">
                        <button class="btn-realizar-pedido" onclick="alert('Pedido realizado.')">✅ Realizar Pedido</button>
                        <button class="btn-eliminar-pedido" onclick="eliminarPedido(${index})">🗑️ Eliminar</button>
                    </div>
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', html);
        });
    }

    const volver = document.createElement('button');
    volver.textContent = '⬅ Volver al perfil';
    volver.className = 'btn-volver-tienda';
    volver.onclick = () => location.reload();
    perfil.appendChild(volver);

    mostrarPerfil();
}

function eliminarPedido(index) {
    if (confirm("¿Seguro que quieres eliminar este pedido?")) {
        historialPedidos.splice(index, 1);
        localStorage.setItem("historialPedidos", JSON.stringify(historialPedidos));
        mostrarHistorialPedidos();
    }
}

function toggleBusqueda() {
    document.getElementById('modal-busqueda').classList.toggle('oculto');
    if (!document.getElementById('modal-busqueda').classList.contains('oculto'))
        document.getElementById('buscar-input').focus();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('visible');
}

document.addEventListener('click', e => {
    const modal = document.getElementById('modal-busqueda');
    const sidebar = document.getElementById('sidebar');
    if (modal && !modal.contains(e.target) && !e.target.closest('.bottom-nav button[onclick="toggleBusqueda()"]'))
        modal.classList.add('oculto');
    if (sidebar && !sidebar.contains(e.target) && !e.target.closest('.bottom-nav button[onclick="toggleSidebar()"]'))
        sidebar.classList.remove('visible');
});
