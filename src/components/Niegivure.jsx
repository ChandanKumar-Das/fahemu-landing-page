
import React, { useState } from "react";

const imageData = [
  { id: 1, img: "https://picsum.photos/300/200?random=1" },
  { id: 2, img: "https://picsum.photos/300/200?random=2" },
  { id: 3, img: "https://picsum.photos/300/200?random=3" },
  { id: 4, img: "https://picsum.photos/300/200?random=4" },
  { id: 5, img: "https://picsum.photos/300/200?random=5" },
  { id: 6, img: "https://picsum.photos/300/200?random=6" },
  { id: 7, img: "https://picsum.photos/300/200?random=7" },
  { id: 8, img: "https://picsum.photos/300/200?random=8" },
];

const Niegivure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="max-w-[1100px] mx-auto p-4 md:p-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        ERLEBE TANSANIA WIE NIE ZUVOR
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Lass dich von den Reiseindrücken unserer Kunden inspirieren und entdecke
        das Herz Afrikas. Mit uns wird dein Traum von einer Tansania-Reise
        Wirklichkeit!
      </p>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {imageData.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`Image ${item.id}`}
            className="rounded-lg shadow-lg cursor-pointer hover:opacity-80"
            onClick={() => openModal(item.img)}
          />
        ))}
      </div>

  
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 max-w-lg mx-auto relative">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Niegivure;
