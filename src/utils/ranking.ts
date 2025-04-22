export interface ScoreRecord {
  id?: number;
  name: string;
  score: number;
  date: number;
}

const DB_NAME = 'FlappyBirdRanking';
const DB_VERSION = 1;
const STORE_NAME = 'scores';

// Inicializa o IndexedDB e cria object store se necessário
export async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Adiciona um novo registro de score
export async function addScore(name: string, score: number): Promise<number> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record = { name, score, date: Date.now() };
    const req = store.add(record);
    req.onsuccess = () => resolve(req.result as number);
    req.onerror = () => reject(req.error);
  });
}

// Recupera os top N scores ordenados do maior para o menor
export async function getTopScores(limit: number = 10): Promise<ScoreRecord[]> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => {
      const all = (request.result as ScoreRecord[]).sort((a, b) => b.score - a.score);
      resolve(all.slice(0, limit));
    };
    request.onerror = () => reject(request.error);
  });
} 