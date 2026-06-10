async function buscarPokemon() {
    const id = document.getElementById("pokemonId").value;

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const dados = await resposta.json();

    document.getElementById("nome").textContent = dados.name;
    document.getElementById("imagem").src =
        dados.sprites.front_default;
}