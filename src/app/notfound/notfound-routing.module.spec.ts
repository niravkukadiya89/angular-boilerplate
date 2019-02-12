import { NotfoundRoutingModule } from './notfound-routing.module';

describe('NotfoundRoutingModule', () => {
  let notfoundRoutingModule: NotfoundRoutingModule;

  beforeEach(() => {
    notfoundRoutingModule = new NotfoundRoutingModule();
  });

  it('should create an instance', () => {
    expect(notfoundRoutingModule).toBeTruthy();
  });
});
