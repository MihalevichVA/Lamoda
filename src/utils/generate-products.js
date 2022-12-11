import { images, names, colors, words } from './const-arrays.js'

export const generateProducts = (n = 500) => {
  const products = []
  for (let i = 0; i < n; i++) {
    products.push(generateProduct())
  }

  return products
}

const generateProduct = () => ({
  id: Date.now() + getRandomId(),
  name: getRandomInfo(names),
  description: getRandomDescription(words),
  color: getRandomInfo(colors),
  price: getRandomNum(10, 9999),
  rating: getRandomNum(1, 100),
  imageUrl: getRandomInfo(images),
})

const getRandomId = () => Math.random().toString(36).substring(2)

const getRandomDescription = (array) => {
  function getRandomWord(firstLetterToUppercase = false) {
    const word = array[randomNumber(0, array.length - 1)]
    return firstLetterToUppercase
      ? word.charAt(0).toUpperCase() + word.slice(1)
      : word
  }

  function generateWords(length = 10) {
    return (
      [...Array(length)]
        .map((_, i) => getRandomWord(i === 0))
        .join(' ')
        .trim() + '.'
    )
  }

  function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  return generateWords(4)
}

const getRandomInfo = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min
