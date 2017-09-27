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
        var location = ui.item.value
        log("Selected: " + location );
      }
    });
    // store *location key* based on selection
    //pass in *location* to http://data-api.measurementlab.net/locations/+ location + /clients'
    //return, loop through and append --> (response.results[i].meta.client_asn_name)
  });
});
