import '../scripts/component/search-bar.js';

function main(){
    const key = "d9266ef8";

    const getMovies=()=>{
    
        const buttonElement = document.querySelector("search-bar").shadowRoot.querySelector('#searchButtonElement')
        const searchValue = document.querySelector("search-bar").shadowRoot.querySelector("#searchElement")
        console.log(buttonElement);
        buttonElement.addEventListener("click", function(){
            const keyword= searchValue.value;
            console.log(keyword);

            fetch(`http://www.omdbapi.com/?apikey=${key}&s=${keyword}`)
                .then(response=> {return response.json()}).then(responseMovie=>{
                    // movies.forEach(movie=>{
                    //     console.log(movie.Title)
                    // })
                    if(responseMovie.Error){
                        showResponseMessage(responseMovie.Error);
                    }else{
                        renderAllMovies(responseMovie.Search);
                    }
                    
            })
        })
    }
    
    const renderAllMovies = (movies)=>{
        const listBookElement = document.querySelector('.movie-container')
        listBookElement.innerHTML='';
          
        movies.forEach(movie=>{
            listBookElement.innerHTML+=`
            <div class="thumbnail my-3" >
                <div class="card" >
                    <img src="${movie.Poster}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Year}</p>
                    </div>
                </div>
            </div>
            `
        });

    }
    
    const showResponseMessage = (message = 'Check your internet connection')=>{
        alert(message);
    }
    
    document.addEventListener('DOMContentLoaded',function(){
        
        getMovies();
    });    
}

export default main;
