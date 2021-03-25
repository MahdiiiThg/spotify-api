import './index.css';
import './App.css';
import Main from './Layout/Main';
import Header from './Components/Common/Header';
import Albums from './Containers/Albums';
import Player from './Components/Common/Player';
import Genres from './Containers/Genres';
import TopCharts from './Components/TopCharts';

function App() {
  return (
    <Main>
      <Header />
      <div className="grid gap-4 grid-cols-6">
        <Albums />
        <Genres />
        <TopCharts />
        <Player />
      </div>
    </Main>
  );
}

export default App;
