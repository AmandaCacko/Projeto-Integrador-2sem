const stateSelect = document.querySelector('#estado')
const citySelect = document.querySelector('#cidade')

const appendOption = (array, selection) => {
    citySelect.innerHTML = `<option disabled selected value="">Selecione</option>`

    array.forEach( item => {
        let option = document.createElement('option')
        option.setAttribute('value', item.id)
        option.text = selection === stateSelect ? item.sigla : item.nome
        selection.appendChild(option)
    })
}

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
.then(res => res.json())
.then(json => {
    appendOption(json, stateSelect)
})

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome')
.then(res => res.json())
.then(json => {
    appendOption(json, citySelect)
})

export const fetchCities = UF => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios?orderBy=nome`)
    .then(res => res.json())
    .then(json => appendOption(json, citySelect))
}

stateSelect.addEventListener('change', () => fetchCities(stateSelect.value))