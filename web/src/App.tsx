import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BiCalendarEvent } from 'react-icons/bi';
import { MdShowChart } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import GlobalStyles from './styles/globalStyles';
import { Container, Main, Aside } from './styles/styles';
import Header from './components/Header';
import BasicCard from './components/BasicCard';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import ListContainer from './components/ListContainer';
import Item from './components/Item';
import Filter from './components/Filter';
import ServiceItem from './components/ServiceItem';
import { IItemProps as IItem } from './components/Item';

const App: React.FC = () => {
  const products: Array<IItem> = [
    {
      name: 'Coca-Cola',
      quantity: 23,
      price: 'R$3,50',
      salePrice: 'R$2,50'
    },
    {
      name: 'Suco de Limão',
      quantity: 23
    },
    {
      name: 'Torta de frango',
      quantity: 10,
      price: 'R$6,00',
      points: 5,
      rescued: 5
    },
    {
      name: 'Pão de queijo',
      quantity: 23
    },
    {
      name: 'X-Burguer',
      quantity: 5,
      price: 'R$15,00',
      points: 5,
    }
  ];

  return (
    <>
      <Container>
        <Header icon={AiOutlineMenu} title="Relatório de Promoções" />
        <div>
          <Main>
            <input type="text" placeholder="Procurar um cliente..." />
            <header>
              <BasicCard class="basicCard" icon={MdShowChart} title="Faturamento" text="R$300,00" />
              <BasicCard class="basicCard" icon={BsPeopleFill} title="Participantes" text="100 clientes" />
            </header>
            <LineChart class="lineChart" />
            <div className="pieChartContainer">
              <PieChart class="pieChart" />
            </div>
          </Main>
          <Aside>
            <div className="filters">
              <Filter options={[
                'Porcentagem',
              ]}
                type="Tipo" icon={RiArrowDownSFill} class="filter" />
              <Filter options={[
                'Últimos 30 dias',
                'Últimos 15 dias'
              ]}
                type="Data" icon={BiCalendarEvent} class="filter" />
            </div>
            <ListContainer class="listProducts" name="Produtos" text="Mais Vendidos" openList={true}>
              {
                products.map(product =>
                  <Item
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    class={product.class}
                    salePrice={product.salePrice}
                    points={product.points}
                    rescued={product.rescued}
                  />)
              }
            </ListContainer>
            <ListContainer class="listServices" name="Serviços" text="Mais Utilizados">
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
              <ServiceItem quantity={23} title="Permite cobrar taxa de entrega" price="R$33,00" />
            </ListContainer>
          </Aside>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
