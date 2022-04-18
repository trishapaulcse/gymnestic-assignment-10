
import './App.css';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <route>
          <Route path='/blog' element={<Blog></Blog>}> </Route>
        </route>
      </header>
    </div>
  );
}

export default App;
