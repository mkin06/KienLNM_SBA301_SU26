import { imageFiles } from './banner'

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

const flowers = flowerNames.map((name, i) => ({
  id: `F${100 + i}`,
  name,
  category: flowerCategories[i],
  avatar: `/images/${imageFiles[i]}`
}))

export default flowers