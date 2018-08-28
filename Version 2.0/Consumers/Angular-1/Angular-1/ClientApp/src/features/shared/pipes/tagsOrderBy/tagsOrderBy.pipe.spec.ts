import { TagsOrderByPipe } from './tagsOrderBy.pipe'

describe("TagsOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new TagsOrderByPipe;
  });

  it("should return 'series_count' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("series_count");
  });

  it("should return 'popularity' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("popularity");
  });

  it("should return 'created' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("created");
  });

  it("should return 'name' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("name");
  });

  it("should return 'group_id' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("group_id");
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
