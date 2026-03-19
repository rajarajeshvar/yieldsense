import WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.1:3001');

const timeout = setTimeout(() => {
    console.log('Timeout waiting for connection/errors');
    process.exit(1);
}, 5000);

ws.on('open', () => {
    console.log('Successfully connected to WebSocket server!');
    clearTimeout(timeout);
    process.exit(0);
});

ws.on('error', (err) => {
    console.error('WebSocket Error:', err.message);
    clearTimeout(timeout);
    process.exit(1);
});

ws.on('close', (code, reason) => {
    console.log(`WebSocket closed with code ${code} and reason: ${reason}`);
    clearTimeout(timeout);
    process.exit(1);
});
