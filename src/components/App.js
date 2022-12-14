import React, { useState } from 'react'
import './App.css'
import Item from './Item'
import { generateProducts } from '../utils/generate-products'
import FilterColor from './FilterColor'

function App(props) {
  const [products, setProducts] = useState(() => generateProducts())
  const [value, setValue] = useState('')
  const [priceFromValue, setPriceFromValue] = useState('')
  const [priceToValue, setPriceToValue] = useState(
    [...products].sort((a, b) => b.price - a.price)[0].price
  )

  const handleColorFilter = () => {
    const colors = new Set()
    products.map((product) => colors.add(product.color))
    const newColors = Array.from(colors)
    console.log(colors)
    console.log(newColors)

    const doubleNewColors = []
    newColors.map((color) => doubleNewColors.push({ name: color, done: false }))

    return doubleNewColors
  }

  const [doneTrue, setDoneTrue] = useState([])
  const handleSetDone = (name, done) => {
    setColors(
      newColors.map((color) => (color.name === name ? { name, done } : color))
    )

    done
      ? setDoneTrue(doneTrue.concat([name]))
      : setDoneTrue(doneTrue.filter((color) => color !== name))
    console.log(doneTrue)
  }

  const [newColors, setColors] = useState(handleColorFilter)

  const newProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) &&
      (doneTrue.length === 0 || doneTrue.includes(product.color)) &&
      product.price >= priceFromValue &&
      product.price <= priceToValue
  )
  const handlePriceFromFilter = (e) => {
    setPriceFromValue(e.target.value)
  }
  const handlePriceToFilter = (e) => {
    e.target.value === ''
      ? setPriceToValue(products.sort((a, b) => b.price - a.price)[0].price)
      : setPriceToValue(e.target.value)
  }

  const total = newProducts.length

  return (
    <div className="container">
      <div className="start_block">
        <div className="search-block">
          <div className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="??????????"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className="sorts">
          <button
            onClick={() => {
              setProducts([].concat(products.sort((a, b) => a.price - b.price)))
            }}
          >
            ?????????????? ??????????????
          </button>

          <button
            onClick={() => {
              setProducts([].concat(products.sort((a, b) => b.price - a.price)))
            }}
          >
            ?????????????? ??????????????
          </button>

          <button
            onClick={() =>
              setProducts(
                [].concat(products.sort((a, b) => b.rating - a.rating))
              )
            }
          >
            ?????????????? ????????????????????
          </button>
        </div>
      </div>
      <div className="info">
        <div className="filter">
          <div className="color_text_block">
            <p className="color_text">???? ??????????</p>
          </div>
          <div className="input_colors">
            {newColors.map((color) => (
              <FilterColor
                name={color.name}
                done={color.done}
                onDone={handleSetDone}
              />
            ))}
          </div>

          <div className="price_text_block">
            <p className="price_text">???? ????????</p>
          </div>
          <div className="input_price">
            <input
              type="number"
              min={0}
              placeholder="????"
              onChange={handlePriceFromFilter}
            ></input>
            -
            <input
              type="number"
              min={0}
              placeholder="????"
              onChange={handlePriceToFilter}
            ></input>
          </div>
          <div>
            <p className="count">?????????? ??????????????????: {total}</p>
          </div>
        </div>

        <div className="products">
          {total === 0 ? (
            <p className="nothing">???? ???????????? ?????????????? ???????????? ???? ??????????????</p>
          ) : (
            newProducts.map((product) => (
              <Item
                id={product.id}
                name={product.name}
                description={product.description}
                color={product.color}
                price={product.price}
                rating={product.rating}
                imageUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
