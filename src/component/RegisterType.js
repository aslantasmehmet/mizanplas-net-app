import React from 'react'

export default function RegisterType() {
  return (
    <div>
        <div >
        <form className='px-6 py-8'>
            {" "}
            <div className='flex flex-col'>
                 <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2 border-bg-stone-100">
                Kullanıcı Adı veya E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
            </div>
            <div className='flex flex-col'>
                 <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                Kullanıcı Adı veya E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
            </div>
            <div className='flex flex-col'>
                 <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                Kullanıcı Adı veya E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
            </div>
            <div className='flex flex-col'>
                 <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                Kullanıcı Adı veya E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
            </div>
           
            <button className="mt-8 border w-80 h-16 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded-full font-display2  transition ease-in-out delay-150  hover:scale-110 duration-700 ">
              Giriş Yap
            </button>
          </form>
        </div>
    </div>
  )
}
