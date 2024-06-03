import "./Header.css"

// Crear un componente
// Lo que lo hace un componente ses que la función debe retornar un HTML
function Header() {
    return <header className="header">
            <img src="/img/header.png" alt="Org"/>
        </header>
}

// Exportar el componente para poder utilizarlo
export default Header