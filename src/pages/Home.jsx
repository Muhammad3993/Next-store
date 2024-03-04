// import components
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';

// impoort img
import img from '../assets/catalog/img1.png'
import img1 from '../assets/categoryexample/img.png'
import CategoryExample from '../components/CategoryExample';
import TopSale from '../components/TopSale';

const Home = () => {
  return (
    <>
      <Banner data={bannerdata1} height={'380px'} />
      <CategoryExample data={categoryEaxample} />
      <Catalog data={catalogdata2} />
      <Banner data={bannerdata2} height={'240px'} />
      <Catalog data={catalogdata} />
      <Banner data={bannerdata2} height={'240px'} />
      <TopSale data={catalogData} />
    </>
  )
}

export default Home;

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
]
let bannerdata2 = [
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
]


let catalogdata = {
  id: 1,
  title: "Eng ko`p sotilganlar",
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
  ]
}
let catalogdata2 = {
  id: 1,
  title: "Eng ko`p sotilganlar",
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
  ]
}
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

let categoryEaxample = {
  id: 1,
  title: 'Kategoriyalar',
  products: [
    {
      id: 1,
      imgUrl: img1,
      title: 'Smartfonlar'
    },
    {
      id: 2,
      imgUrl: img,
      title: 'Kompyuterlar va notebooklar'
    },
    {
      id: 3,
      imgUrl: img1,
      title: 'Televizorlar'
    },
    {
      id: 4,
      imgUrl: img1,
      title: 'Kir yuvish mashinalari'
    },
    {
      id: 5,
      imgUrl: img1,
      title: 'Smartfonlar'
    },
    {
      id: 6,
      imgUrl: img,
      title: 'Kompyuterlar va notebooklar'
    },
    {
      id: 7,
      imgUrl: img1,
      title: 'Televizorlar'
    },
    {
      id: 8,
      imgUrl: img1,
      title: 'Kir yuvish mashinalari'
    },
    {
      id: 9,
      imgUrl: img1,
      title: 'Smartfonlar'
    },
    {
      id: 10,
      imgUrl: img,
      title: 'Kompyuterlar va notebooklar'
    },
    {
      id: 11,
      imgUrl: img1,
      title: 'Televizorlar'
    },
    {
      id: 12,
      imgUrl: img1,
      title: 'Kir yuvish mashinalari'
    },
    {
      id: 13,
      imgUrl: img1,
      title: 'Smartfonlar'
    },
    {
      id: 14,
      imgUrl: img,
      title: 'Kompyuterlar va notebooklar'
    },
    {
      id: 15,
      imgUrl: img1,
      title: 'Televizorlar'
    },
    {
      id: 16,
      imgUrl: img1,
      title: 'Kir yuvish mashinalari'
    },
  ]
}