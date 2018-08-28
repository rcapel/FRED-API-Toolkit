import { Observable, of } from 'rxjs';
import { CategoryService } from './category.service';
import { ICategoryResponse } from './category.interfaces'

describe("CategoryService", () => {
  let service: CategoryService;
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj(["get"]);
    service = new CategoryService(mockHttpClient, "base url");
  });

  describe("getCategory method", () => {
    it("should return an observable", () => {
      mockHttpClient.get.and.returnValue(of(true));
      let id: number = 125;

      let observable = service.get(id);

      expect(observable).toBeTruthy();
    });

  })

  describe("getCategoryChildren method", () => {
    it("should return an observable", () => {
      mockHttpClient.get.and.returnValue(of(true));
      let id: number = 125;

      let observable = service.get(id);

      expect(observable).toBeTruthy();
    });

  })

});
