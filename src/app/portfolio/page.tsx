import Image from "next/image";
export default function Portfolio() {
    return (
      <section className=" bg-white text-center bg-[url('/img.jpg')]  bg-no-repeat bg-cover w-full h-screen">
        <h2 className="text-3xl font-bold">My Portfolio</h2>
        <p className="mt-4 text-lg text-black-950">Check out My latest projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-300 p-4 rounded-lg h-20 m-3">Project 1 </div>
          <div className="bg-gray-300 p-4 rounded-lg h-20 m-3">Project 2</div>
          <div className="bg-gray-300 p-4 rounded-lg h-20 m-3">Project 3</div>
        </div>
      </section>
    );
  };
  
  
  