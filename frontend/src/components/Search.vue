<template>
        
    <div class="mx-auto mt-5 search-bar input-group mb-3">
        
        <input type="text" id = 'input' placeholder="검색어" class="form-control rounded-pill">
        
        <b-button v-b-modal.modal-scrollable variant="info" class="rounded-pill" @click="submit" >search</b-button>
        
                    <b-modal id="modal-scrollable" scrollable title="Movie List" size="xl" >
                
                        <div v-for="movie in movies" v-bind:key="movie.id"> 
                            <div class="card">
                                
                                <img v-bind:src="movie['image']" style= "width:100%; height:60%" > 
                            
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                    <h5 class="card-title list-group-item">{{movie['title']}}</h5>
                                    <li class="list-group-item"><b>출연배우:</b> {{movie['actor'].slice(0,-1)}}</li>
                                    <li class="list-group-item "><b>개봉:</b> {{movie['date']}}</li>
                                    <li class="list-group-item"><b>부제목:</b> {{movie['entitle']}}</li>
                                    <li class="list-group-item"><b>평점:</b> {{movie['rating']}}</li>
                                    </ul>
                                </div>
                        
                            </div>
                        </div> 
                    
                    </b-modal>
            </div>

    
            
</template> 


<script>
import axios from 'axios'
export default{
    data() {
        return {
            movies : []
            }
    },   
    methods: {
        submit: function(){
            axios.get('http://localhost:8081/search/blog?query='+document.getElementById('input').value)
            .then((res)=>{
                document.getElementById('input').value='';
                this.movies =[];
                var JSON_DATA = JSON.parse(res.data)
                for (var i = 0; i < Number(JSON_DATA['display']); i++){
                    if (JSON_DATA['items'][i]['image']){
                        this.movies.push({
                        title : JSON_DATA['items'][i]['title'].replace(/(<([^>]+)>)/ig,""),
                        image : JSON_DATA['items'][i]['image'],
                        actor : JSON_DATA['items'][i]['actor'].replaceAll('|',','),
                        date : JSON_DATA['items'][i]['pubDate'],
                        entitle : JSON_DATA['items'][i]['subtitle'],
                        rating :JSON_DATA['items'][i]['userRating']
                    }); 
                    }
                }
            })
        },
    },
}

</script> 

<style lang="scss" scoped>
    .search-bar {
        width: 500px;
        }

    .card{
        width: 15rem; 
        float: left;
        padding: 10px;
        margin: 5px;
        margin-left: 10px;
        height: 700px;
        table-layout: fixed;
        font-size: .9rem;

     
     }

    .card-body {
         padding: 1px 1px;
         margin:  2px;
         height: 400px;
         table-layout: fixed;
      
     }

</style>




