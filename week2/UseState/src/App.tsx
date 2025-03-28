import ButtonGroup from './components/ButtonGroup';
import { useCount } from './context/CounterProvider';

function App() {
  const { count, handleIncrement, handleDecrement } = useCount();

  return (
    <>
      <h1>{count}</h1>
      <ButtonGroup
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
}

export default App;
