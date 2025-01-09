const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/56169832?v=4"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl font-bold ml-2">Your Name</h1>
          </div>
        </div>
        <nav>
          <ul className="flex justify-center">
            <li>
              <a href="#">關於我</a>
            </li>
            <li>
              <a href="#">作品集</a>
            </li>
            <li>
              <a href="#">聯絡我</a>
            </li>
          </ul>
        </nav>
      </header>

      <main></main>
    </div>
  );
};

export default App;
