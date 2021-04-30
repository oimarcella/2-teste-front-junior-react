import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri'
import { Container } from './styles';

interface ListContainerProps {
  class?: string;
  name: string;
  text?: string;
}

const ListContainer: React.FC<ListContainerProps> = (props) => {
  return (
    <Container className={props.class}>
      <div>
        <strong>{props.name}</strong>
        <span>
          <p>{props.text}</p>
          <RiArrowDownSFill size={15} />
        </span>
      </div>
      <div>
        {props.children}
      </div>
    </Container>
  )
}
export default ListContainer;