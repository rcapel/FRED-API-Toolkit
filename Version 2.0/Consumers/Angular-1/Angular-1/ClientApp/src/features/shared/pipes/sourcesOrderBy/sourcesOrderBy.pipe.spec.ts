import { SourcesOrderByPipe } from './sourcesOrderBy.pipe'

describe("SourcesOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new SourcesOrderByPipe;
  });

  it("should return 'source_id' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("source_id");
  });

  it("should return 'name' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("name");
  });

  it("should return 'realtime_start' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("realtime_start");
  });

  it("should return 'realtime_end' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("realtime_end");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 3", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBeUndefined();
  });

});
