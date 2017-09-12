var expect = chai.expect;

chai.should();

var mySpy = sinon.spy(jQuery, "ajax");


it('executes a GET request for ISPs', function () {
    sinon.stub(jQuery, 'ajax');

    sinon.assert.should.always.have.been.calledWithMatch({ url: 'http://data-api.measurementlab.net/locations/nausdcwashington/clients' });
});


after(function () {
  // When the test either fails or passes, restore the original
  // jQuery ajax function
  jQuery.ajax.restore();
});
