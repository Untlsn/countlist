import React, { Suspense } from 'react';
import LoadingScreen from '@organisms/LoadingScreen';

interface PreparedSuspenseProps {
  Component: React.LazyExoticComponent<() => JSX.Element>
}

const PreparedSuspense = ({ Component }: PreparedSuspenseProps) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component />
    </Suspense>
  );
};

export default PreparedSuspense;