import { FredapiModule } from './fredapi.module';

describe('FredapiModule', () => {
  let fredapiModule: FredapiModule;

  beforeEach(() => {
    fredapiModule = new FredapiModule();
  });

  it('should create an instance', () => {
    expect(fredapiModule).toBeTruthy();
  });
});
