// import router dom
import { Link } from "react-router-dom";
// import components
import Title from "./Title"
// import icons
import { BsCart4 } from 'react-icons/bs'
import { HiOutlineHeart } from 'react-icons/hi2'

const Catalog = ({ data }) => {
    return (
        <>
            <Title title={data.title} />
            <div className="container catalog">
                {
                    data.products.length === 0 ?
                        <h1>No products</h1> :
                        data.products.map(product => (
                            <div key={product.id} className="catalog_product">
                                <div className="catalog_product_img">
                                    <img src={product.variants[0].img} alt="" />
                                </div>
                                <div className="catalog_product_price">
                                    {
                                        product.variants[0].modifications[0].price === product.variants[0].modifications[0].price_old ?
                                            <b>$ {product.variants[0].modifications[0].price}</b> :
                                            <><b>$ {product.variants[0].modifications[0].price}</b> - <del>$ {product.variants[0].modifications[0].price_old}</del></>
                                    }
                                </div>
                                <div className="catalog_product_name">
                                    {product.name}
                                </div>
                                <div className="catalog_product_quantity">
                                    {product.variants[0].modifications[0].quantity} ta mavjud
                                </div>
                                <div className="catalog_actions">
                                    <Link to={`/products/${product.id}`} className="catalog_product_btn">
                                        Sotib olish
                                    </Link>
                                    <span><BsCart4 /></span>
                                </div>
                                <div className="catalog_product_like_btn">
                                    <HiOutlineHeart />
                                </div>
                                <div className="catalog_product_tags">
                                    {
                                        product.hasOwnProperty('tags') && product.tags.map(tag => (
                                            <Link key={tag.id} to={`/tags/${tag.id}`} className={tag.name === 'New' ? "catalog_product_tag new" : "catalog_product_tag"}>
                                                {tag.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                }
            </div>
            <div className="container">
                <Link to={'/products'} className="catalog_show_all">
                    Ko`proq ko`rish
                </Link>
            </div>
        </>
    )
}

export default Catalog;