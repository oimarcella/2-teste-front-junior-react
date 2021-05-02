import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IconBaseProps } from 'react-icons/lib';
import { MenuContainer } from './styles';

interface MenuProps {
  icon?: React.ComponentType<IconBaseProps>;
  class?: string;
}


const Menu: React.FC<MenuProps> = ({ icon: Icon, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <MenuContainer className={rest.class} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {
        Icon ? <Icon size={20} /> :
          <AiOutlineMenu size={20} onClick={() => setOpen(!open)} />
      }
      {open && <div className={`menuItems ${open ? 'open' : null}`}  >
        {rest.children}
      </div>
      }
    </MenuContainer>
  )
}
export default Menu;