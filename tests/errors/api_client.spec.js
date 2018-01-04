import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../src/index.js';

const BASE_URL = 'https://matallo.carto.com';
const expect = chai.expect;

const FakeError = {
  message: 'Fake Error',
  errors: {
    fake_error: []
  }
};

const expectedResponse = {
  json () {
    return Promise.resolve(FakeError);
  }
};

const StaticConfig = {
  baseUrl: BASE_URL
};

const client = CartoApiClient.AuthenticatedClient;

describe('ApiClientError', function () {
  let sandbox;

  beforeEach(function () {
    chai.use(sinonChai);
    this.sinon = sandbox = sinon.sandbox.create();

    client.setConfig(StaticConfig);
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('.apiClientError', () => {
    it('should throw a custom error', function (done) {
      sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .getUser()
        .then((data) => {
          throw CartoApiClient.ApiClientError.send(data);
        })
        .catch((error) => {
          expect(error.name).to.equal('ApiClientError');
          expect(error.message).to.be.equal(FakeError.message);
          expect(error.errors).to.be.equal(FakeError.errors);
          expect(error.stack).to.be.ok;
          done();
        });
    });
  });
});
