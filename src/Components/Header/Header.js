import blacklogo from '../../assets/images/blacklogo1.png'
import './Header.css'

const Header = () => {
    return ( 
     <div className='header'>
        <nav className='nav-header'>
            <img src={blacklogo} alt='Oficina Balbino Logo' className='img--header'/>
                <ul>
                    <li>Contato</li>
                    <li>Faça seu orçamento</li>
                    <li>Ofertas e Promoções </li>
                    <li>Endereço</li>
                  

                </ul>
        </nav>

    </div>);
}
export default Header;