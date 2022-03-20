import Productos from './productos.json'

export const CargarProductos = new Promise((resolve,reject)=>{
    if(true){
       
            resolve(Productos)
        
    }else{
        reject('400 not found')
    }})
  