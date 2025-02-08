import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private client: RedisClientType;

    constructor() {
        this.client = createClient();
    }

    async onModuleInit() {
        await this.client.connect();
        console.log('Redis client connected');
    }

    async set(key: string, value: string) {
        if (!this.client.isOpen) {
            console.error('Redis client is closed! Reconnecting...');
            await this.client.connect();
        }
        await this.client.set(key, value);
        console.log(`Data stored: ${key} -> ${value}`);
    }

    async get(key: string): Promise<string | null> {
        if (!this.client.isOpen) {
            console.error('Redis client is closed! Reconnecting...');
            await this.client.connect();
        }
        return this.client.get(key);
    }

    async onModuleDestroy() {
        if (this.client.isOpen) {
            console.log('Closing Redis client...');
            await this.client.quit();
        }
    }

    async beforeApplicationShutdown() {
        console.log('Before shutting down the application...');
        if (this.client.isOpen) {
            await this.client.quit();
        }
    }
}
