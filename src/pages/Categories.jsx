// import components
import Banner from '../components/Banner';
import Category from '../components/Category';
import TopSale from '../components/TopSale';

// import images
import img from '../assets/catalog/img1.png'
import img1 from '../assets/catalog/img2.png'

const Categories = () => {
    return (
        <>
            <Banner data={bannerdata1} height={'380px'} />
            <Category data={categoryData} categoryName={'barchasi'} />
            <TopSale data={catalogData} />
        </>
    )
}

export default Categories;


let bannerdata1 = [
    {
        id: 1,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
        preview: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/dodge-muscle/desktop/SW_DodgeMuscle_Hero_banner_Desktop.jpg"
    },
    {
        id: 2,
        category_id: 1,
        title: "Lorem ipsum dolor sit.",
        subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
        preview: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/srt/desktop/Desktop_Hero_Banner_01.jpg"
    }
];

let categoryData = [
    {
        id: 1,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 2,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 3,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 4,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 5,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 6,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 7,
        name: "Dodge",
        quantity: 238,
        img: img1
    },
    {
        id: 8,
        name: "Dodge",
        quantity: 238,
        img: img1
    }
]

let catalogData = {
    id: 1,
    title: "Eng ko`p sotilgan",
    products: [
        {
            id: 1,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            tags: [
                {
                    id: 1,
                    name: "New"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            tags: [
                {
                    id: 1,
                    name: "Top"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            name: "Apple Airpods Pro simsiz quloqchin Oq rangda",
            brand: {
                id: 1,
                name: "Apple",
                description: "Apple is awesome company"
            },
            categories: [
                {
                    id: 1,
                    name: "Laptop"
                },
                {
                    id: 2,
                    name: "Laptop pro"
                }
            ],
            variants: [
                {
                    id: 1,
                    product_id: 1,
                    available: true,
                    annotation: "Apple Airpods Pro simsiz quloqchin Oq rangda",
                    img: img,
                    color: "white",
                    modifications: [
                        {
                            id: 1,
                            variant_id: 1,
                            size: 32,
                            available: true,
                            price: 3000,
                            price_old: 4000,
                            quantity: 3
                        }
                    ]
                }
            ]
        },
    ]
}