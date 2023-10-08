import { Suspense } from 'react';
import Loading from './loading';

export default function ConferencesLayout({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
