import { ShareModule } from './share.module';

describe('CoreModule', () => {
  let coreModule: ShareModule;

  beforeEach(() => {
    coreModule = new ShareModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
