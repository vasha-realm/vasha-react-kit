const DEFAULT_PREFIX = 'vasha';

const useLocalStorage = (projectKey: string) => {
  const prefixKey = DEFAULT_PREFIX;

  const generateKey = (key: string): string => `${prefixKey}-${projectKey}-${key}`

  return {
    getItem<T>(key: string): T | null {
      const fullKey = generateKey(key);
      const value = localStorage.getItem(fullKey);

      if (value === null) return null;

      try {
        return JSON.parse(value);
      } catch (e) {
        console.error('getItem failed:', e);
        return null;
      }
    },

    setItem<T>(key: string, value: T): void {
      const fullKey = generateKey(key);

      try {
        const stringValue = typeof value === 'object'
          ? JSON.stringify(value)
          : String(value);

        localStorage.setItem(fullKey, stringValue);
      } catch (e) {
        console.error('存储数据失败:', e);
      }
    },

    removeItem(key: string): void {
      const fullKey = generateKey(key);
      localStorage.removeItem(fullKey);
    },

    clearAll(): void {
      const keys = Object.keys(localStorage);
      const prefix = `${prefixKey}-${projectKey}-`

      for (const key of keys) {
        if (key.startsWith(prefix)) localStorage.removeItem(key)
      }
    }
  };
};

export default useLocalStorage
