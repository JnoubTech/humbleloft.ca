import { createContext, useContext } from 'react';

const BookingContext = createContext(() => {});

export const BookingProvider = BookingContext.Provider;

export function useBooking() {
  return useContext(BookingContext);
}
