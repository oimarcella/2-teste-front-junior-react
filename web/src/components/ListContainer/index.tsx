import React, { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri'
import { Container } from './styles';

interface ListContainerProps {
  class?: string;
  name: string;
  text?: string;
  openList?: boolean;
}

const ListContainer: React.FC<ListContainerProps> = ({ openList = false, ...rest }) => {
  const [isActiveList, setIsActiveList] = useState(openList);

  return (
    <Container className={rest.class}>
      <div>
        <strong>{rest.name}</strong>
        <span onClick={() => setIsActiveList(!isActiveList)}>
          <p>{rest.text}</p>
          <RiArrowDownSFill size={15} />
        </span>
      </div>
      {
        isActiveList &&
        <div>
          {rest.children}
        </div>
      }
    </Container>
  )
}
export default ListContainer;