import TitleCard from "./components/TitleCard";
import { Icon } from "@iconify/react";

function App() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col md:flex-row">
      <div className="relative z-10 flex flex-col items-start justify-center w-full px-6 py-12 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold">Edy Pangangkat</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <a href="https://gkmision.org">
            <TitleCard title="Gembala Jemaat GKMI Sion" />
          </a>
          <a href="https://stakaw.ac.id">
            <TitleCard title="Dosen STAK Abdi Wacana" />
          </a>
        </div>
        <p className="mt-8 text-sm md:text-base text-gray-700">
          My name is Edy Pangangkat or usually called Mr. Edy. I am a pastor of
          the Muria Indonesia Sion Christian Church Pontianak and also a
          lecturer at the Abdi Wacana Christian College. You can contact me via
          the link below.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="https://wa.me/628979704444"
            className="hover:text-green-500 duration-300"
          >
            <Icon icon="ri:whatsapp-fill" className="text-3xl" />
          </a>
          <a
            href="https://facebook.com/edy.pangangkat"
            className="hover:text-blue-500 duration-300"
          >
            <Icon icon="ri:facebook-fill" className="text-3xl" />
          </a>
          <a
            href="https://youtube.com/@envaino"
            className="hover:text-red-500 duration-300"
          >
            <Icon icon="ri:youtube-fill" className="text-3xl" />
          </a>
          <a
            href="https://instagram.com/envaino"
            className="hover:text-purple-500 duration-300"
          >
            <Icon icon="ri:instagram-fill" className="text-3xl" />
          </a>
          <a
            href="mailto:envaino@gmail.com"
            className="hover:text-gray-500 duration-300"
          >
            <Icon icon="basil:gmail-solid" className="text-3xl" />
          </a>
          <a
            href="https://envaino.id"
            className="hover:text-red-800 duration-300"
          >
            <Icon icon="ph:globe" className="text-3xl" />
          </a>
          <a href="https://tiktok.com/@iota.yod">
            <Icon icon="ri:tiktok-fill" className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="relative w-full">
        <img
          className="absolute md:right-32 w-[520px] h-[520px] md:top-0 md:w-1/2 md:h-full -top-40 object-cover object-center z-0"
          src="./EdyPangangkat.png"
          alt="Edy Pangangkat"
        />
      </div>
    </section>
  );
}

export default App;
