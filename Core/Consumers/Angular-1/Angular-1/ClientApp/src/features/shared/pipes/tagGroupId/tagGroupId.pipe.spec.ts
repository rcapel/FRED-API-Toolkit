import { TagGroupIdPipe } from './tagGroupId.pipe'

describe("TagGroupIdPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new TagGroupIdPipe;
  });

  it("should return 'freq' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("freq");
  });

  it("should return 'gen' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("gen");
  });

  it("should return 'geo' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("geo");
  });

  it("should return 'geot' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("geot");
  });

  it("should return 'rls' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("rls");
  });

  it("should return 'seas' when value is 5", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBe("seas");
  });

  it("should return 'src' when value is 6", () => {
    let transformed = pipe.transform(6);

    expect(transformed).toBe("src");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 6", () => {
    let transformed = pipe.transform(7);

    expect(transformed).toBeUndefined();
  });

});
