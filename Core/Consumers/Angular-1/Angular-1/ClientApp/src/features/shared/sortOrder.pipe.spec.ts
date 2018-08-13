import { SortOrderPipe } from './sortOrder.pipe'

describe("SortOrderPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new SortOrderPipe;
  });

  it("should return 'asc' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("asc");
  });

  it("should return 'desc' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("desc");
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
