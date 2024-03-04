import Title from "./Title"

import { useState } from "react";

const Detail = () => {

    const [activeImg, setActiveImg] = useState(0);

    return (
        <>
            <Title title={"Detail this|" + product.name} />
            <div className='container detail'>
                <div className="detail_media">
                    <div className="detail_main_img">
                        <img src={product.variants[activeImg].preview} alt="" />
                    </div>
                    <div className="detail_images">
                        {
                            product.variants.length !== 0 ?
                                product.variants.map((item, i) => (
                                    <div key={item.id} className="detail_img_item" onClick={() => setActiveImg(i)}>
                                        <img src={item.preview} alt="" />
                                    </div>
                                )) : ''
                        }
                    </div>
                </div>
                <div className="detail_main">
                    <h1>{product.name}</h1>
                    <div className="detail_main_colors">
                        {
                            product.variants.length !== 0 ?
                                product.variants.map((item, i) => (
                                    <div key={item.id} className="detail_main_color" onClick={() => setActiveImg(i)} >
                                       {item.color}
                                    </div>
                                )) : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;

let product = {
    id: 1,
    name: "Notebook Apple Macbok Pro 13” 2.3 2019 Intel core i5 DDR3 8GB 256 GB",
    variants: [
        {
            id: 1,
            color: "qizil",
            annotation: "Dodge charger",
            preview: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2021/03/prueba-dodge-challenger-2256289.jpg"
        },
        {
            id: 2,
            color: "qora",
            annotation: "apple Apple apple",
            preview: "https://media.istockphoto.com/id/491137628/photo/dodge-challenger-rt.jpg?s=612x612&w=0&k=20&c=4koxFVsQzU5UViaYVFdot2MZwej-s4SdohU9NsV3CZk="
        },
        {
            id: 3,
            color: "yashil",
            annotation: "Dodge Challenger",
            preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dodge_Challenger_SRT8_%282015%29_IMG_3958.jpg/1200px-Dodge_Challenger_SRT8_%282015%29_IMG_3958.jpg"
        },
        {
            id: 4,
            color: "kulrang",
            annotation: "apple Apple apple",
            preview: "https://www.cars.com/i/large/in/v2/5548bd31-af2a-5df0-8686-59136029eb31/66f98170-f913-407e-bb86-6d45077b78c3/8Ru8s6y_IF6Zhe8fOQN40pefeFU.jpg"
        },
    ]
}