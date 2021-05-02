import React from 'react';
import { IconBaseProps } from 'react-icons';
import Menu from '../Menu';
import { ContainerHeader } from './styles';

interface HeaderProps {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  class?: string;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon, ...rest }) => {
  return (
    <ContainerHeader className={rest.class} thereIsIcon={!!Icon}>
      <Menu icon={Icon}>
        <ul className="menuList">
          <li>Início</li>
          <li>Dashboard</li>
          <li>Página 3</li>
          <li>Página 4</li>
          <li>Página 5</li>
          <li>Página 6</li>
        </ul>
      </Menu>
      <h3>{rest.title}</h3>
    </ContainerHeader>
  )
}
export default Header;