import { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'
import { createPopper } from '@popperjs/core'

import { MENUS } from 'utils/constants'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-sky-100 text-background h-screen p-5  pt-8 relative duration-300`}
      >
        <Image
          src="/assets/control.png"
          layout="fixed"
          height="50"
          width="50"
          alt="/"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col items-center justify-center"></div>
        <ul className="pt-6">
          {MENUS.map((Menu, index) => (
            <Link href={Menu.route}>
              <li
                key={index}
                className={cn(
                  'flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-l font-semibold items-center gap-x-4',
                  { 'mt-9': Menu.gap, 'mt-2': !Menu.gap, 'bg-light-white': index === 0 }
                )}
              >
                <img src={`/assets/${Menu.src}.png`} />
                <span className={cn('origin-left duration-200 text-white', { hidden: !open })}>
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Sidebar
