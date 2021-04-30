import React from 'react';
import { IconBaseProps } from 'react-icons';
import { BasicCardContainer } from './styles';

interface BasicCardProps {
  title?: string;
  icon?: React.ComponentType<IconBaseProps>;
  text: string;
  class?: string;
}

const BasicCard: React.FC<BasicCardProps> = ({ icon: Icon, ...rest }) => {
  return (
    <BasicCardContainer thereIsIcon={!!Icon} className={rest.class}>
      {Icon && <Icon size={40} />}
      <div>
        <p>{rest.title}</p>
        <h3>{rest.text}</h3>
      </div>
    </BasicCardContainer>
  )
}

export default BasicCard;