class MovieServiceApi {

 static returnMovie() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve([
         {
            name : "Mumy",
            type: "horror"
         },
         {
            name : "Grow Up",
            type: "comedy"
         }]
     );
     }, 1000);
   });
 }
}

export default MovieServiceApi;
