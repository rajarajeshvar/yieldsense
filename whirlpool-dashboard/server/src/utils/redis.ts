import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: 1, // Don't allow it to retry infinitely
    retryStrategy: (times) => {
        if (times > 3) return null; // Stop retrying after 3 attempts
        return Math.min(times * 200, 2000);
    },
    enableOfflineQueue: false, // Critical: Fail immediately if Redis is down, don't hang requests
    connectTimeout: 2000,
});

export let isRedisDown = false;

redis.on('error', (err) => {
    if (!isRedisDown) {
        console.error('[!!] Redis connection failed:', err.message);
        console.error('     Falling back to in-memory rate limiting and cache.');
        isRedisDown = true;
    }
});

redis.on('connect', () => {
    console.log('[OK] Redis connected successfully');
    isRedisDown = false;
});

export default redis;
