import React from 'react';
import { ContainerServiceItem } from './styles';

interface IItemProps {
  title: string;
  quantity: number;
  price: string;
  class?: string;
}

const Item: React.FC<IItemProps> = (props) => {
  return (
    <ContainerServiceItem className={props.class}>
      <div>
        <span>
          <strong>{props.title}</strong>
          <p>{`Quantidade: ${props.quantity} - ${props.price} em média`}</p>
        </span>
      </div>
    </ContainerServiceItem>
  )
}
export default Item;