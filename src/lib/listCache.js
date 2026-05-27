const cache = new Map();

export function readCache(key) {
  return cache.get(key);
}

export function writeCache(key, partial) {
  cache.set(key, { ...cache.get(key), ...partial });
}
