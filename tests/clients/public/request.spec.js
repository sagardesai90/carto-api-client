import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../../src/index.js';

const BASE_URL = 'https://matallo.carto.com';
const API_KEY = '1234567';
const expect = chai.expect;

const expectedResponse = {
  json () {
    return Promise.resolve();
  }
};

const errorResponse = {
  message: 'Error Response'
};

const client = CartoApiClient.PublicClient;

describe('PublicClient', function () {
  let sandbox;

  beforeEach(function () {
    chai.use(sinonChai);
    this.sinon = sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('.request', () => {
    it('should be able to send a request', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const StaticConfig = {
        baseUrl: BASE_URL
      };

      client
        .setConfig(StaticConfig)
        .request('get')
        .then((data) => {
          expect(fetchResponseStub).to.have.been.called;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      const StaticConfig = {
        baseUrl: BASE_URL
      };

      client
        .setConfig(StaticConfig)
        .request('get')
        .catch((error) => {
          expect(fetchErrorStub).to.have.been.called;
          expect(error).to.be.equal(errorResponse);
          done();
        });
    });

    it('should add the api key to the request if present', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const StaticConfig = {
        baseUrl: BASE_URL,
        apiKey: API_KEY
      };

      client
        .setConfig(StaticConfig)
        .request('get')
        .then(() => {
          const url = fetchResponseStub.getCall(0).args[0];
          const containsApiKey = url.indexOf(API_KEY) !== -1;

          expect(containsApiKey).to.be.ok;
          done();
        });
    });
  });
});
