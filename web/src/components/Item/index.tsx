import React from 'react';
import { ContainerItem } from './styles';

export interface IItemProps {
  name: string;
  quantity: number;
  price?: string;
  salePrice?: string;
  class?: string;
  points?: number;
  rescued?: number;
}

const Item: React.FC<IItemProps> = (props) => {
  return (
    <ContainerItem className={props.class}>
      <div>
        <span>
          <strong>{props.name}</strong>
          <p>{`Quantidade: ${props.quantity}`}</p>
        </span>
        <span>
          <p>{`Preço / Promoção`}</p>
          <p>{`${props.price || 'Não informado'} / `} <span>{`${props.salePrice || 'Não possui'}`}</span></p>
        </span>
      </div>
      {
        props.points &&
        <div>
          <p>Pontos: <span>{` ${props.points} pts`}</span></p>
          <p>Resgates: <span>{` ${props.rescued || 0} pts`}</span></p>
        </div>
      }
    </ContainerItem>
  )
}
export default Item;