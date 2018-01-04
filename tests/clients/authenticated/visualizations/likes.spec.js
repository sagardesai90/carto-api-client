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

  describe('.getVisualizationLikes', () => {
    it('should get a visualization likes', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .getVisualizationLikes('vizId')
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
        .getVisualizationLikes('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });

  describe('.getVisualizationLikesDetailed', () => {
    it('should get a visualization likes', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .getVisualizationLikesDetailed('vizId')
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
        .getVisualizationLikesDetailed('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });

  describe('.getVisualizationLike', () => {
    it('should get a visualization likes', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .getVisualizationLike('vizId')
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
        .getVisualizationLike('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });

  describe('.likeVisualization', () => {
    it('should be able to like a visualization', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .likeVisualization('vizId')
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
        .likeVisualization('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });

  describe('.likeVisualization', () => {
    it('should be able to like a visualization', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .likeVisualization('vizId')
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
        .likeVisualization('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });

  describe('.unlikeVisualization', () => {
    it('should be able to like a visualization', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .unlikeVisualization('vizId')
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
        .unlikeVisualization('vizId')
        .catch(() => {
          expect(fetchErrorStub).to.have.been.called;
          done();
        });
    });
  });
});
