import Navbar from "../components/shop/productos/Navbar";

export const metadata={
  title:"TecnoShop home",
  description:"venta de tecnologia"
}

export default function Home() {

  
  return (
    <>
    <Navbar/>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage:
          `url("/ui/fondoHeroHome.webp")`,
        }}
      >
        <div className="hero-overlay max-h-56 bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-12 text-6xl font-bold">Hello word</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
