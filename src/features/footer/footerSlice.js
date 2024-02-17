import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    title: 'Company',
    data: ['Crypto Widgets', 'Crypto Currency', 'Bitcoin Guide', 'Contact Us', 'Service']
  },
  {
    title: 'Navigate',
    data: ['Roadmap', 'Video', 'Team', 'Coin Distribution', 'Media']
  },
  {
    title: 'Products',
    data: ['Hardware', 'Mining', 'Terade Calls', 'Software', 'Media']
  },
  {
    title: 'Contact Us',
    data: ['Mailing Adress', 'Suite 1100', '019878987546', 'Gmail']
  },
]

const footerSlice = createSlice({
  name: 'footer',
  initialState: initialStateValue,
  reducers: {}
})

export default footerSlice.reducer