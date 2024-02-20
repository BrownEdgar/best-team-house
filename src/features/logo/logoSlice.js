import { createSlice } from "@reduxjs/toolkit";

const logoSlice = createSlice({
    name: 'logo',
    initialState: {
        data: [{
                "id": 1,
                "img": "/public/images/forbes.png" 
               },
               {
                 "id": 2,
                "img": "/public/images/google.png" 
               },
               {
                "id": 3,
                "img": "/public/images/microsoft.png" 
               },
               {
                "id": 4,
                "img": "/public/images/slack.png" 
               }],
            loading: false,
            error: null,
            
        },
        reducers: {}
})

export default logoSlice.reducer