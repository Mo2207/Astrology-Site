
import { Suspense } from 'react';
import ClientPage from './clientPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage />
    </Suspense>
  );
}


