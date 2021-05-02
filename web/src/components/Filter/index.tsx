import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FilterContainer } from './styles';

interface FilterProps {
  type: string;
  icon?: React.ComponentType<IconBaseProps>;
  class?: string;
  options: Array<string>;
}

const Filter: React.FC<FilterProps> = ({ icon: Icon, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <FilterContainer className={rest.class}>
      <div className="control" onClick={() => setOpen(!open)} >
        <span >
          <p>{rest.type}</p>
          {
            Icon && <Icon size={20} />
          }
        </span>
        <strong className="selected-value">{selected}</strong>
        <div className={`options ${open ? 'open' : null}`}>
          {rest.options.map(option =>
            <div className="option" onClick={() => setSelected(option)}>{option}</div>
          )}
        </div>
      </div>
    </FilterContainer>
  )
}
export default Filter;