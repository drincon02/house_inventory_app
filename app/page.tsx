'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass }from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ui/product_card'
import { useState } from 'react'


export default function Home() {
  const [showCreate, setShowCreate] = useState(false)
  
  const [showEdit, setShowEdit] = useState(false)

  const [showDelete, setShowDelete] = useState(false)

  function handleCreate() {
    setShowCreate(!showCreate)
  }

  function handleEdit() {
    setShowEdit(!showEdit)
  }

  function handleDelete() {
    setShowDelete(!showDelete)
  }


  return (
    <div className='relative'>
      <div className='mt-36 w-full sm:w-1/2 sm:left-1/4 relative flex justify-evenly items-center bg-cyan-300 p-2' style={{opacity: showCreate || showEdit || showDelete ? 0.2 : 1 }}>
        <div className='flex border-2 border-solid border-black bg-white'>
          <FontAwesomeIcon className='max-w-full h-8' icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search..." />
        </div>
        <button type="button" className='border-solid border-2 border-x-cyan-50 text-lg p-1 font-bold hover:bg-black hover:text-white bg-white'>Search</button>
      </div>
      <div style={{opacity: showCreate  || showEdit || showDelete? 0.2 : 1 }}>
        <div className='relative'>
          <hr className='mt-10' />
          <div className='absolute left-1/3 w-1/3 -top-5 flex items-center justify-center'>
            <button type="button" onClick={handleCreate} className='border-solid border-2 border-x-cyan-50 text-lg p-1 font-bold hover:bg-lime-700 hover:text-white bg-lime-300'>Add Product</button>
          </div>
          <div className='flex items-center justify-center'>
          <ProductCard image='https://images.immediate.co.uk/production/volatile/sites/30/2020/02/eggs-127432d.jpg?resize=700%2C366' ondelete={handleDelete} onedit={handleEdit} name='Huevos' description='Azules' quantity={50} id={2}/>
          </div>
        </div> 
      </div>
      {showCreate && (
        <div className='fixed top-1/4 w-full sm:w-1/2 sm:left-1/4 bg-white border-2 border-solid border-black'>
          <form className='flex flex-col items-center justify-center'>
            <input type="text" className='border-2 border-solid border-black mb-3 mt-3' placeholder='Name' />
            <input type="text" placeholder='Description' className='border-2 border-solid border-black mb-3'/>
            <input type="number" placeholder='Starting Quantity' className='border-2 border-solid border-black mb-3'/>
            <input type="number" placeholder='Minimun Quantity' className='border-2 border-solid border-black mb-3'/>
            <input type="file" placeholder='Image' className='border-2 border-solid border-black mb-3'/>
            <button type="submit" className='border-solid border-2 border-black bg-green-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>Create</button>
            <button type="button" onClick={handleCreate} className='border-solid border-2 border-black bg-red-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>Cancel</button>
          </form>
        </div>
      )}
      {showEdit && (
        <div className='fixed top-1/4 w-full sm:w-1/2 sm:left-1/4 bg-white border-2 border-solid border-black'>
          <form className='flex flex-col items-center justify-center'>
            <h2 className="font-bold text-md sm:text-2xl text-black">Starting Quantity: 50</h2>
            <input type="number" placeholder='Quantity Change - for taking out' className='border-2 border-solid border-black mb-3'/>
            <button type="submit" className='border-solid border-2 border-black bg-green-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>Confirm</button>
            <button type="button" onClick={handleEdit} className='border-solid border-2 border-black bg-red-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>Cancel</button>
          </form>
        </div>
      )}
      {showDelete && (
        <div className='fixed top-1/4 w-full sm:w-1/2 sm:left-1/4 bg-white border-2 border-solid border-black'>
          <form className='flex flex-col items-center justify-center'>
            <h2 className="font-bold text-md sm:text-2xl text-black">Are you sure you want to delete this product?</h2>
            <button type="submit" className='border-solid border-2 border-black bg-green-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>Yes</button>
            <button type="button" onClick={handleDelete} className='border-solid border-2 border-black bg-red-400 hover:bg-gray-300 hover:text-black text-white font-bold p-2'>No</button>
          </form>
        </div>
      )}

    </div>
  );
}
