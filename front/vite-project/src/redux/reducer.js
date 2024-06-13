import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem('user');
let parsedUser = null;
try {
  parsedUser = savedUser ? JSON.parse(savedUser) : null;
} catch (error) {
  console.error('Error al parsear usuario guardado en localStorage:', error);
}

const initialState = {
  user: parsedUser,
  userAppointments: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    cancelAppointment: (state, action) => {
      const appointmentId = action.payload;
      state.userAppointments = state.userAppointments.map((appointment) =>
        appointment.IdTurnos === appointmentId ? { ...appointment, status: false } : appointment
      );
    },
  },
});

export const { setUser, logout, setUserAppointments, cancelAppointment } = userSlice.actions;
export default userSlice.reducer;
