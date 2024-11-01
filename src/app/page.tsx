import Header from "./header/page"
import About from "./about/page"
import Portfolio from "./portfolio/page"
import Footer from "./footer/page"
import Image from "next/image"




export default function Home(){
  return( <div className=" h-screen">
   <Header></Header>;
   
    <div className="flex h-[80%] mt-10 ">
  <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
<p className="text-[32px] w-[571px] flex-row">
          I’m passionate about crafting efficient, user-friendly applications that solve real-world problems.
          With a strong foundation in various programming languages and frameworks, I strive to create seamless experiences that combine functionality with aesthetics.
          I believe in the power of collaboration and continuous learning, and Im always eager to take on new challenges. Explore my work and let’s connect!
           We offer amazing services that you will love!</p>

           <div className="w-1/2 flex-row justify-center items-center"> <Image src={'/skill.jpg'} alt="skillimg" height={465} width={502}></Image>
      </div> </div>
  <About></About>;
  <Portfolio></Portfolio>;
  <Footer></Footer></div>
   
  )
}