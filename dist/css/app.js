$(document).ready(function(){
  let url = "https://newsapi.org/v2/everything?q=apple&from=2020-04-28&to=2020-04-28&sortBy=popularity&apiKey=abb657dbf02941289a4e3c844b2f644c"
  $.ajax({
    url:url,
      method: "GET",
      dataType:"Json",

      beforeSend: function(){
        $(".progress").show();
      },

      complete:function(){
        $.(".progress").hide();
      },

      success:
  })

})
  var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=abb657dbf02941289a4e3c844b2f644c';
var req = new Request(url);
fetch(req)
  .then(function(response) {
      console.log(response.json());
  })
