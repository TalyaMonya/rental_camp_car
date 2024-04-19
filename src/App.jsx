import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const WelcomePage = lazy(() => import("./pages/WelcomePage"))

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />

          </Route>
          <Route path="*" element={<WelcomePage />} />
      </Routes>
    </>
  );
}
export default App;
