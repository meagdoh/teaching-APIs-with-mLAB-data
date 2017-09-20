$(document).ready(() => {
  $('#button').click(function() {

    var cityName = $("input").val()

    let url = 'http://data-api.measurementlab.net/locations/search?q=' + cityName
    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {

      for (i = 0; i < 4; i++) {
        console.log(response.results[i].meta.client_city + ", " + response.results[i].meta.client_region )

        let list = $(`<li>${response.results[i].meta.client_city + ", " + response.results[i].meta.client_region}</li>`)
        $("#body").append(list)
      };
    }).fail(() => {
      console.log("ajax request fails")
    }).always(() => {
      // console.log(" this always happens regardless of sucess or failure")
    })
  });
});
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
