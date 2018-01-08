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

  describe('.getVisualizationPreview', () => {
    it('should get a visualization preview', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const WIDTH = '100';
      const HEIGHT = '100';

      client
        .setConfig(StaticConfig)
        .getVisualizationPreview('vizId', WIDTH, HEIGHT)
        .then((data) => {
          const IMAGE_PATH_MATCH = fetchResponseStub
            .getCalls()[0]
            .args[0]
            .indexOf(`/${WIDTH}/${HEIGHT}.png`) !== -1;

          expect(fetchResponseStub).to.have.been.called;
          expect(IMAGE_PATH_MATCH).to.be.ok;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      const WIDTH = '100';
      const HEIGHT = '100';

      client
        .setConfig(StaticConfig)
        .getVisualizationPreview('vizId', WIDTH, HEIGHT)
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });
});
