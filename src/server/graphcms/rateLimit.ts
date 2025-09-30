const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

type Task<T> = () => Promise<T>;

class SimpleLimiter {
    private queue: Array<() => void> = [];
    private active = 0;
    private nextAt = 0;

    constructor(
        private opts: {
            maxConcurrent: number; // how many requests can be in flight
            minTime: number; // minimum ms between request starts (per process)
        }
    ) {}

    schedule<T>(fn: Task<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const run = async () => {
                this.active++;
                try {
                    // enforce minimum spacing between starts
                    const now = Date.now();
                    const wait = Math.max(0, this.nextAt - now);
                    if (wait) await sleep(wait);
                    this.nextAt = Date.now() + this.opts.minTime;
                    const result = await fn();
                    resolve(result);
                } catch (err) {
                    reject(err);
                } finally {
                    this.active--;
                    this.drain();
                }
            };

            this.queue.push(run);
            this.drain();
        });
    }

    private drain() {
        while (this.active < this.opts.maxConcurrent && this.queue.length) {
            const next = this.queue.shift();
            next();
        }
    }
}

// singleton per Node process/worker
const limiter = (() => {
    const g = globalThis as any;
    if (!g.__graphCmsLimiter) {
        g.__graphCmsLimiter = new SimpleLimiter({
            maxConcurrent: Number(process.env.RATE_MAX_CONCURRENCY ?? 1),
            minTime: Number(process.env.RATE_MIN_TIME_MS ?? 500), // ~2 req/s cap per process
        });
    }
    return g.__graphCmsLimiter as SimpleLimiter;
})();

export const limit = <T>(fn: () => Promise<T>) => limiter.schedule(fn);
