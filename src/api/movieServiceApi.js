class TravelServiceApi {

 static returnMovie() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(Object.assign({}, {
            name : "Mumy",
            type: "horror"
       }));
     }, 3000);
   });
 }
}

export default TravelServiceApi;
