import { OutputTypePipe } from './outputType.pipe'

describe("OutputTypePipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new OutputTypePipe;
  });

  it("should return 'RealTimePeriod' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("RealTimePeriod");
  });

  it("should return 'VintageDateAll' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("VintageDateAll");
  });

  it("should return 'VintageDateNewAndRevised' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("VintageDateNewAndRevised");
  });

  it("should return 'InitialRelease' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("InitialRelease");
  });

  it("should return undefined when value is less than 1", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 4", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBeUndefined();
  });

});
