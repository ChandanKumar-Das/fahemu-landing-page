


export function FirstSection(){
    return(
        <>
      <div className="relative">

  <div>
    <img
      className="h-[100vh] w-full object-cover"
      src="https://fahamusafaris.de/tanzania-special-offers/images/fah-hp-ban-slide-1.jpg"
      alt="mainphoto"
    />
 
    <div className="absolute inset-0 bg-[#8B572A]/50"></div>
  </div>


  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
    <h1 className="text-[50px] text-white uppercase font-semibold tracking-wider leading-[1.2]">
      Deine Tansania Safari Beginnt Hier
    </h1>
    <p className="text-white text-3xl max-w-[1000px]">
      Von wunderschönen Nationalparks bis hin zu majestätischen Bergen und unberührten weißen Sandstränden
    </p>
    <button className="mt-4 px-6 py-2 bg-[#8B572A] text-white rounded-md shadow-md hover:bg-blue-600">
      ▼
    </button>
  </div>
</div>


        </>
    )
}