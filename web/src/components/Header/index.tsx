import React from 'react';
import { IconBaseProps } from 'react-icons';
import { ContainerHeader } from './styles';

interface HeaderProps {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  class?: string;
}

const Header: React.FC<HeaderProps> = ({ icon: Icon, ...rest }) => {
  return (
    <ContainerHeader className={rest.class} thereIsIcon={!!Icon}>
      {Icon && <Icon />}
      <h3>{rest.title}</h3>
    </ContainerHeader>
  )
}
export default Header;