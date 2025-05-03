// import React from 'react'
import React, { Suspense } from 'react'
const Header=React.lazy(()=>import('./Header'))
const Cart=React.lazy(()=>import('./Cart'))
const Home = () => {
  return (
    <div>
             <Suspense fallback="fetching...">
            {/* <Routes> */}
            {/* <Route path='/cart' element={<Cart/>}/> */}
                   <Cart/>
            {/* </Routes> */}
             </Suspense> 
            
    </div>
  )
}

export default Home