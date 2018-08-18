import { VintageDatesOrderByPipe } from './vintageDatesOrderBy.pipe'

describe("SortOrderPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new VintageDatesOrderByPipe;
  });

  it("should return 'vintage_date' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("vintage_date");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 0", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBeUndefined();
  });

});
