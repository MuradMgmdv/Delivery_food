import { useState } from "react"

function Categories() {
  const [activeIndex, setActiveCategory] = useState(0)

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  function onClickCategory(index) {
    setActiveCategory(index)
  }

    return (
      <div className="categories">
                <ul>
                  {
                    categories.map((el, i) => (
                      <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
                          {el}
                      </li>
                    ))
                  }
                </ul>
              </div>
    )
  }

  export default Categories