import { useEffect, useState } from "react"
import { CardAddItem } from "./Components/CardAddItem"
import { CardItem } from "./Components/CardItem"
import axios from "axios"

function App() {

  const [openModal, setOpenModal]=useState(false)
  const [products, setProducts] = useState()
  const [reload, setReload] = useState(false)
  useEffect(()=>{
    const getProduct = async()=>{
      try {
        const response = await axios.get('http://localhost:3000/api/products')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  },[openModal, reload])
  const closeModal =()=>{
    setOpenModal(false)
  }
  const useReload = ()=>{
    setReload(!reload)
  }
  return (
    <div className="w-screen h-screen bg-gray-800 p-5" >

      <button onClick={()=>setOpenModal(true)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 mt-10 mb-5 rounded-lg text-xl font-bold px-5 py-2.5 text-center me-2 ">Agregar Producto</button>
      <div className="grid grid-cols-3">
    {
      products ? 
      products.map((item,index)=>(
        <CardItem key={index} name={item.nameProduct} id={item._id} reload={useReload}/>
      ))
      : <h1 className="text-3xl text-white ">No hay Productos</h1>
    }
    </div>
    <CardAddItem isOpen={openModal} close={closeModal}  />
    </div>
  )
}

export default App
