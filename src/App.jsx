import './App.css';
import ClotheContext from './Context/ClothesContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/client/Home.jsx';
import Nav from './Components/Nav';
import Create from './Components/admin/Create';

//UPDATE
// useEffect(()=>{
//   if(editData === null){
//     return;
//   }
//   axios.put('http://localhost:3007/path/' + editData.id, editData, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [editData]);

//CREATE
// useEffect(()=>{
//   if(newData === null){
//     return;
//   }
//   axios.post('http://localhost:3007/path', newData, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [newData]);

//DELETE
// useEffect(() => {
//   if (null === deleteData) {
//       return;
//   }
//   axios.delete('http://localhost:3007/path/'+ deleteData.id, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [deleteData]);

// const reList = data => {
//   const d = new Map();
//   data.forEach(line => {
//       if (d.has(line.title)) {
//           d.set(line.title, [...d.get(line.title), line]);
//       } else {
//           d.set(line.title, [line]);
//       }
//   });
//   return [...d].map((d1, i) => ([...d1, {show: true}]));
//   //or
//   return [...d];
// }

function App() {

  const [clothes, setClothes] = useState(null);

// GET
  useEffect(()=>{
    axios.get('http://localhost:3007/clothes')
    .then(res => {
      setClothes(res.data);
    })
    .catch(_ => setClothes('error'));
  }, []);

  return (
    <BrowserRouter>
    <ClotheContext.Provider value={{
      clothes,
    }}>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/home/clothes' element={<Create />}></Route>
          </Routes>
        </header>
      </div>
    </ClotheContext.Provider>
    </BrowserRouter>
  );
}

export default App;
