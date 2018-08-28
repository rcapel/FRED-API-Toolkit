import { QueryStringService } from './queryString.service';

describe("QueryStringService", () => {
  let service: QueryStringService;

  beforeEach(() => {
    service = new QueryStringService();
  });

  describe("add method", () => {
    xit("should leave query string set to '?' when no parameters added", () => {
      let queryString = "?";
      let start = null;

      queryString = service.addFragment("start", start);

      expect(queryString).toBe("?");
    });

  })

  describe("final method", () => {
    xit("should set query string to null when no parameters added", () => {
      let queryString = "?";
      let start = null;

      queryString = service.addFragment("start", start);
      service.final(queryString);

      expect(queryString).toBeFalsy();
    });

  })

});
