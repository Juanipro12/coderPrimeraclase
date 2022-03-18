import Productos from './productos.json'

export const CargarProductos = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>{
            resolve(Productos)
        },2000)
    }else{
        reject('400 not found')
    }
  })