import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App bg-gray-900 min-h-screen text-white flex-col   justify-center">
        <header className=" h-[5.5vh]">
          <NavBar />
        </header>
        <main className="grid justify-center pt-8 pb-10">
          <Routes>
            <Route path='/' element= {<ItemListContainer saludo='Bienvenido a mi App, este es el ItemListContainer' />} />
            <Route path='/category/:catId' element= {<ItemListContainer saludo='Bienvenido a mi App,' />} />
            <Route path='/item/:itemId' element= {<ItemDetailContainer titulo='Este es el ItemDetailContainer' />}/>
            <Route path='/*' element={<Navigate to='/' replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;