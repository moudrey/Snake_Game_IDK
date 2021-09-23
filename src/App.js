import styled from 'styled-components';
import './App.css';
import Game from './Components/Game';
import { useState } from 'react';
import Menu from './Components/Menu';

const Wrapper = styled.div`
  background-color: white;
  color: RGB(200, 200, 200);
  width: 1000px;
  height: 800px;
  position: absolute;
  left: 25%;
  top: 5%;
  text-align: center;
  border: solid 5px white;
`;

function App() {
  const [play, setPlay] = useState(false);

  return (
    <Wrapper>
      {play ? <Game onPlayClick={setPlay} /> : <Menu onPlayClick={setPlay} />}
    </Wrapper>
  );
}

export default App;
