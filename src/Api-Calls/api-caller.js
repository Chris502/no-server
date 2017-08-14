import axios from 'axios'


const netflicker = 'http://netflixroulette.net/api/api.php?'
const thronesAPI = 'https://www.anapioficeandfire.com/api/characters?name='


export function 

            getMoviesByTitle(val){
        return axios.get(netflicker +'title=' + val + '&type=plain')
            .then((response)=>{ return response})
        
        };

    export      function getMoviesByTitleNYear(val,val2){
        return axios.get(netflicker +'title=' + val + '&year=' + val2 )
            .then((response)=>{ 
                let result = response.data
                
                return result})
        
        };
    
    export function getMovieByDirector(val){
        return axios.get(netflicker +'&director=' + val)
            .then((response)=> { return response.data})
    }
    
     export function getMovieByActor(val){
        return axios.get(netflicker +'actor=' + val)
            .then((response)=> { return response.data})
    }

    export function thronesByName(val) {
        return axios.get(thronesAPI + val)
            .then((response)=> {return response.data})
    }




