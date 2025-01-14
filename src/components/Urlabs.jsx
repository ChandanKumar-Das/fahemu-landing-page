
export function Urlabs(){
    


  return(
    <>
    <div className="bg-white max-w-[1100px] mx-auto py-6 px-4">
  {/* Section Heading */}
  <h2 className="text-center text-2xl font-semibold text-[#a9774e] mb-2">Deine Vorteile</h2>
  <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-8">
    Entspannt in den Urlaub
  </h2>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-12">
    {/* Card 1 */}
    <div className="relative block p-6 bg-[#f1efee] rounded-lg shadow-lg hover:animate-blink">
      <div className="absolute right-4 md:right-16 md:top-5 md:w-20 md:h-20 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://fahamusafaris.de/tanzania-special-offers/images/discount.png"
          width="50px"
          height="50px"
          className="w-[30px] md:w-[50px]"
          alt="Discount Icon"
        />
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-[#333]">Transparente Preise</h1>
      <p className="text-lg text-[#7c8083]">
        Auf unserer Website stellen wir Preisinformationen zur Verfügung, damit
        du dir ein umfassendes Bild machen kannst. Unser Team steht dir zudem
        gerne zur Seite, um sämtliche Aspekte deiner Reisekosten zu erläutern.
      </p>
    </div>

    {/* Card 2 */}
    <div className="relative block p-6 bg-[#f1efee] rounded-lg shadow-lg hover:animate-blink">
      <div className="absolute right-4 md:right-16 top-5 md:w-20 md:h-20 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://fahamusafaris.de/tanzania-special-offers/images/save-time.png"
          width="50px"
          height="50px"
          className="w-[30px] md:w-[50px]"
          alt="Discount Icon"
        />
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-[#333]">Du sparst Zeit</h1>
      <p className="text-lg text-[#7c8083]">
        Mit unserer Plattform kannst du wertvolle Zeit sparen und dich auf das
        Wesentliche konzentrieren – deinen Urlaub zu genießen.
      </p>
    </div>

    {/* Card 3 */}
    <div className="relative block p-6 bg-[#f1efee] rounded-lg shadow-lg hover:animate-blink">
      <div className="absolute  right-4 md:right-16 md:w-20 md:h-20 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://fahamusafaris.de/tanzania-special-offers/images/problem.png"
          width="50px"
          height="50px"
          className="w-[30px] md:w-[50px]"
          alt="Problem Solving Icon"
        />
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-[#333]">
        Wir lieben, was wir tun!
      </h1>
      <p className="text-lg text-[#7c8083]">
        Unsere Leidenschaft für Safaris sorgt dafür, dass du die besten
        Erlebnisse bekommst.
      </p>
    </div>

    {/* Card 4 */}
    <div className="relative block p-6 bg-[#f1efee] rounded-lg shadow-lg hover:animate-blink">
      <div className="absolute  right-4 md:right-16 md:w-20 md:h-20 w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img
          src="https://fahamusafaris.de/tanzania-special-offers/images/rating.png"
          width="50px"
          height="50px"
          className="w-[30px] md:w-[50px]"
          alt="Rating Icon"
        />
      </div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-[#333]">
        Unsere Erfahrung
      </h1>
      <p className="text-lg text-[#7c8083]">
        Mit jahrelanger Erfahrung in der Organisation von Safaris garantieren
        wir dir ein unvergessliches Erlebnis.
      </p>
    </div>
  </div>
</div>

    </>
  );




       
   
   
}