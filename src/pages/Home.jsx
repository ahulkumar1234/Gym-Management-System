import background from "../asset/gym bg.webp"
import Logo from "../asset/Logo.jpg"

const Home = () => {
  return (
    <>
      <section className="relative h-screen">
        <div className="bg-image w-full h-full relative">
          <img src={background} alt="Gym Background" className="w-full h-full object-cover" />

          {/* Centered heading */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center text-white p-5">
            <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              Start a better <br /> shape of you ! <br />
              <span className="text-yellow-400">Come Join Us !</span>
            </h1>
            <button className="bg-amber-50 flex justify-center items-center text-black rounded-full py-2 px-6 hover:bg-amber-200 transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute w-full h-50 bottom-0 bg-gradient-to-t from-purple-800"></div>

      </section>

    </>
  )
}

export default Home