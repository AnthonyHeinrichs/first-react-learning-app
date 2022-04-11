import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Meditate' />
      <Todo text='Code' />
      <Todo text='Sleep' />
    </div>
  );
}

export default App;
