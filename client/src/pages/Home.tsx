import React, { useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const searchValue = useSelector((state: RootState) => state.filter.searchValue);
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const sortType = useSelector((state: RootState) => state.filter.sort);
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const items = useSelector((state: RootState) => state.pizza.items);
  const status = useSelector((state: RootState) => state.pizza.status);

  const dispatch = useAppDispatch();

  function onChangeCategory(id: number) {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>Не удалось получить пиццы</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj: any) => (
                <Link key={obj.id} to={`/pizza/${obj.id}`}>
                  <PizzaBlock {...obj} />
                </Link>
              ))}
        </div>
      )}

      <Pagination onChangePage={onChangePage} />
    </>
  );
};

export default Home;
