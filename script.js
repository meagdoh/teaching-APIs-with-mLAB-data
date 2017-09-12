$(document).ready(() => {
  $("#button").on("click", () => {
    let url = "http://data-api.measurementlab.net/locations/nausdcwashington/clients"
    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {

      for(i = 0; i < response.results.length; i++){
      console.log(response.results[i].meta.client_asn_name)

      let list =   $(`<li>${response.results[i].meta.client_asn_name}</li>`)
      $("#body").append(list)
    };
    }).fail(() => {
      console.log("ajax request fails")
    }).always(() => {
      // console.log(" this always happens regardless of sucess or failure")
    })
  })
});
