import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ProductGrid = ({products, loading , error}) => {

if (loading) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {[...Array(8)].map((_, i) => (
        <div key={i} className='bg-white p-4 rounded-lg'>

       <Skeleton height={384} borderRadius={8} style={{marginBottom: "1rem"}}/>
       <Skeleton width="75%" height={12} style={{marginBottom: "0.5rem"}}/>
      <Skeleton width="25%" height={12}/>

        </div>
      ))}
    </div>
  )
}


  if(error){
         
    return <p>Error : {error} </p>

  }

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <p>No products found.</p>
  }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

     {products.map((product,index)=>(
        
        <Link key={product._id} to={`/product/${product._id}`} className="block">

        <div className='bg-white p-4 rounded-lg'>

                  <div className='w-full h-96 mb-4 '>

                    <img src={product.images[0].url} alt={product.images[0].altText || product.name}
                      className='w-full h-full object-cover rounded-lg'  
                    />
                  </div>

                  <h3 className='text-sm mb-2 '>{product.name}</h3>
                  <p className='text-gray-500 font-medium text-sm tracking-tighter'>
                    ${product.price}
                  </p>

        </div>


        </Link>



     ))}
      
    </div>
  )
}

export default ProductGrid





