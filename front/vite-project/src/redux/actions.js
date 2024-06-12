import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const cancelTurno = (turnoId) => async (dispatch) => {
  if (window.confirm("¿Estás seguro de que quieres cancelar este turno? (aprete aceptar para confirmar la cancelacion")) {
    try {
      await axios.put(`http://localhost:3001/appointment/cancel/${turnoId}`);
      dispatch(cancelAppointment(turnoId));
      alert("¡Tu turno ha sido cancelado correctamente!");
      window.location.reload();
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  }
};

const initialState = {
  userAppointments: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cancelAppointment: (state, action) => {
      const appointmentId = action.payload;
      state.userAppointments = state.userAppointments.map((appointment) =>
        appointment.IdTurnos === appointmentId ? { ...appointment, status: false } : appointment
      );
    },
  },
});

export const { cancelAppointment } = userSlice.actions;
export default userSlice.reducer;
