function addMovie() {
  $.ajax({
    type: "POST",
    url: "./movies/add",
    dataType: "json",
    data:$("#add_movie_form").serialize(),
    success: function(response) {
                  if(response.isSuccess){
                    window.location.href="index.html";
                  }
                },
    error: function(response){
      console.log("Error in method " + response);
    }
  });
}
