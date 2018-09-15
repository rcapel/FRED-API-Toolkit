import { FilterValuePipe } from './filterValue.pipe'

describe("FilterValuePipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new FilterValuePipe;
  });

  it("should return 'all' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("all");
  });

  it("should return 'macro' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("macro");
  });

  it("should return 'seasonal_adjustment' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("seasonal_adjustment");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 2", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBeUndefined();
  });

});
