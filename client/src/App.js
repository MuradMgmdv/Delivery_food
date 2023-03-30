import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('https://62f4c3c7535c0c50e761b9aa.mockapi.io/items').then((res) => setItems(res.data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((el, i) => (
              <PizzaBlock
                key={el.id}
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
                sizes={el.sizes}
                types={el.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
