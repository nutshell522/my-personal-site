import Layout from './components/layout/layout';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <div className="app w-screen h-screen flex">
      <Layout />
      <main
        className={`w-full h-screen bg-gray-200 dark:bg-gray-900 overflow-scroll`}
      >
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
