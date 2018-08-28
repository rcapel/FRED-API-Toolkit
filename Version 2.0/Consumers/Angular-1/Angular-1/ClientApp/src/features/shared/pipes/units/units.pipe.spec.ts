import { UnitsPipe } from './units.pipe'

describe("UnitsPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new UnitsPipe;
  });

  it("should return 'lin' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("lin");
  });

  it("should return 'chg' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("chg");
  });

  it("should return 'ch1' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("ch1");
  });

  it("should return 'pch' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("pch");
  });

  it("should return 'pc1' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("pc1");
  });

  it("should return 'pca' when value is 5", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBe("pca");
  });

  it("should return 'cch' when value is 6", () => {
    let transformed = pipe.transform(6);

    expect(transformed).toBe("cch");
  });

  it("should return 'cca' when value is 7", () => {
    let transformed = pipe.transform(7);

    expect(transformed).toBe("cca");
  });

  it("should return 'log' when value is 8", () => {
    let transformed = pipe.transform(8);

    expect(transformed).toBe("log");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 8", () => {
    let transformed = pipe.transform(9);

    expect(transformed).toBeUndefined();
  });

});
