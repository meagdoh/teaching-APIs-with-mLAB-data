$(document).ready(() => {
  $(function() {
    function log(message) {
      $("<div>").text(message).prependTo("#log");
      $("#log").scrollTop(0);
    }
    $("#city").autocomplete({
      source: function(request, response) {
        let url = 'http://data-api.measurementlab.net/locations/search?q='
        $.ajax({
          url: url,
          dataType: "json",
          data: {
            term: request
          },
          success: function(data) {
            console.log(data)
            response(data);
          }
        });
      },
      minLength: 2,
      select: function(event, ui) {
        log("Selected: " + ui.item.value + " aka " + ui.item.id);
      }
    });
  });
});

//   $('#button').click(function() {
//
//     var cityName = $("input").val()
//
//     let url = 'http://data-api.measurementlab.net/locations/search?q=' + cityName
//     $.ajax({
//       url,
//       type: "get",
//       dataType: "json"
//     }).done((response) => {
//
//       for (i = 0; i < 4; i++) {
//         console.log(response.results[i].meta.client_city + ", " + response.results[i].meta.client_region )
//
//         let list = $(`<li>${response.results[i].meta.client_city + ", " + response.results[i].meta.client_region}</li>`)
//         $("#body").append(list)
//       };
//     }).fail(() => {
//       console.log("ajax request fails")
//     }).always(() => {
//       // console.log(" this always happens regardless of sucess or failure")
//     })
//   });
// });
//   $("#button").on("click", () => {
//     let url = 'http://data-api.measurementlab.net/locations/search?q='+cityName
//     $.ajax({
//       url,
//       type: "get",
//       dataType: "json"
//     }).done((response) => {
//
//       for (i = 0; i < 4; i++) {
//         console.log(response.results[i].meta.client_asn_name)
//
//         let list = $(`<li>${response.results[i].meta.client_asn_name}</li>`)
//         $("#body").append(list)
//       };
//     }).fail(() => {
//       console.log("ajax request fails")
//     }).always(() => {
//       // console.log(" this always happens regardless of sucess or failure")
//     })
//   })
// });
