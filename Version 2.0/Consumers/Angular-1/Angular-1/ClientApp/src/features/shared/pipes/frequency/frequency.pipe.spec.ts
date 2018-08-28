import { FrequencyPipe } from './frequency.pipe'

describe("FrequencyPipe", () => {
  let pipe;

  beforeEach(() => {
    pipe = new FrequencyPipe;
  });

  it("should return 'd' when value is 0", () => {
    let transformed = pipe.transform(0);

    expect(transformed).toBe("d");
  });

  it("should return 'w' when value is 1", () => {
    let transformed = pipe.transform(1);

    expect(transformed).toBe("w");
  });

  it("should return 'bw' when value is 2", () => {
    let transformed = pipe.transform(2);

    expect(transformed).toBe("bw");
  });

  it("should return 'm' when value is 3", () => {
    let transformed = pipe.transform(3);

    expect(transformed).toBe("m");
  });

  it("should return 'q' when value is 4", () => {
    let transformed = pipe.transform(4);

    expect(transformed).toBe("q");
  });

  it("should return 'sa' when value is 5", () => {
    let transformed = pipe.transform(5);

    expect(transformed).toBe("sa");
  });

  it("should return 'a' when value is 6", () => {
    let transformed = pipe.transform(6);

    expect(transformed).toBe("a");
  });

  it("should return 'wef' when value is 7", () => {
    let transformed = pipe.transform(7);

    expect(transformed).toBe("wef");
  });

  it("should return 'weth' when value is 8", () => {
    let transformed = pipe.transform(8);

    expect(transformed).toBe("weth");
  });

  it("should return 'wew' when value is 9", () => {
    let transformed = pipe.transform(9);

    expect(transformed).toBe("wew");
  });

  it("should return 'wetu' when value is 10", () => {
    let transformed = pipe.transform(10);

    expect(transformed).toBe("wetu");
  });

  it("should return 'wem' when value is 11", () => {
    let transformed = pipe.transform(11);

    expect(transformed).toBe("wem");
  });

  it("should return 'wesu' when value is 12", () => {
    let transformed = pipe.transform(12);

    expect(transformed).toBe("wesu");
  });

  it("should return 'wesa' when value is 13", () => {
    let transformed = pipe.transform(13);

    expect(transformed).toBe("wesa");
  });

  it("should return 'bwew' when value is 14", () => {
    let transformed = pipe.transform(14);

    expect(transformed).toBe("bwew");
  });

  it("should return 'bwem' when value is 15", () => {
    let transformed = pipe.transform(15);

    expect(transformed).toBe("bwem");
  });

  it("should return undefined when value is less than 0", () => {
    let transformed = pipe.transform(-1);

    expect(transformed).toBeUndefined();
  });

  it("should return undefined when value is greater than 15", () => {
    let transformed = pipe.transform(16);

    expect(transformed).toBeUndefined();
  });

});
