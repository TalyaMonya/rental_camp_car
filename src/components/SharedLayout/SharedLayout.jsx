import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { AppLayout } from './SharedLayout.styled';
import { GlobalStyles } from "../../styles/GlobalStyles";

export const SharedLayout = () => {
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

      <GlobalStyles/>
    </>
  );
};
