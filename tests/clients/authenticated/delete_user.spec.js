import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import CartoApiClient from '../../../src/index.js';
import { RequestUtils } from '../../../src/utils/request.js';

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

  describe('.deleteUser', () => {
    it('should be able to delete a user', function (done) {
      const fetchResponseStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      const payload = {
        deletion_password_confirmation: '1234567'
      };

      client
        .setConfig(StaticConfig)
        .deleteUser(payload)
        .then((data) => {
          expect(fetchResponseStub).to.have.been.called;
          done();
        });
    });

    it('should return error if the request fails', function (done) {
      const fetchErrorStub = sandbox
        .stub(window, 'fetch')
        .returns(Promise.reject(errorResponse));

      const payload = {
        deletion_password_confirmation: '1234567'
      };

      client
        .setConfig(StaticConfig)
        .deleteUser(payload)
        .catch((error) => {
          expect(fetchErrorStub).to.have.been.called;
          expect(error).to.be.equal(errorResponse);
          done();
        });
    });

    it('should add a "body" field with the request payload', function (done) {
      const clientPutRequestSpy = sinon.spy(client, 'delete');

      const payload = {
        deletion_password_confirmation: '1234567'
      };

      const payloadOptions = {
        body: JSON.stringify(payload)
      };

      const options = RequestUtils.getOptions(payloadOptions, 'delete');

      sandbox
        .stub(window, 'fetch')
        .returns(Promise.resolve(expectedResponse));

      client
        .setConfig(StaticConfig)
        .deleteUser(payload)
        .then(() => {
          expect(clientPutRequestSpy.withArgs(options)).to.be.ok;
          done();
        });
    });
  });
});
