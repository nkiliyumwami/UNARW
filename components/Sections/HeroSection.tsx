import bgImage from '../../public/unaRwanda.webp'
import curve from '../../public/curve-shape.png'
import Image from 'next/image'


const HeroSection = () => {
  return (
    <div
      className="h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>
      <div className="text-white text-center mx-auto px-3 w-full lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] h-full relative z-10 flex items-center justify-center">
        <div className="mt-[30px]">
          <span>We are</span>
          <h1 className="text-[50px] mb-[17px] mt-[12px] font-extrabold leading-[60px]">
            UNA RWANDA
          </h1>
          <p className="mb-[15px] text-center leading-[29px] px-3">
            Empowering Change, Uniting Humanity: The United Nations Association
            Rwanda (UNA-RW) champions the Sustainable Development Goals and
            promotes diversity, equity, and inclusion to create a peaceful and
            prosperous future for all. Join us in our commitment to addressing
            global challenges and building a brighter, more inclusive world for
            current and future generations.
          </p>
          <a href="/get-involved">
            <button className="bg-[#4894DF] text-white px-6 py-3 my-[15px] mx-[20px] rounded-md capitalize">
              Get Involved
            </button>
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <Image
          src={curve}
          alt="imag"
          height={100}
          className=" w-full h-auto text-transparent align-middle"
        />
      </div>
    </div>
  )
}

export default HeroSection

