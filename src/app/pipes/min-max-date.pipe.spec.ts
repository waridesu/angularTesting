import { MinMaxDatePipe } from './min-max-date.pipe';

describe('MinMaxDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MinMaxDatePipe();
    expect(pipe).toBeTruthy();
  });
});
