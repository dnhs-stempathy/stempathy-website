import Navbar from './components/Navbar';
import Boxes from './components/Boxes';
import './globals.css';
import Image from 'next/image';

const App = () => {
  const imageUrl = 'https://static.wixstatic.com/media/1df416_717fad7f2a0e4fd1a623e7a5c8d6fb45~mv2.png/v1/fill/w_679,h_521,al_c,lg_1,q_85,enc_auto/Screenshot%202023-09-18%20215025.png';

  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="text-black h-screen bg-gray-200 flex justify-center items-center"
      >
        <div className="flex justify-center items-center mt-10">
          <Image src={imageUrl} alt="StempathyLogo" width={679} height={521} />
        </div>
      </section>
      <section id="vision" className="bg-white h-screen] text-center flex">
        <Boxes />
      </section>
      <section
        id="blogs"
        className="text-white h-screen bg-gray-400 text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-black">
          Blog Showcase
        </h1>
      </section>
    </div>
  );
};

export default App;
