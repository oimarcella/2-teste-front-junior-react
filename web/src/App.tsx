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

const App: React.FC = () => {
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
              <Filter type="Tipo" value="Porcentagem" icon={RiArrowDownSFill} class="filter" />
              <Filter type="Data" value="Últimos 7 dias" icon={BiCalendarEvent} class="filter" />
            </div>
            <ListContainer class="listProducts" name="Produtos" text="Mais Vendidos" openList={true}>
              <Item
                class="item"
                name="Coca-Cola"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
                points={150}
                rescued={33}
              />
              <Item
                class="item"
                name="Suco de Laranja"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
              />
              <Item
                class="item"
                name="Fanta-Uva"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
                points={150}
                rescued={33}
              />
              <Item
                class="item"
                name="Pão de Queijo"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
                points={150}
                rescued={33}
              />
              <Item
                class="item"
                name="Kibe"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
              />
              <Item
                class="item"
                name="Misto quente"
                quantity={35}
                price="R$42,00"
                salePrice="R$40,00"
                points={120}
                rescued={85}
              />
              <Item
                class="item"
                name="X-Burguer"
                quantity={35}
                price="R$4.50"
                salePrice="R$3,50"
              />
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
