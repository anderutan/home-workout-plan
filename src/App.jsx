import ExercisePage from './pages/ExercisePage';
import MainPage from './pages/MainPage';
import WorkoutListPage from './pages/WorkoutListPage';
import MainLayout from './layouts/MainLayout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path='/:day' element={<WorkoutListPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
