import { SearchTypePipe } from './searchType.pipe'

describe("SearchTypePipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new SearchTypePipe;
  });

  it("should return 'full_text' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("full_text");
  });

  it("should return 'series_id' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("series_id");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 1", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBeUndefined();
  });

});
