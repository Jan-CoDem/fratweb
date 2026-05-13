import { useState, useEffect } from 'react'
import bgImage from "./assets/bgImage.jpg";
import about from "./assets/about.jpg";
import bg from "./assets/bg.png";
import b from "./assets/b.png";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import pic6 from "./assets/pic6.jpg";
import pic7 from "./assets/pic7.jpg";
import pic8 from "./assets/pic8.jpg";
import pic9 from "./assets/pic9.jpg";
import pic10 from "./assets/pic10.jpg";
import pic11 from "./assets/pic11.jpg";
import a1 from "./assets/1.png";
import a2 from "./assets/2.png";
import a3 from "./assets/3.png";
import a4 from "./assets/4.png";
import a5 from "./assets/5.png";
import a6 from "./assets/6.png";
import a7 from "./assets/7.png";
import a8 from "./assets/8.png";
import a9 from "./assets/9.png";
import a10 from "./assets/10.png";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [current, setCurrent] = useState(0);

  const officers = [
    {
      name: 'GM Nolito J. Nantes',
      position: 'Grand Altho(GA)',
      image:
        a1,
    },
    {
      name: 'GM Randlylito E. Malabago',
      position: 'Vice-Grand Altho(VGA)',
      image:
       a2,
    },
    {
      name: 'GM Annalisa F. Gamili',
      position: 'Keeper of Secrets(KS)',
      image:
        a3,
    },
        {
      name: 'GM Rey G. Jumawan',
      position: 'Seeker of Funds(SF)',
      image:
        a4,
    },
        {
      name: 'GM Braulio R. Wines',
      position: 'Cheecker of Wealth(CW)',
      image:
        a5,
    },
        {
      name: 'GM Floricito Pateño',
      position: 'Revealer of Facts(RF)',
      image:
        a6,
    },
        {
      name: 'GM Recto E. Alicayos',
      position: 'Searcher of Pleasure(SP)',
      image:
        a7,
    },
            {
      name: 'GM Ricky E. Anito',
      position: 'Welder of Justice(WJ)',
      image:
       a8,
    },
            {
      name: 'GM Roel C. Jakosalem',
      position: 'Adviser',
      image:
        a9,
    },
            {
      name: 'GM Jonathan Arsula',
      position: 'Adviser',
      image:
       a10,
    },


  ]

  const objectives = [
    {
      title: 'Education:',
      desc: (
      <>
      <p>1. To help educate the members to be with good character, traits and virtuosity;</p>
      <p>2. To develop potentials and preserve ideals by teaching;</p>
      <p>3. To provide opportunity for leadership, training and service;</p>
      <p>4. To give priority to human and spiritual values rather than to the material values of life;</p>
      <p>5. To enlighten members on the importance of respect to human life and the spiritual belief of every individuals;</p> 
      <p>6. To impart to the members, all factors of society that will promote world peace;</p>
      <p>7. To educate members on a broader sense, the establishment of a society that is pro-GOD, pro-Country and pro-People; and</p>
      <p>8. Institute individual reform through education – imparting the “Althonians values” onward to the unity of mankind.</p> 
        </>
        ),
    },
    {
      title: 'Brotherhood:',
      desc: (
        <>
        <p>1. To develop camaraderie among members; and</p>
        <p>2. To institutionalize through Alpha Theta Omega by bridging the gaps to all tribes and races toward domestic and international understanding.</p>
        </>
      ),
    },
    {
      title: 'Service:',
      desc: (
        <>
        <p>1. To encourage members to serve GOD, People and Country;</p>
        <p>2. To encourage members in the spirit of service for the improvement of human relationship in the community and/or in any learning institutions;</p>
        <p>3. To develop self-discipline and civic consciousness; and</p>
        <p>4. To promote the spirit of cooperation among members.</p>
        </>
      ),
    },
  ]

   const images = [
   about,
   pic1,
   pic2,
   pic3,
   pic4,
   pic5,
   pic6,
   pic7,
   pic8,
   pic9,
   pic10,
   pic11,
   bg,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="old-english bg-slate-950 text-white min-h-screen">

      <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between animate-fade-in">
          <h1 className="text-3xl xl:text-5xl font-bold text-yellow-300">
            ΑΘΩ
          </h1>

          <div className="hidden md:flex md:text-2xl gap-8 font-medium">
            <a href="#home" className="hover:text-yellow-400 hover:scale-105">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400 hover:scale-105">
              About
            </a>
            <a href="#officers" className="hover:text-yellow-400 hover:scale-105">
              Officers
            </a>
            <a href="#objectives" className="hover:text-yellow-400 hover:scale-105">
              Objectives
            </a>
            <a href="#more" className="hover:text-yellow-400 hover:scale-105">
              More
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className=" old-english text-center md:hidden bg-slate-900 px-6 pb-4 flex flex-col gap-4 animate-fade-up">
            <div className="hover:text-yellow-400 hover:scale-105">
            <a href="#home">Home</a>
            </div>
            <div className="hover:text-yellow-400 hover:scale-105">
            <a href="#about">About</a>
            </div>
            <div className="hover:text-yellow-400 hover:scale-105">
            <a href="#officers">Officers</a>
            </div>
            <div className="hover:text-yellow-400 hover:scale-105">
            <a href="#objectives">Objectives</a>
            </div>
            <div className="hover:text-yellow-400 hover:scale-105"> 
            <a href="#more">More</a>
            </div>
          </div>
        )}
      </nav>


<section
  id="home"
  className="min-h-screen bg-cover bg-center flex items-center px-6"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
  }}
>
  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
    
<div className="flex justify-center">
  <img
    src={b}
    alt="Alpha Theta Omega Logo"
    className="w-64 md:w-150 drop-shadow-2xl animate-flip"
  />
</div>

    <div className="text-center md:text-center animate-fade-up">
      <h1 className="old-english text-4xl md:text-5xl xl:text-7xl font-bold mb-6 text-yellow-400 leading-tight ">
        Alpha Theta Omega
      </h1>

      <p className=" old-english text-lg md:text-2xl text-slate-300 max-w-2xl">
        Liloy, Zamboanga del Norte Grand Master Chapter
      </p>

    <a
  href="#about"
  className="old-english inline-block mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full md:text-2xl hover:bg-yellow-300 transition duration-300"
>
  Learn More
</a> 
    </div>
  </div>
</section>


      <section id="about" className=" old-english py-24 px-6 bg-slate-900 animate-fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={pic2}
            alt="Brotherhood"
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-yellow-400 mb-6">
              About Althonians
            </h2>

            <p className="text-slate-300 text-center md:text-2xl leading-8 mb-4">
              Alpha Theta Omega Fraternity and Sorority is a coed intercollegiate 
              and professional organization that was founded in Central Mindanao University 
              (CMU) in Musuan, Maramag, Bukidnon, Philippines on November 27, 1968.
              </p>

          </div>
        </div>
      </section>

      {/* Officers */}
      <section id="officers" className=" old-english py-24 px-6 animate-fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-yellow-400 mb-8">
            Chapter Officers
          </h2>
          <p className="font-bold md:text-2xl mb-8">Zamboanga del Norte 3rd District Grand Masters Chapter</p>
          <p className="mb-3 md:text-2xl ">Year Elected: 2024-2026 Novermber</p>
          <p className="mb-8 md:text-2xl">Location: Liloy, Zaboanga del Norte</p>


          <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:bg-slate-700 hover:scale-105 transition"
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h3 className="xl:text-3xl md:text-2xl font-bold">{officer.name}</h3>
                  <p className="xl:text-2xl text-yellow-400 mt-2">{officer.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className=" old-english py-24 px-6 bg-slate-900 animate-fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-yellow-400 mb-12">
            Objectives
          </h2>

          <div className="grid md:grid-cols-3 md:text-2xl gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-3xl shadow-xl"
              >
                <h3 className="md:text-2xl font-bold mb-4 text-yellow-400">
                  {objective.title}
                </h3>

                <p className="text-slate-300 leading-7">{objective.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


 <section className="old-english py-24 px-6 animate-fade-up">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-yellow-400 mb-12">
          Photo Gallery
        </h2>

       <div className="relative overflow-hidden rounded-3xl">
  <img
    key={current}
    src={images[current]}
    className="h-125 w-full object-cover animate-fade"
  />

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white px-4 py-2 rounded-full text-2xl"
          >
            &lt;
          </button>


          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white px-4 py-2 rounded-full text-2xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>


<section
  id="more"
  className="md:text-2xl old-english py-24 px-6 bg-slate-900 animate-fade-up"
>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-yellow-400 mb-6">
      For More Information
    </h2>

    <p className="text-slate-300 mb-10">
      Want to know more about our fraternity, membership, events,
      or partnerships? Reach out to us through the contact details below.
    </p>

    <div className="space-y-6 text-slate-200">
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-yellow-400 md:text-2xl font-bold mb-2">Official Website</h3>
        <p>https://althonians.com</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
        <h3 className="text-yellow-400 md:text-2xl font-bold mb-2">Facebook</h3>
        <p>ALPHA THETA OMEGA</p>
        <p>(ALTHONIANS INTERNATIONAL)</p>
      </div>

    </div>
  </div>
</section>


      <footer className="bg-black py-8 text-center border-t border-slate-800 animate-fade-up">
        <p className="text-slate-400">
          ©Alpha Theta Omega.
        </p>
      </footer>
    </div>
  )
}