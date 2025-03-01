import React from "react";
import Slider from "react-slick";
import { FaCouch, FaChair, FaBath, FaHome, FaWarehouse } from "react-icons/fa";
import { GiFloorPolisher } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { MdHomeWork } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./routerpage.css"; // Unique CSS file

const cleaningServices = [
    { service: "Floor deep cleaning", price: "₹4 per sqft (about 3000 sqft)", icon: <GiFloorPolisher /> },
    { service: "Sofa shampoo cleaning", price: "₹350 per seat", icon: <FaCouch /> },
    { service: "Chairs shampoo cleaning", price: "₹120 per chair", icon: <FaChair /> },
    { service: "Bathroom deep cleaning", price: "₹1000 per bathroom (approx)", icon: <FaBath /> },
    { service: "1BHK occupied house cleaning", price: "₹5500", icon: <FaHome /> },
    { service: "2BHK occupied house cleaning", price: "₹7500", icon: <MdHomeWork /> },
    { service: "3BHK occupied house cleaning", price: "₹9500", icon: <HiHomeModern /> },
    { service: "1BHK empty house cleaning", price: "₹4000", icon: <FaWarehouse /> },
];



const CustomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };


    return (
        <div>
            <div>
            <h2 className="text-center heading pt-5">
                <span className="line"></span> Our Prices<span className="line"></span>
            </h2>
            </div>
            <div className="custom-slider-container container mt-5">
                <Slider {...settings}>
                    {cleaningServices.map((item, index) => (
                        <div key={index} className="custom-slider-card">
                            <div className="custom-slider-card-inner text-center">
                                <div className="custom-slider-icon">{item.icon}</div>
                                <h5 className="custom-slider-title">{item.service}</h5>
                                <p className="custom-slider-price">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            
        </div>

    );
};

export default CustomSlider;
