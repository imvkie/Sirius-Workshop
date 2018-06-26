
$.ajax({
  type:"GET",
  url:"./movies/all",
  success:function(response){
    console.log("Data from success",response);
    //formObject(response)
  },
  error:function(err){
    console.log("Error in GEET method",err);
  }
});

//function formObject(response){
  //console.log("formObject response", respose);
}
