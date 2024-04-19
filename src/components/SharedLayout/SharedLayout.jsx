import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { AppLayout } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppLayout>
        <Header />
        <main>
          <Suspense fallback={null}>
        <Outlet />
      </Suspense>
        </main>
      </AppLayout>
    </>
  );
};

export default SharedLayout;
