import React from 'react'

import { Link } from 'react-router-dom'

const Category = ({ data }) => {
    return (
        <>
            <div className="container category_title">
                <Link to={'/'} className='category_title_link'>Nextstore</Link> /
                <Link to={'/catalog'} className='category_title_link'>barchasi</Link>
            </div>
            <div className='container category'>
                {
                    data.length === 0 ? <h1>No Categories</h1> :
                        data.map(category => (
                            <Link key={category.id} to='/' className='category_item'>
                                <img src={category.img} alt="" />
                                <p>{category.name}</p>
                                <span>{category.quantity} ta maxsulot</span>
                            </Link>
                        ))
                }
            </div>
        </>
    )
}

export default Category