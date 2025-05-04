import './App.css';
import NavBar from './components/navbar/NavBar.jsx';

export default function App() {
  return (
    <>
      <NavBar />
      <header className="app-header">
        <div className="header-content">
          <h1>Bienvenido/a a CAUPOLICAN</h1>
          <p>Tu tienda de ropa rojiverde favorita</p>
          <button className="btn btn-primary mt-3 bg-danger text-white border border-success">Explorar Productos</button>
        </div>
      </header>
    </>
  );
}