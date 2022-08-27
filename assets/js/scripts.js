~function () {
  if (typeof window.__cbs !== "undefined") {
    window.__cbs.forEach(cb => cb())
  }
}()
