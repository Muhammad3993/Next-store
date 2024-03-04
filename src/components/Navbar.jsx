import { useState } from 'react'
import { Link } from 'react-router-dom'

// import images
import logo from '../assets/logo.png'
// imgport icons
import { HiOutlineBars3, HiOutlineHeart } from 'react-icons/hi2'
import { BsCart4 } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'

const Navbar = () => {

    const [catalog, setCatalog] = useState(false);
    const [select, setSelect] = useState(1);

    return (
        <>
            <nav>
                <header className='container'>
                    <div className={catalog ? "catalog-data" : "catalog-data none"}>
                        <div className="nav-sidebar">
                            {
                                catalogData.map(item => (
                                    <div key={item.id} className={select === item.id ? "nav-side-item active" : "nav-side-item"} onClick={() => setSelect(item.id)}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="nav-body">
                            {
                                select !== null ? catalogData[select - 1].brands.map(item => (
                                    <Link key={item.id} to={'/'} className="nav-body-item">
                                        {item.name}
                                    </Link>
                                )) : ""
                            }
                        </div>
                    </div>
                    <div className="nav_left">
                        <Link to='' className="logo">
                            <img src={logo} alt="Next-store" />
                        </Link>
                        <div onClick={() => setCatalog(!catalog)} className="nav_catalog_btn">
                            <span><HiOutlineBars3 /></span>
                            <b>Catalog</b>
                        </div>
                    </div>
                    <div className="nav_middle">
                        <input type="text" className='nav_search' placeholder='Maxsulotlarni izlash' />
                        <div className="nav_search_btn">
                            <GoSearch />
                        </div>
                    </div>
                    <div className="nav_right">
                        <Link to='/' className="nav_btn">
                            <HiOutlineHeart />
                        </Link>
                        <Link to='/' className="nav_btn">
                            <BsCart4 />
                        </Link>
                        <Link to='/' className="nav_login">
                            Kirish
                        </Link>
                    </div>
                </header>
            </nav>
            <div className="navbar_free"></div>
        </>
    )
}

export default Navbar;


let catalogData = [
    {
        id: 1,
        name: 'Noutbuk',
        brands: [
            {
                id: 1,
                name: 'Apple',
            },
            {
                id: 2,
                name: 'Xioami',
            },
            {
                id: 3,
                name: 'REDmi',
            },
            {
                id: 4,
                name: 'Huawei',
            },
            {
                id: 5,
                name: 'Samsung',
            },

        ]
    },
    {
        id: 2,
        name: 'Phone',
        brands: [
            {
                id: 1,
                name: 'Apple',
            },
            {
                id: 2,
                name: 'Xioami',
            },
            {
                id: 3,
                name: 'REDmi',
            },
            {
                id: 4,
                name: 'Huawei',
            },
            {
                id: 5,
                name: 'Samsung',
            },
        ]
    },
    {
        id: 3,
        name: 'Tv',
        brands: [
            {
                id: 1,
                name: 'Apple',
            },
            {
                id: 2,
                name: 'Xioami',
            },
            {
                id: 3,
                name: 'REDmi',
            },
            {
                id: 4,
                name: 'Huawei',
            },
            {
                id: 5,
                name: 'Samsung',
            },
        ]
    },
]