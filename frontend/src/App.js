import bg from './imgs/bg.png';
import styled from 'styled-components';
import Navigation from './Component/Nav/Navigation';
import { MainLayout } from './styles/layouts';
import React, { useState } from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import Runs from './Component/Runs/Runs'
import Times from './Component/Times/Times'
import { useGlobalContext } from './Component/Context/Global';
function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  console.log("global:",global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />

      case 2:
        return <Runs />

      case 3:
        return <Times />

      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg={bg} className='App'>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background-color: rgba(252, 246, 249, .78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(44.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
     width: 0;
  }
}
`;
export default App;
