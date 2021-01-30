import React from 'react'

const Home = () => {

  const hiArr = [
    {
      flag: "🇪🇸",
      msg: "Hola"
    },
    {
      flag: "🇺🇸",
      msg: "Hello"
    },
    {
      flag: "🇮🇹",
      msg: "Ciao"
    },
    {
      flag: "🇵🇹",
      msg: "Olá"
    },
    {
      flag: "🇵🇹",
      msg: "Olá"
    },
    {
      flag: "🇯🇵",
      msg: "こんにちは"
    },
    {
      flag: "🇨🇳",
      msg: "嗨，您好！"
    },
    {
      flag: "🇩🇪",
      msg: "Hallo"
    },
    {
      flag: "🇷🇺",
      msg: "Всем привет!"
    },
    {
      flag: "🇫🇷",
      msg: "Salut!"
    }
  ]

  const [index, setIndex] = React.useState( Math.floor(Math.random() * (hiArr.length - 0) + 0) )
  const [msg, setMsg] = React.useState( hiArr[index] )
  const [clock, setClock] = React.useState( new Date() )

  React.useEffect(() => {
    const repeat = setInterval(() => { 
      // Hello Message
      let i = Math.floor(Math.random() * (hiArr.length - 0) + 0)
      setIndex(i)
      setMsg( hiArr[i] ) 
    }, 2000);
    const repeat2 = setInterval(() => { 
      // Clock
      let clock = new Date()
      setClock(clock)
    }, 1000);
    return () => clearInterval(repeat,repeat2)
  }, [])


  return (
    <div className="bg-black">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-green-500 ">
            </div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xs transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                  <img className="rounded-full" src="https://avatars.githubusercontent.com/u/77928026?s=400&u=0b9df73c582a55e7c2cffabae72eb6cb180353ac&v=4" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    {msg.flag}  {msg.msg}!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm">
                      I'm Danilo Sandoval, a 🇨🇱  Ninja Developer.
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Github WebPage created with:
                    </p>
                  </div>
                  <div class="grid grid-cols-4 gap-0 mt-4 text-xs">
                    <span className="mx-1 py-1 px-2 rounded-xl bg-indigo-500 text-white "><i className="fab fa-react"></i> React</span>
                    <span className="mx-1 py-1 px-2 rounded-xl bg-gray-900 text-white ">NextJS</span>
                    <span className="mx-1 py-1 px-2 rounded-xl bg-gray-500 text-white ">TravisCI</span>
                    <span className="mx-1 py-1 px-2 rounded-xl bg-blue-500 text-white ">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtyQczaI4NkdQ6rZbYpSbyaf-EsW_Uh7nZA70LWAzJVT3ODw/viewform?usp=sf_link" target="_blank" className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-2 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/danilosandoval-root" target="_blank" className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-2 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/danilosandoval/" target="_blank" className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm px-2 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home