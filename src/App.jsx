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
import types from './data/types.js';

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
  
  const [stats, setStats] = useState(null);

  const [saveData, setSaveData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [modalOrder, setModalOrder] = useState(null);
  const [modalDelete, setModalDelete] = useState(null);
  const [newOrder, setNewOrder] = useState(null);

  const [refresh, setRefresh] = useState(Date.now());
  const [refreshStatus, setRefreshStatus] = useState(Date.now());

  const [deleteOrder, setDeleteOrder] = useState(null);
  const [updateOrder, setUpdateOrder] = useState(null);

  const [status, setStatus] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  const [ordersCount, setOrdersCount] = useState(null);

// GET
  useEffect(()=>{
    if(status === 1){
        return;
    }
    axios.get('http://localhost:3007/clothes', authConfig())
    .then(res => {
      setClothes(res.data.map((d, i) => ({...d, show: true, row: i})))
    })
    .catch(_ => setClothes('error'));
  }, [refresh, status]);

  useEffect(()=>{
    if(status === 1){
      return;
    }
    axios.get('http://localhost:3007/orders/count', authConfig())
    .then(res => {
      setOrdersCount(res.data);
    })
    .catch(_ => setOrdersCount('error'));
  }, [refresh, status])

  useEffect(()=>{
    if(status === 1){
      return;
    }
    axios.get('http://localhost:3007/orders/sum', authConfig())
    .then(res => {
      setStats(res.data);
    })
    .catch(_ => setStats('error'));
  }, [refresh, status])

//CREATE
useEffect(()=>{
  if(saveData === null){
    return;
  }
  axios.post('http://localhost:3007/clothes', saveData, authConfig())
  .then(res => setRefresh(Date.now()));
}, [saveData]);
// fhdshgdhk
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
      setModalDelete,
      modalOrder,
      modalDelete,
      setNewOrder,
      setDeleteOrder,
      refreshStatus,
      status,
      setStatus,
      setUpdateOrder,
      setRefresh,
      stats,
      types,
      setCurrentPage,
      currentPage,
      ordersCount,
      refresh,
    }}>
      <div className="App">
        <header className="App-header">
          {/* <ShowNav /> */}
          <Routes>
            <Route path='/' element={<LoginPage setRefreshStatus={setRefreshStatus} />}> </Route>
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
