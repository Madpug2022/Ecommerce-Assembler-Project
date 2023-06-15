import { useState, useEffect, useRef } from 'react';
import { BiDownArrow } from "react-icons/bi"
import '../styles/components/NavbarButton.styles.css'
import { dropdownItems } from '../assets/navbar.db'
import DropdownItem from './DropdownItem'

function NavbarButton(props: any){
    const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let handler = (e: MouseEvent)=> {
      if(menuRef.current && !menuRef.current.contains(e.target as Node)){
      setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);

    return() =>
    document.removeEventListener('mousedown', handler);
  })

  return (
    <div className='navbar-btn'>
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={() => {setOpen(!open)}}>
            <BiDownArrow/><span> {props.name}</span>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <ul>
          {dropdownItems.map((item) => <DropdownItem key={item.title} href={item.href} title={item.title}/>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default NavbarButton
