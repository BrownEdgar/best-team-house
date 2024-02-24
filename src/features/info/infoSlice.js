import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const infoSlice = createSlice({
    name: 'info',
    initialState: {
        data: [{
            "id": 1,
            "img": "/pictures/meadow-view.jpg",
            "title": "Meadow view",
            "price": "$570.00",
            "state": "New",
            "beds": "3 Beds",
            "baths": "3 Baths",
            "sqft": "2,532 Sq.Ft"
        },
        {
            "id": 2,
            "img": "/pictures/orchard-house.jpg",
            "title": "Orchard House",
            "price": "$570.00",
            "state": "New",
            "bads": "3 Bads",
            "baths": "3 Baths",
            "sqft": "2,532 Sq.Ft"
        },
        {
            "id": 3,
            "img": "/school-house.jpg",
            "title": "School House",
            "price": "$570.00",
            "state": "New",
            "bads": "3 Bads",
            "baths": "3 Baths",
            "sqft": "2,532 Sq.Ft"
        }],
        loading: false,
        error: null,
    },
    reducers: {}
})

export default infoSlice.reducer
export const {getAllInfo} = infoSlice.selectors
