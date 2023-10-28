import Router from './Routes/Router'
import AlertModal from './components/shared/ContentProducts/AlertModal'
import Loading from './components/shared/ContentProducts/Loading'

function App() {
  return (
    <div className=" w-full min-h-screen">
      <AlertModal/>
      <Loading/>
      <Router/>
    </div>
  );
}

export default App;
