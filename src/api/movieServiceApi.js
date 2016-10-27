class MovieServiceApi {

 static returnMovie() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(Object.assign({}, [{
            name : "Mumy",
            type: "horror"
       },{
         name: "Grow up",
         type: "comedy",
       }]
     ));
    }, 1000);
   });
 }
}

export default MovieServiceApi;
