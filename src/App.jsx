import Router from './Routes/Router'
import AlertModal from './components/shared/ContentProducts/AlertModal'

function App() {
  return (
    <div className=" w-full min-h-screen">
      <AlertModal/>
      <Router/>
    </div>
  );
}

export default App;
