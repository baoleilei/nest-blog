import { Test, TestingModule } from '@nestjs/testing';
import { ContentController } from './content.controller';

describe('Content Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ContentController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ContentController = module.get<ContentController>(ContentController);
    expect(controller).toBeDefined();
  });
});
