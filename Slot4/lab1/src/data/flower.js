const flowerNames = [
  'Ceasar 4N',
  'Mini Yaya',
  'Crystallinum',
  'Damari',
  'Busuangense',
  'Pink Moth',
  'Alba',
  'Singapore Yellow Dendro',
  'Snow Queen',
  'Blue Velvet'
]

const flowerCategories = [
  'Dendrobium',
  'Dendrobium',
  'Dendrobium',
  'Dendrobium',
  'Dendrobium',
  'Oncidium',
  'Dendrobium',
  'Dendrobium',
  'Phalaenopsis',
  'Phalaenopsis'
]

export const imageFiles = [
    '!.webp',
    '@.png',
    '3.png',
    '$.png',
    '%.jpg',
    '^.webp',
    '&.jpg',
    '8.jpeg',
    '9.jpg',
    '10.jpg'
  ]

  const flowers = flowerNames.map((name, i) => ({
  id: `F${100 + i}`,
  name,
  category: flowerCategories[i],
  avatar: `/images/${imageFiles[i]}`
}))

export default flowers