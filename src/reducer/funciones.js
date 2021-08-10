export function buscarId(id,array){
    var ID= parseInt(id)
    var search=array.find(e=>e.id===ID)
    return search
}
export function filtrarId(id,array){
    var ID= parseInt(id)
    var search=array.filter((e) => e.id !== ID)
    return search
}