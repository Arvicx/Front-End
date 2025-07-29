import './Header.css'

function Header(){
    return(
        <header>
            <img src={Logo}/>
            <h1>Oi</h1>
            <a href="#">Home</a>
            <a href="#">Catalogo</a>
        </header>
    )
}

export default Header