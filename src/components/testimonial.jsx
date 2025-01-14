import React from "react";
import Slider from "react-slick";


const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 4000,
  cssEase: "linear",
  pauseOnHover: true,
};

const miniSliderSettings = {
  dots: false,
  loop: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 4000,
};
const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/103/103",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className=" bg-[#f1efee] py-[100px]">
        <div className="max-w-[1100px] mx-auto ">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div data-aos="fade-up" className="" key={data.id}>
                  <div className="text-center  p-4  space-y-3 my-8 mx-5">
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img}
                      alt=""
                    />
                    <p className="text-gray-500 text-lg">{data.testimonial}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="w-full flex justify-end">
        <div className="w-[200px] ">
          <Slider {...miniSliderSettings}>
            {TestimonialData.map((data) => (
              <div key={data.id}>
                <img
                  className="rounded-full block mx-auto w-16 h-16"
                  src={data.img}
                  alt={data.name}
                />
              </div>
            ))}
          </Slider>
        </div>
        </div>
        </div>

      
      </div>
    </>
  );
};

export default Testimonial;
