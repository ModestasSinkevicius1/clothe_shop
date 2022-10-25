import './App.css';
import ClotheContext from './Context/ClothesContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Components/client/Home.jsx';
import Create from './Components/admin/Create';
import MyOrders from './Components/Orders/MyOrders';
import { authConfig } from './Functions/auth.js';
import { LoginPage, LogoutPage, RequireAuth } from './Components/Auth/Auth';
import ShowNav from './Components/ShowNav';

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
  const [stats, setStats] = useState(null);

  const [saveData, setSaveData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [modalOrder, setModalOrder] = useState(null);
  const [newOrder, setNewOrder] = useState(null);

  const [refresh, setRefresh] = useState(Date.now());
  const [refreshStatus, setRefreshStatus] = useState(Date.now());

  const [deleteOrder, setDeleteOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(null);

  const [status, setStatus] = useState(1);

// GET
  useEffect(()=>{
    axios.get('http://localhost:3007/clothes', authConfig())
    .then(res => {
      setClothes(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setClothes('error'));
  }, [refresh]);

  useEffect(()=>{
    axios.get('http://localhost:3007/orders', authConfig())
    .then(res => {
      setOrders(res.data);
      setStats(res.data.map(d => (d.price)));
    })
    .catch(_ => setOrders('error'));
  }, [refresh]);

//CREATE
useEffect(()=>{
  if(saveData === null){
    return;
  }
  axios.post('http://localhost:3007/clothes', saveData, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveData]);

//CREATE ORDER
useEffect(()=>{
  if(newOrder === null){
    return;
  }
  axios.post('http://localhost:3007/orders', newOrder, authConfig())
  .then(res => setRefresh(Date.now()));
}, [newOrder]);

//UPDATE
useEffect(()=>{
  if(updateOrder === null){
    return;
  }
  axios.put('http://localhost:3007/orders/' + updateOrder.id, updateOrder, authConfig())
  .then(res => setRefresh(Date.now()));
}, [updateOrder]);

//DELETE
useEffect(() => {
  if (null === deleteData) {
      return;
  }
  axios.delete('http://localhost:3007/clothes/'+ deleteData.id, authConfig())
  .then(res => setRefresh(Date.now()));
}, [deleteData]);

useEffect(() => {
  if (null === deleteOrder) {
      return;
  }
  axios.delete('http://localhost:3007/orders/'+ deleteOrder.id, authConfig())
  .then(res => setRefresh(Date.now()));
}, [deleteOrder]);

  return (
    <BrowserRouter>
    <ClotheContext.Provider value={{
      clothes,
      setClothes,
      setSaveData,
      setDeleteData,
      setModalOrder,
      modalOrder,
      setNewOrder,
      orders,
      setDeleteOrder,
      refreshStatus,
      status,
      setStatus,
      setUpdateOrder,
      setRefresh,
      stats,
    }}>
      <div className="App">
        <header className="App-header">
          <ShowNav />
          <Routes>
            <Route path='/login' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/logout' element={<LogoutPage setRefreshStatus={setRefreshStatus} />}> </Route>
            <Route path='/home' element={<RequireAuth role='user'><Home /></RequireAuth>}></Route>
            <Route path='/home/clothes' element={<RequireAuth role='admin'><Create /></RequireAuth>}></Route>
            <Route path='/home/orders' element={<RequireAuth role='user'><MyOrders /></RequireAuth>}></Route>
          </Routes>
        </header>
      </div>
    </ClotheContext.Provider>
    </BrowserRouter>
  );
}

export default App;
