import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FilterContainer } from './styles';

interface FilterProps {
  type: string;
  value: string;
  icon?: React.ComponentType<IconBaseProps>;
  class?: string;
}

const Filter: React.FC<FilterProps> = ({ icon: Icon, ...rest }) => {
  return (
    <FilterContainer className={rest.class}>
      <span>
        <p>{rest.type}</p>
        {
          Icon && <Icon size={20} />
        }
      </span>
      <strong>{rest.value}</strong>
    </FilterContainer>
  )
}
export default Filter;