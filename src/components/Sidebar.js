import Image from 'next/image'
import { useState } from 'react'
import control from '/src/components/assets/control.png'
const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Mon équipe', src: 'group' },
    { title: 'Mes équipements', src: 'Chat' },
    { title: 'Indicateur', src: 'User', gap: true },
    { title: 'Maintenance', src: 'Setting' },
    { title: 'Cartographies', src: 'Search' },
    { title: 'Bilans', src: 'Chart' }
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-sky-100 text-background h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src={control}
          alt="/"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col items-center justify-center"></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
              {/* <Image
                src={`/src/components/assets/${Menu.src}.png`}
                layout="fill"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full  ${!open && 'rotate-180'}`}
                alt="/"
              /> */}
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold "></h1>
      </div>
    </div>
  )
}
export default Sidebar
