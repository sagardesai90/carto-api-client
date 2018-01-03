import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../../src/index.js';
import { Utils } from '../../../src/utils/utils.js';

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

  describe('.updateUser', () => {
    it('should update user information', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const user = {
        email: 'user@email.com'
      };

      client
        .setStaticConfig(StaticConfig)
        .updateUser({ user })
        .then((data) => {
          expect(fetchResponseStub).to.have.been.called;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      const user = {
        email: 'user@email.com'
      };

      client
        .setStaticConfig(StaticConfig)
        .updateUser({ user })
        .catch((error) => {
          expect(fetchErrorStub).to.have.been.called;
          expect(error).to.be.equal(errorResponse);
          done();
        });
    });

    it('should add a "body" field with the request payload', function (done) {
      const clientPutRequestSpy = sinon.spy(client, 'put');

      const user = {
        email: 'user@email.com'
      };

      const payloadOptions = {
        body: JSON.stringify({ user })
      };

      const options = Utils.addHeaders(payloadOptions, 'put');

      sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setStaticConfig(StaticConfig)
        .updateUser({ user })
        .then(() => {
          expect(clientPutRequestSpy.withArgs(options)).to.be.ok;
          done();
        });
    });
  });
});
