import React from 'react'
import Navbar from './Navbar'

const Testimonial = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-b from-white via-blue-600 to-blue-900'>
       <div className='flex flex-col justify-start ml-20'>
          <h4 className='mt-40  text-slate-300'>Community</h4>
          <h1 className='text-5xl font-bold w-1/2 mt-2 text-slate-300'> We believe in the<br/> power of community</h1>
          <p className='w-1/2 mt-8 text-slate-300'>Lorem Exercitationem reprehenderit dolor beatae excepturi unde. <br/>Quia laudantium minus obcaecati autem totam libero voluptate harum <br/> mollitia. Ratione odio dignissimos expedita, laboriosam aliquid, laudantium <br/> quasi fugiat facere placeat vitae alias, laborum rem mollitia.</p>
          <span><button className='text-start mt-5 bg-blue-950 px-3 py-2 rounded font-semibold text-slate-300'>Read more testimonials </button></span>
       </div>
    </div>
  )
}

export default Testimonial