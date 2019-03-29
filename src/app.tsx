import * as React from 'react';
import { countContext } from './context/count';
import { ChildComponentForUseContext } from './useContext';
import { ChildComponentForUseReducer } from './useReducer';
import { ChildComponentForSuspense } from "./suspense";
import Form from './customHooks';

export const App: React.SFC<{}> = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  return (
    <countContext.Provider value={{count, setCount}}>
      <p>count by useState: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        add by useState
      </button>
      <ChildComponentForUseContext />
      <ChildComponentForUseReducer />
      <ChildComponentForSuspense />
      <Form />
    </countContext.Provider>
  )
}