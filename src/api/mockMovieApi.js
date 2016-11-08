class MovieServiceApi {

 static returnMovie(search) {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve([
         "Search": {
            Title : "Mumy",
            Type: "horror"
         },
         {
            Title : "Grow Up",
            Type: "comedy"
         }]
     );
     }, 1000);
   });
 }
}

export default MovieServiceApi;
