import * as React from 'react';
const FetchComponent = React.lazy(() => import('./lazyComponent'));
const FallbackComponent : React.SFC<{}> = () => <div>Loading...</div> 

export const ChildComponentForSuspense : React.SFC<{}> = () => (
  <React.Suspense fallback={<FallbackComponent />}>
    <FetchComponent />
  </React.Suspense>
);