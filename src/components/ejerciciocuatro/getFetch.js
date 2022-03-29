import Productos from './productos.json'

export const CargarProductos = new Promise((resolve,reject)=>{
    if(true){
       
            resolve(Productos)
        
    }else{
        reject('400 not found')
    }})
  
export const getItem = (id) => new Promise ((resolve,reject)=>{
    if(true){
       
        resolve(Productos.filter(prod => { return (prod.id === id) })[0])
    
            }else{
                reject('400 not found')
            }
            
})