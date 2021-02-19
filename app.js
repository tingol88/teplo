import logo from './logo.svg';
import './App.css';
// импортируем компонент из папки компонентов
import Main from './components/Main/Main';
import Header from './components/Header/Header';


// все размещаем в компоненте App
function App() {
  return (
    // пишем все внутри одного div вкладываем в App наши компоненты
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

// экспортируем компонент для index.js
export default App;
