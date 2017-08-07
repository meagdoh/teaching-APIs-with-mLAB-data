$(document).ready(() => {
  $("button").on("click", () => {
    let url = "http://data-api.measurementlab.net/locations/nausdcwashington/clients"
    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      console.log(response.results[0].meta.client_asn_name)
      let div =   $(`<div>${response.results[0].meta.client_asn_name}</div>`)
      $("body").append(div)
    }).fail(() => {
      console.log("ajax request fails")
    }).always(() => {
      // console.log(" this always happens regardless of sucess or failure")
    })
  })
})
