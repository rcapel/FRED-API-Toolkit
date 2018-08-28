import { ReleasesDatesOrderByPipe } from './releasesDatesOrderBy.pipe'

describe("ReleasesDatesOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new ReleasesDatesOrderByPipe;
  });

  it("should return 'release_date' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("release_date");
  });

  it("should return 'release_id' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("release_id");
  });

  it("should return 'release_name' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("release_name");
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
