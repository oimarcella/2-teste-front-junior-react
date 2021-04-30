import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import GlobalStyles from './styles/globalStyles';
import { Container, Main, Aside } from './styles/styles';
import Header from './components/Header';
import BasicCard from './components/BasicCard';
import LineChart from './components/LineChart';
import ListContainer from './components/ListContainer';
import Item from './components/Item';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header icon={AiOutlineMenu} title="Relatório de Promoções" />
        <input type="text" placeholder="Procurar um cliente..." />
        <div>
          <Main>
            <header>
              <BasicCard class="basicCard" icon={MdShowChart} title="Faturamento" text="R$300,00" />
              <BasicCard class="basicCard" icon={BsPeopleFill} title="Participantes" text="100 clientes" />
            </header>
            <LineChart class="lineChart" />
            <div className="pieChart">grafico</div>
          </Main>
          <Aside>
            <ListContainer class="listProducts" name="Produtos" text="Mais Vendidos">
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
                name="Coca-Cola"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
                points={150}
                rescued={33}
              />
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
                name="Coca-Cola"
                quantity={65}
                price="R$3.50"
                salePrice="R$2,99"
                points={150}
                rescued={33}
              />
            </ListContainer>
          </Aside>
        </div>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
