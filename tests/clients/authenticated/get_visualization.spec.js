import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../../src/index.js';

const BASE_URL = 'https://matallo.carto.com';
const expect = chai.expect;

const expectedResponse = {
  json () {
    return Promise.resolve();
  }
};

const errorResponse = {
  message: 'Error Response'
};

const StaticConfig = {
  baseUrl: BASE_URL
};

const client = CartoApiClient.AuthenticatedClient;

describe('AuthenticatedClient', function () {
  let sandbox;

  beforeEach(function () {
    chai.use(sinonChai);
    this.sinon = sandbox = sinon.sandbox.create();

    client.setStaticConfig(StaticConfig);
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('.getVisualization', () => {
    it('should get a visualization', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const params = {
        per_page: 1
      };

      client
        .setStaticConfig(StaticConfig)
        .getVisualization('vizId', params)
        .then((data) => {
          expect(fetchResponseStub).to.have.been.called;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      const params = {
        per_page: 1
      };

      client
        .setStaticConfig(StaticConfig)
        .getVisualization('vizId', params)
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });
});
