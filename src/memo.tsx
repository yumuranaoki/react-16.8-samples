import * as React from "react";
import { CountAPI } from './API/count';

const FetchComponent : React.SFC<{}> = () => {
  const [count, setCount] = React.useState(0);

  const memoizedCount = React.useMemo(() => {
    return count
  }, [count]);

  const fetchData = async () => {
    const response = await CountAPI.getCount();
    const count = await response.count
    setCount(count);
  }

  React.useEffect(() => {
    console.log('useEffect is called')
    fetchData()
  });

  return (
    <div>
      <p>fetched data with suspense: {memoizedCount}</p>
    </div>
  )
}

export default FetchComponent;