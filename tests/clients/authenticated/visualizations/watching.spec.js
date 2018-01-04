import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../../../src/index.js';

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

    client.setConfig(StaticConfig);
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('.getVisualizationWatching', () => {
    it('should get watching information for a visualization', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .getVisualizationWatching('vizId')
        .then((data) => {
          expect(fetchResponseStub).to.have.been.called;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      client
        .setConfig(StaticConfig)
        .getVisualizationWatching('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });
});
