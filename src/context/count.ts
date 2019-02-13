import * as React from 'react';

interface initialStateInterface {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const initialState : initialStateInterface = {
  count: 0,
  setCount: () => {}
}

export const countContext = React.createContext(initialState);