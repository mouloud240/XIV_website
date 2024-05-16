"use client"
import React, { useState } from 'react'
import CollectionItem from './collectionItem';
import {categories, colItems} from './constants';
import Image from 'next/image';

const Collection = () => {
  const [clickedItem,setClickedItem]=useState(0);
  const [filterClicked,setFilterClicked]=useState(false);
  const [sortsClicked,setSortsClicked]=useState(false);
  const [viewMoreClicked,setViewMoreCliked]=useState(false);
  return (
    <div className=' p-26 mt-4 flex flex-col gap-10 duration-300 '>
<div className='ml-24'>
        <h1 className='font-Beatrice-Deck-Trial font-extrabold text-5xl mb-6   text-black '>
        XIV <br />
  Collections <br />
  23-24
        </h1>
         <div className='flex justify-between pr-16'>
         <ul className='flex gap-8'>
          {
            categories.map((item,index)=>
              {
                let inputstring = index != clickedItem ? item : `(${item})`;
                let textColor= index != clickedItem ? "gray-400" : "black";
                return (
              <li key={index}>
                <button className={`font-Beatrice-Deck-Trial  font-medium text-xl text-${textColor}`} onClick={()=>setClickedItem(index)}>
                    {inputstring}
                </button>
              </li>
  
            )})
          }
          </ul>
         <div className='flex gap-16'>
          <div>
            <button onClick={()=>setFilterClicked(!filterClicked)}>
              <h1 className='font-Beatrice-Deck-Trial text-lg '>
                 Filters  {filterClicked?"(-)":"(+)"}
              </h1>
            </button>
          {
            filterClicked&&(
              <div>
          <div className='flex gap-2'>
                <input type='checkbox'/>
                    <h2>
                      Jeans
                    </h2>
          </div>
             
              <div className='flex gap-2'>
                <input type="checkbox"/>
                  <h2>
                    Shirts
                  </h2>
              </div>
              </div>
            )
          }
          </div>
          <div>
          <button onClick={()=>setSortsClicked(!sortsClicked)}>
              <h1 className='font-Beatrice-Deck-Trial text-lg '>
                 Sorts  {sortsClicked?"(-)":"(+)"}
              </h1>
            </button>
          {
            sortsClicked&&(
              <div className='text-gray-500 font-Beatrice-Deck-Trial text-md font-normal'>
               <h2> Less to more</h2>
               <h2>
                more to less
               </h2>
              </div>
            )
          }
          </div>
         </div>
         </div>
</div>
<div className='flex justify-center'>
  <div className='bg-gray-300 w-[95vw] h-[2px] '>
  </div>
</div>

<ul className='grid grid-cols-3 gap-12 items-center ml-28 justify-center'>
  {
    colItems.map((item, index) => {
      return (
        (viewMoreClicked || index <3) && (
          <li key={index}>
            <CollectionItem
              name={item.name}
              image={item.image}
              color={item.color}
              category={item.category}
              price={item.price}
              stockNum={item.numberOnStock}
            />
          </li>
        )
      );
    })
  }
</ul>

  <div className='flex justify-center'>
       <button onClick={()=>setViewMoreCliked(!viewMoreClicked)} className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-lg font-Beatrice-Deck-Trial text-gray-400'>
          {viewMoreClicked?"Less":"More"}
        </h1>
         <Image src={viewMoreClicked?"Assets/arrowLess.svg":"Assets/arrowMore.svg"}
         alt='arrow'
         width={24}
         height={24}
         />
       </button>
  </div>
    </div>
  )
}

export default Collection;