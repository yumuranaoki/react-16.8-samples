import * as React from 'react';
import { countContext } from './context/count'

export const ChildComponentForUseContext: React.SFC<{}> = () => {
  const {count, setCount} = React.useContext(countContext);

  return (
    <div>
      <p>count by useContex via useState: {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        add by useContext via useState
      </button>
    </div>
  )
}