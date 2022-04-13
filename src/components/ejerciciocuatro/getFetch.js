//import Productos from './productos.json'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'




const cargar = () =>{
    const firestore = getFirestore()
    const query = collection(firestore,'Productos')
    const Productos = getDocs(query).then(resp => resp.docs.map(res=>({id:res.id,...res.data()}))).catch(err=>console.log(err)).finally()
    console.log(Productos)
   return (Productos)
}

export const CargarProductos = new Promise((resolve,reject)=>{
    const Productos = cargar()
    if(true){
       
            resolve(Productos)
        
    }else{
        reject('400 not found')
    }})
  
export const getItem = (id) => new Promise ((resolve,reject)=>{
    const Productos = cargar()
    if(true){
       
        resolve(Productos.filter(prod => { return (prod.id === id) })[0])
    
            }else{
                reject('400 not found')
            }
            
})