import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  data: [
    {
      id: 1,
      image: "./images/1.png",
      name: "Katarina",
      position: "Vice President of the company",
      desc: "The vice president is one of the highest officials in the firm, in the corporation, replacing the president; he directs one of the main activities of the company, corporation.",
    },
    {
      id: 2,
      image: "./images/2.png",
      name: "Mia",
      position: "Information security specialist",
      desc: "An information security specialist (IS) ensures the confidentiality and safety of data at the product development stage, monitors the protection of networks from external threats, examines the integrity of the information system and tests its weaknesses.",
    },
    {
      id: 3,
      image: "./images/3.png",
      name: "Samanta",
      position: "Marketing Specialist",
      desc: "A marketer is a specialist who promotes goods and services on the market. To do this, he analyzes the needs and interests of the target audience, studies competitors, and then develops and implements a strategy whose main goals are to increase brand awareness and attractiveness, as well as increase sales.",
    },
  ],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState: initialStateValue,
  reducers: {},
  selectors: {
    getInfo: (state) => state.data,
  },
});

export const { getInfo } = sliderSlice.selectors;
export default sliderSlice.reducer;
