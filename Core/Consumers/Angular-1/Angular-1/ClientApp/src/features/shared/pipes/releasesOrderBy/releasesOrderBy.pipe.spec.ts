import { ReleasesOrderByPipe } from './releasesOrderBy.pipe'

describe("ReleasesOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new ReleasesOrderByPipe;
  });

  it("should return 'release_id' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("release_id");
  });

  it("should return 'name' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("name");
  });

  it("should return 'press_release' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("press_release");
  });

  it("should return 'realtime_start' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("realtime_start");
  });

  it("should return 'realtime_end' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("realtime_end");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 4", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBeUndefined();
  });

});
