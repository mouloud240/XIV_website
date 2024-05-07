"use client"
import Image from "next/image"
import Images from "./constants"
const Description = () => {
  return (
    <section className="mt-8">
      <div>
         <h1 className="font-Beatrice-Deck-Trial font-medium text-4xl tracking-widest leading-10 text-center w-full">
         Our Approach to fashion design 
         </h1>
        <div className="flex justify-center">
           <h3 className="font-Beatrice-Deck-Trial font-normal text-lg text-gray-600 text-center ">
           at elegant vogue , we blend creativity with craftsmanship to create
           <br/>
            fashion that transcends trends and stands the test of time each
            <br /> design is meticulously crafted,  ensuring the highest quality
            <br/> exqulsite finish
           </h3>
        </div>
      </div>
      <ul className="flex justify-center mt-4 ml-20  gap-24">
        {
           Images.map((item,index) => (
           <li key={index} className="w-[340px] h-[420px] overflow-clip">               <Image src={item.image} alt={item.alt} key={item.src} className={`${item.margin} outline-none`} height={item.height} width={item.width} />
           </li>
       
             

           ))
        }
      </ul>
    </section>
  )
}

export default Description