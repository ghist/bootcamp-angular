
// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.tipo}">
            <span class="number">#${pokemon.numero}</span>
            <span class="name">${pokemon.nome}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.tipos.map((tipo) => `<li class="type ${tipo}">${tipo}</li>`).join('')}
                </ol>

                <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
        </li>
       
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')

    //1
    // const newList = pokemons.map((pokemon) => {
    //     //return pokemon.name
    //     return convertPokemonToLi(pokemon)
    // })

    // const newHtml = newList.join('')

    // pokemonList.innerHTML += newHtml

    //2
    //const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

    //console.log(newList)

    //3
    // const listItens = []

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     //pokemonList.innerHTML += convertPokemonToLi(pokemon)
    //     listItens.push(convertPokemonToLi(pokemon))   
    // }

    // console.log(listItens)
})
    
/*    .then(function (response) {
        return response.json()
        
    })
    .then(function (jsonBody){
        console.log(jsonBody)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição concluida')
    })
*/    