import * as React from 'react';

interface State {
  count: number
}

type IncrementAction = {
  type: string
}

type Actions = IncrementAction;

const initialState : State = {
  count: 0
};

export const reducer = (state: State, action: Actions) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1}
    default:
      throw new Error();
  }
}

export const ChildComponentForUseReducer : React.SFC<{}> = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <p>count by useReducer: {state.count} times</p>
      <button onClick={() => dispatch({type: 'increment'})}>
        add by useReducer
      </button>
    </div>
  )
}