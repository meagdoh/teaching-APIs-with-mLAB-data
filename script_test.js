sinon = require("sinon");
chai = require("chai");
script = require("script.js")

after(function () {
    // When the test either fails or passes, restore the original
    // jQuery ajax function
    jQuery.ajax.restore();
});

it('makes a GET request for ISPs', function () {
    sinon.stub(jQuery, 'ajax');

    assert(jQuery.ajax.calledWithMatch({ url: 'http://data-api.measurementlab.net/locations/nausdcwashington/clients' }));
});
