const baseUrl = 'http://localhost:3030/data'
export const getAll = ()=>{
    return fetch(`${baseUrl}/pets`)
    .then(response => response.json())
    .catch(e=>console.log(e.message));

}