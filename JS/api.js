async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)

}

start()


function createBreedList(breedList){
    document.getElementById('breed').innerHTML =
    `
    <select name="" id="">
      <option>Elija una raza de perro</option>
      ${Object.keys(breedList).map(function (breed){
        return `<option>${breed}</option>`
       }).join('')}
    </select>
    `
}
