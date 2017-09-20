chai.should();

describe("Test API", function() {

  it('executes a GET request for ISPs', function() {
    var mySpy = sinon.spy(jQuery, "ajax");
    mySpy.calledWithMatch({
      url: 'http://data-api.measurementlab.net/locations/nausdcwashington/clients'
    });
  });
  after(function() {
    jQuery.ajax.restore();
  });

});
