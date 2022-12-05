import React from 'react'

export default function Search () {
    const searchInput = document.getElementById('search-input')
    const element = (id) => {
        return document.getElementById(id)
    }

    let allSearchData =''

    const getResults =() => {
        let search = searchInput.value
        allSearchData =''

        hideResults()
        clearResults()
        clearData()

        if (search.length > 1){
            let counter = 0
            for (let x of names){
                if (counter < 10){
                    if (x.toLowerCase().includes(search.toLowercase())){
                        element('search-results').innerHTML
                    }
                }
}            }
        }
    }

    return (
        <div>
            <div>
                <input type='input' id='search-input' placeholder='Search' />
            </div>

            <div id='search-results'>

            </div>
        </div>
    )
}