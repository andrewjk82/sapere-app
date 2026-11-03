// Small runtime polyfills for older Safari (iPadOS 16 / early 17 school iPads).
// pdf.js and other recent libraries call Promise.withResolvers (Safari 17.4+); without it they throw on load.
if (typeof Promise.withResolvers !== 'function') {
  Promise.withResolvers = function withResolvers() {
    let resolve;
    let reject;
    const promise = new this((res, rej) => { resolve = res; reject = rej; });
    return { promise, resolve, reject };
  };
}
