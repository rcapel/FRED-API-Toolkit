import { ObservationOrderByPipe } from './observationOrderBy.pipe'

describe("ObservationOrderByPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new ObservationOrderByPipe;
  });

  it("should return 'observation_date' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("observation_date");
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
