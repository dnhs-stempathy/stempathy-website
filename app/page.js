import Navbar from './components/Navbar';
import './globals.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="text-black h-screen bg-gray-400  text-center flex"
      >
        <h1 className="m-auto text-7xl text-black ">
          HOME(Add Image)
        </h1>
      </section>
      <section id="vision" className=" bg-white h-screen text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-black ">
          Vision Mission and Values
        </h1>
      </section>
      <section
        id="blogs"
        className="text-white h-screen bg-gray-400  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-black ">
          Blog Showcase
        </h1>
      </section>
    </div>
  );
};

export default App;

