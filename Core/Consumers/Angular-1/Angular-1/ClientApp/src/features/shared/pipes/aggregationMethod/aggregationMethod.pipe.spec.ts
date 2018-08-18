import { AggregationMethodPipe } from './aggregationMethod.pipe'

describe("AggregationMethodPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new AggregationMethodPipe;
  });

  it("should return 'avg' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("avg");
  });

  it("should return 'sum' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("sum");
  });

  it("should return 'eop' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("eop");
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
