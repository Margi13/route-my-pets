const baseUrl = 'http://localhost:3030/data'
export const getAll = ()=>{
    return fetch(`${baseUrl}/pets`)
    .then(response => response.json())
    .catch(e=>console.log(e.message));

}
export const getOne = (petId)=>{
    return fetch(`${baseUrl}/pets/${petId}`)
    .then(response => response.json())
    .catch(e=>console.log(e.message));

}
export const create = (petData)=>{
    return fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(petData)
    })
    .then(response => response.json())
    .catch(e=>console.log(e.message));

}