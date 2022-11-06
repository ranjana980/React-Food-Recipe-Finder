import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ShareIcon from '@material-ui/icons/Share';
import { Visibility } from '@material-ui/icons'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {  Dialog, DialogContent, DialogContentText, TextareaAutosize } from "@material-ui/core";

function App() {
  const [search, setSearch] = useState("Paneer")
  const [resp, setResp] = useState("")
  const [dataList, setDataList] = useState([])
  const [IsOpen, setIsOpen] = useState(false)
  const [SummaryDetails, setSummaryDetails] = useState([])

  useEffect(() => {
    getRecipies()
  }, [search])

  const getRecipies = async () => {
    const APP_ID = "f5c945fe"
    const App_KEY = "272ae8a6053dc1372ceb9d03337cf652"
    const result = await axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${App_KEY}`,
      data: {}
    })
    setDataList(result.data.hits)
    console.log(result, 'dataa')
  }

  return (
    <>
      <div className='d-flex'>
        <div className="side-nav  position-relative w-24 mr-5 bg-light">
        <h5 className='mt-5 ml-2'>Recommended Keyword</h5>
          <div className="w-76 ml-5 mt-2">
            <div className="keyword w-75 text-center bg-white p-1" onClick={() => {
              setSearch('Daal')
              setResp("")
            }}><h6>Daal</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setSearch('Rice')
              setResp("")
            }
            }><h6>Rice</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setSearch('Parathe')
              setResp("")
            }
            }><h6>Parathe</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setSearch('Sabji')
              setResp("")
            }}><h6>Sabji</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Chicken')
            }
            }><h6>Chicken</h6></div>
            <div className="keyword w-75  text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Chinies')
            }
            }><h6>Chinies</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Carry')
            }}><h6>Carry</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Fish')
            }}><h6>Fish</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Paneer')
            }}><h6>Paneer</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Sweets')
            }}><h6>Sweets</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Choclate')
            }}><h6>Choclate</h6></div>
            <div className="keyword w-75 text-center bg-white p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('ice-cream')
            }}><h6>ice-cream</h6></div>
            <div className="keyword w-75 text-center bg-white rounded p-1 mt-2" onClick={() => {
              setResp("")
              setSearch('Choclate')
            }}><h6>Choclate</h6></div>
          </div>
        </div>
        <div className='w-75 ml-2'>
          <div className='d-flex input position-relative w-25 mt-5'>  <input value={resp} onChange={(e) => setResp(e.target.value)} placeholder='Search Recipe By Name...' className='form-control' onKeyDown={(e) => {
            if (e.key == "Enter") {
              setSearch(resp)
            }
          }} /><button className='btn btn-default ml-2' onClick={() => setSearch(resp)}>Search</button></div>
          <div className='row'>
            {dataList.map((item, index) => (
              <div className='col-md-3 col-lg-2 col-xs-12 col-sm-12 card ml-3 mt-3 p-3 main' style={{ filter:'drop-shadow(2px 2px 2px)' }} key={index}>
                <img src={item.recipe.image} />
                <div></div>
                <div className='d-flex mt-3 justify-content-between'>
                  <ImportContactsIcon onClick={() => {
                  setIsOpen(true)
                  setSummaryDetails(item.recipe.ingredients)
                }} className="icon" style={{ color: "#007bff" }} />
                <b className='mb-sm-4'>{item.recipe.mealType}</b>
                <ShareIcon className="icon" style={{ color: "#007bff" }} /> </div>
                <h6 className='title position-relative  text-center bg-white p-2'>{item.recipe.label}</h6>
              </div>
            ))}
            <Dialog maxWidth='sm' minWidth='sm' open={IsOpen} onClose={() => setIsOpen(false)}>
              <div className='w-100 p-5' style={{ background: '#417dbd'}}>
                <div >
                  <h5 className='text-center' >Ingredients </h5>
                  {SummaryDetails.map((item, index) => (
                    <div style={{marginTop:'10px'}} key={index}><span> <img height={50} width={50} src={item.image} /><b style={{marginLeft:'10px'}}>{item.quantity} {item.measure}</b> {item.food}.</span></div>
                  ))}
                  <button type="button" onClick={() => setIsOpen(false)} className="bg-red w-25 mt-5 ml-5" style={{ border: 'none', backgroundColor: 'red', color: 'white',  fontSize: '17px', borderRadius: '8px',  cursor: 'pointer' }}>Close</button>
                </div></div>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  )

}
export default App;
