export function track(event, props = {}) {
  if (typeof window !== 'undefined') console.log('[TRACK]', event, props);
}
