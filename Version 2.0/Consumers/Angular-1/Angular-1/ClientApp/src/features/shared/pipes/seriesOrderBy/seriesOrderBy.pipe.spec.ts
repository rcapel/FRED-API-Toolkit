import { SeriesOrderByPipe } from './seriesOrderBy.pipe'

describe("SeriesOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new SeriesOrderByPipe;
  });

  it("should return 'series_id' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("series_id");
  });

  it("should return 'title' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("title");
  });

  it("should return 'units' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("units");
  });

  it("should return 'frequency' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("frequency");
  });

  it("should return 'seasonal_adjustment' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("seasonal_adjustment");
  });

  it("should return 'realtime_start' when value is 5", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBe("realtime_start");
  });

  it("should return 'realtime_end' when value is 6", () => {
    let transformed = pipe.transform(6);

    expect(transformed).toBe("realtime_end");
  });

  it("should return 'last_updated' when value is 7", () => {
    let transformed = pipe.transform(7);

    expect(transformed).toBe("last_updated");
  });

  it("should return 'observation_start' when value is 8", () => {
    let transformed = pipe.transform(8);

    expect(transformed).toBe("observation_start");
  });

  it("should return 'observation_end' when value is 9", () => {
    let transformed = pipe.transform(9);

    expect(transformed).toBe("observation_end");
  });

  it("should return 'popularity' when value is 10", () => {
    let transformed = pipe.transform(10);

    expect(transformed).toBe("popularity");
  });

  it("should return 'group_popularity' when value is 11", () => {
    let transformed = pipe.transform(11);

    expect(transformed).toBe("group_popularity");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 11", () => {
    let transformed = pipe.transform(12);

    expect(transformed).toBeUndefined();
  });

});
