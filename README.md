# E-Commerce App - React 

Una aplicación web de comercio electrónico desarrollada con React que ofrece una experiencia de compra completa y fácil de usar.

## Funcionalidades Principales

### Pantalla de Inicio

- Lista todos los productos en tarjetas con nombre y foto.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto

- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

### Pantalla de Carrito

- Muestra el precio y la cantidad por producto.
- Muestra Precio Total

<img src="./public/images/Compra-Lean-Google-Chrome-2024-06-25-20-26-36.gif">

### Navegación

```javascript
    function App() {

    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/Products/:id" element={<ItemDetailContainer/>} /> 
                    <Route path="/Category/:id" element={<ItemListContainer/>} />
                    <Route path="/cart" element={<ItemCartContainer/>} />
                    <Route path="/checkout" element={<CheckoutContainer/>} />
                    <Route path="/Orders" element={<OrderContainer/>} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
    }
```

- **Link 1 - Inicio:** Categorías y productos (stack principal).
- **Link 2 - Productos:** Productos mostrados detalladamente.
- **Link 3 - Categorias:** Muestra los productos por categorias.
- **Link 4 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Link 5 - Chequeo de comprador:** Chequea los datos del comprador Nombre, Telefono y email.
- **Link 6 - Órdenes:** Historial de órdenes realizadas.

## Tecnologías Utilizadas

- **React Router DOM:** Gestiona la navegación entre pantallas.
- **React:** Framework para contruccion de interfaces
- **Firebase:** Realiza operaciones de lectura/escritura en la base de datos.
- **Boostrap:** Biblioteca de herramientas de código abierto optimizadas para el diseño de sitios y aplicaciones web.

## Instalación

1. Clona el repositorio: `git clone https://github.com/LeandroLamasGabriel/Proyecto-Final-Reactjs.git`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm run dev`