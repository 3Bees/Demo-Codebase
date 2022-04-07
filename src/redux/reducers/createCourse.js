import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  configuration: {
    level: "o-levels",
    course: "biology",
    hasUnits: false,
  },
  units: [],
};

const createCourseSlice = createSlice({
  name: "createCourse",
  initialState,
  reducers: {
    updateLevel: (state, action) => {
      state.configuration.level = action.payload;
    },
    updateCourse: (state, action) => {
      state.configuration.course = action.payload;
    },
    setHasUnits: (state, action) => {
      state.configuration.hasUnits = action.payload;
    },
    reset: (state) => {
      return { ...initialState };
    },
    setUnits: (state, action) => {
      state.units = action.payload;
      return state;
    },
    setChaptersWithUnits: (state, action) => {
      let toUpdate = state.units.find(
        (unit) => unit.name === action.payload.name
      );
      toUpdate.chapters = action.payload.chapters;
      return state;
    },
  },
});

export const createCourseActions = createCourseSlice.actions;
export const createCourseReducer = createCourseSlice.reducer;
