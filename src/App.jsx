import './App.css';
import ClotheContext from './Context/ClothesContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/client/Home.jsx';
import Nav from './Components/Nav';
import Create from './Components/admin/Create';
import MyOrders from './Components/Orders/MyOrders';

//UPDATE
// useEffect(()=>{
//   if(editData === null){
//     return;
//   }
//   axios.put('http://localhost:3007/path/' + editData.id, editData, authConfig())
//   .then(res => setRefresh(Date.now()));
// }, [editData]);

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
  const [orders, setOrders] = useState(null);

  const [saveData, setSaveData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [modalOrder, setModalOrder] = useState(null);
  const [newOrder, setNewOrder] = useState(null);

  const [refresh, setRefresh] = useState(Date.now());

  const [deleteOrder, setDeleteOrder] = useState(null);

// GET
  useEffect(()=>{
    axios.get('http://localhost:3007/clothes')
    .then(res => {
      setClothes(res.data);
    })
    .catch(_ => setClothes('error'));
  }, [refresh]);

  useEffect(()=>{
    axios.get('http://localhost:3007/orders')
    .then(res => {
      setOrders(res.data);
    })
    .catch(_ => setOrders('error'));
  }, [refresh]);

//CREATE
useEffect(()=>{
  if(saveData === null){
    return;
  }
  axios.post('http://localhost:3007/clothes', saveData)
  .then(res => setRefresh(Date.now()));
}, [saveData]);

//CREATE ORDER
useEffect(()=>{
  if(newOrder === null){
    return;
  }
  axios.post('http://localhost:3007/orders', newOrder)
  .then(res => setRefresh(Date.now()));
}, [newOrder]);

//DELETE
useEffect(() => {
  if (null === deleteData) {
      return;
  }
  axios.delete('http://localhost:3007/clothes/'+ deleteData.id)
  .then(res => setRefresh(Date.now()));
}, [deleteData]);

useEffect(() => {
  if (null === deleteOrder) {
      return;
  }
  axios.delete('http://localhost:3007/orders/'+ deleteOrder.id)
  .then(res => setRefresh(Date.now()));
}, [deleteOrder]);

  return (
    <BrowserRouter>
    <ClotheContext.Provider value={{
      clothes,
      setSaveData,
      setDeleteData,
      setModalOrder,
      modalOrder,
      setNewOrder,
      orders,
      setDeleteOrder,
    }}>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/home/clothes' element={<Create />}></Route>
            <Route path='/home/orders' element={<MyOrders />}></Route>
          </Routes>
        </header>
      </div>
    </ClotheContext.Provider>
    </BrowserRouter>
  );
}

export default App;
