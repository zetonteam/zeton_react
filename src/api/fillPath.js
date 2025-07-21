function fillPath(pathname, params) {
  return pathname.replace(/[:*](\w+)/g, ($0, $1) => params[$1] ?? $0);
}

export default fillPath;