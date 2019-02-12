import { ForgotPasswordModule } from './forgot-password.module';

describe('CoreModule', () => {
  let forgotPasswordModule: ForgotPasswordModule;

  beforeEach(() => {
    forgotPasswordModule = new ForgotPasswordModule();
  });

  it('should create an instance', () => {
    expect(forgotPasswordModule).toBeTruthy();
  });
});
