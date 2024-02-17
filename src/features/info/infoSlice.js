import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getInfo from "./PostsAPI"


export const getInfoAsync = createAsyncThunk('posts/getAsync', getInfo)

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        data: [{
            "id": 1,
            "img": "/pictures/meadow-view.jpg",
            "title": "Meadow view",
            "price": "$570.00",
            "state": "New",
            "bads": "3 Bads",
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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInfoAsync.fulfilled, (state, action) => {
                state.data = action.payload       
                state.loading = false           
            })
            .addCase(getInfoAsync.pending, (state, action) => {
                state.loading = true              
            })
            .addCase(getInfoAsync.rejected, (state, action) => {
                state.loading = false               
                state.error = action.error
            })
    },
    selectors: {
        getAllInfo: (state) => state.data,
        getInfoTitle: (state) => state.data.map(info => ({title: info.title}))
    }
})

export default infoSlice.reducer
export const {getAllInfo} = infoSlice.selectors
// export default function (){
//     return [
//         {
//             id:1,
//             img: '/pictures/meadow-view.jpg',
//             title: 'Meadow view',
//             price: '$570.00',
//             state: 'New',
//             bads: '3 Bads',
//             baths: '3 Baths',
//             sqft: '2,532 Sq.Ft'
//         },

//         {
//             id:2,
//             img: '/pictures/orchard-house.jpg',
//             title: 'Orchard House',
//             price: '$570.00',
//             state: 'New',
//             bads: '3 Bads',
//             baths: '3 Baths',
//             sqft: '2,532 Sq.Ft'
//         },

//         {
//             id:3,
//             img: '/school-house.jpg',
//             title: 'School House',
//             price: '$570.00',
//             state: 'New',
//             bads: '3 Bads',
//             baths: '3 Baths',
//             sqft: '2,532 Sq.Ft',
//         }
//     ]
// }