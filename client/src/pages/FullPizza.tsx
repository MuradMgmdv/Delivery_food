import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{ imageUrl: string; title: string; price: number }>();
  const params = useParams();
  useEffect(() => {
    axios(`https://62f4c3c7535c0c50e761b9aa.mockapi.io/items/${params.id}`).then((res) =>
      setPizza(res.data),
    );
  }, []);

  if (!pizza) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
