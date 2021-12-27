import { FiSearch } from 'react-icons/fi'
import  './styles.css'
export default function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP"/>

        <button className="buttonSearch">
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 69089-066</h2>
        <span>Rua teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

