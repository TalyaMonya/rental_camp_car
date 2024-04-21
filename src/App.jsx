import { Route, Routes } from 'react-router-dom';
import {SharedLayout} from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritePage"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage/>} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
      </Routes>
    </>
  );
}
export default App;
