import React from 'react';

function Cards({item}){
    console.log(item);
    return <> 
    <div className='  mt-4 my-3 p-3'>
        <br/>
    <div className="card w-92 bg-black  shadow-xl  hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white">
      {item.name}
      <div className="badge badge-secondary text-white">{item.category}</div>
    </h2>
    <p className='text-white'>{item.title}</p>
    <div className="card-actions justify-end justify-space">
      <div className="badge badge-outline text-white ">₹{item.price}</div>
      <div className="cusror-ponter px-2 py-1 rounded-full boreder-[2px] text-white hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy now</div>
    </div>
  </div>
</div>
        </div>
        </>
}

export default Cards;
