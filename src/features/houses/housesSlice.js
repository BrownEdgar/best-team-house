import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
const initialStateValue = [
  {
    id: nanoid(6),
    title: 'Meadow View',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house1.jpg"
  },
  {
    id: nanoid(6),
    title: 'Orchard House',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house2.jpg"
  },
  {
    id: nanoid(6),
    title: 'School House',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house3.jpg"
  },
  {
    id: nanoid(6),
    title: 'Meadow View',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house4.jpg"
  },
  {
    id: nanoid(6),
    title: 'Orchard House',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house5.jpg"
  },
  {
    id: nanoid(6),
    title: 'School House',
    beds: 3,
    baths: 3,
    area: 2532,
    price: 570,
    img: "/house-pictures/house6.jpg"
  },
]

const housesSlice = createSlice({
  name: 'houses',
  initialState: initialStateValue,
  reducers: {},
  selectors: {
    getHouses: (state) => state
  }
})

export const { getHouses } = housesSlice.selectors
export default housesSlice.reducer