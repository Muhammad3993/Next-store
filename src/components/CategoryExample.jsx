import Slider from "react-slick";
import Title from "./Title";
import { Link } from "react-router-dom";

const CategoryExample = ({ data }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <>
            <Title title={data.title} />
            <div className='container c_example'>
                <Slider {...settings} className="c_example_main">
                    {
                        data.products.length !== 0 ?
                            data.products.map(c_example => (
                                <div className="c_example_product" key={c_example.id}>
                                    <div className="c_example_product1">
                                        <div className="c_example_product_img">
                                            <img src={c_example.imgUrl} alt="" />
                                        </div>
                                        <p>{c_example.title}</p>
                                    </div>
                                </div>
                            )) :
                            <h1>no data</h1>
                    }
                </Slider>
            </div>
            <div className="container">
                <Link to={'/catalog'} className="catalog_show_all">
                    Batafsil
                </Link>
            </div>
        </>
    )
}

export default CategoryExample;