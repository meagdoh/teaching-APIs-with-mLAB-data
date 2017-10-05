$(document).ready(() => {
  $(function() {
    function log(message) {
      $("<div>").text(message).prependTo("#log");
      $("#log").scrollTop(0);
    }
    $("#city").autocomplete({
      source: function(request, response) {
        let url =
          'http://data-api.measurementlab.net/locations/search'
        $.ajax({
          url: url,
          dataType: "json",
          data: {
            q: request.term
          },
          success: function(data) {
            for (i = 0; i < 4; i++) {
            console.log(data.results[i].meta)
            response(data.results[i].meta);
          }
          }
        });
      },
      minLength: 4,
      select: function(event, ui) {
        let location = ui.item.value
        log(location);
      }



    });

    // store *location key* based on selection
    //pass in *location* to http://data-api.measurementlab.net/locations/+ location + /clients'
    //return, loop through and append --> (response.results[i].meta.client_asn_name)

    // non-working code
    // let ispUrl = 'http://data-api.measurementlab.net/locations/' + location + '/clients'
    //     $.ajax({
    //       ispUrl,
    //       type: "get",
    //       dataType: "json"
    //     }).done((response) => {
    //       for (i = 0; i < 4; i++) {
    //         console.log(response.results[i].meta.client_city + ", " + response.results[i].meta.client_region )
    //       };
  // });
    });
      });
