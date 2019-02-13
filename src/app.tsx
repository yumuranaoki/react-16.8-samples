import * as React from 'react';
import { countContext } from './context/count';
import { ChildComponentForUseContext } from './childComponentForUseContext';
import { ChildComponentForUseReducer } from './childComponentForUseReducer';

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
    </countContext.Provider>
  )
}