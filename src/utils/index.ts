const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];
  
export function timeSince(time?: number): string {
    if (!time) return 'n/a ago';
    const date = new Date(time * 1000)
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    if (!interval) return null;
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
}

export function kFormatter(num = 0): string {
  return `${Math.abs(num) > 999 ? Math.sign(num)*parseFloat((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)}`;
}

export function timeFormatter(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
}

export function parseQuerystring(str: string): { [key: string]: string } {
  const queryObj = str.split('&').filter(Boolean).reduce((acc, q) => {
      const [key, val] = q.split('=');
      return {
          ...acc,
          [key]: val,
      }
  }, {});
  return queryObj;
}

export function prefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

class LocalStorage {
  get(key, val) {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      console.log('Can\'t access localStorage');
    }
  }
  set(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (err) {
      console.log('Can\'t access localStorage');
    }
  }
  delete(key, val) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log('Can\'t access localStorage');
    }
  }
}

export const LS = new LocalStorage();