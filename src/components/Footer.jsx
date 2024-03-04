// import react-router
import { Link } from 'react-router-dom'
// import icons
import { BsFacebook, BsInstagram, BsTelegram, BsTiktok } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer_bg'>
            <footer className='container'>
                <div className="footer_left">
                    <div className="foot_box">
                        <h1>Hujjatlar</h1>
                        <p>Umumiy shartlar</p>
                        <p>Ofertalar arxivi</p>
                        <p>Nizom</p>
                        <p>Guvohnoma</p>
                    </div>
                    <div className="foot_box">
                        <h1>Servis</h1>
                        <p>Do’konlar</p>
                        <p>Biz haqimizda</p>
                        <p>Hamkorlik uchun</p>
                        <p>Qaytarish</p>
                        <p>Promokodlar</p>
                    </div>
                    <div className="foot_box">
                        <h1>Mahsulotlar katalogi</h1>
                        <p>Katalog 1</p>
                        <p>Katalog 1</p>
                        <p>Katalog 2</p>
                        <p>Katalog 2</p>
                        <p>Katalog 3</p>
                        <p>Katalog 3</p>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="foot_box">
                        <h1>Axbarot xizmati</h1>
                        <p>contact.@nextstore.uz</p>
                        <p>
                            <a href="tel:+998976611688">+99897-661-16-88</a>
                        </p>
                        <p>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</p>
                    </div>
                    <div className="footer_socials">
                        <span className='facebook'><BsFacebook /></span>
                        <span className='instagram'><BsInstagram /></span>
                        <span className='telegram'><BsTelegram /></span>
                        <span><BsTiktok /></span>
                    </div>
                </div>
            </footer>
            <div className='footer_bottom container'>
                <span>2023 Nextstore.com</span>
                <span>Powered by CyberAttacker Team</span>
            </div>
        </div>
    )
}

export default Footer;