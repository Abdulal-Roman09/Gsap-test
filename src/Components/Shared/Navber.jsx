
import React from 'react'
import { navLinks } from '../../../Constants/index' 
import Logo from './Logo'

const Navber = () => {
  return (
    <nav className="">
      <div className="flex justify-between ">
        <Logo/>
        <ul className="flex gap-6">
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="">
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navber
