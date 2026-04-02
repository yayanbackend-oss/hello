import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => ({ message: 'Project Elysia + Drizzle + MySQL is running!' }))
  .get('/test', () => 'Success')
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
