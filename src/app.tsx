import * as React from 'react';

export const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click
      </button>
    </div>
  )
}