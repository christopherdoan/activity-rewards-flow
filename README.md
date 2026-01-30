# Web App Starter Template

A modern web application starter with **React 19, Vite, Tailwind, Shadcn** (Frontend) and **Node.js, Express, Prisma** (Backend).

## Project Structure

- `backend/`: Express API with Prisma ORM and Passport Auth.
- `frontend/`: React 19 + Vite app with Tailwind & Shadcn/UI.
- `docker-compose.yml`: Local database (Postgres) + Redis infrastructure.

## Getting Started

### 1. Prerequisites
- Docker & Docker Compose
- Node.js 20+

### 2. Infrastructure
Start Postgres and Redis:
```bash
docker-compose up -d
```

### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```

Setup Database:
```bash
npx prisma generate
npx prisma db push
```

Run Server:
```bash
npm run dev
```
(Server starts on http://localhost:3000)

### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
(App starts on http://localhost:5173)

### 5. Features
- **Authentication**: Structure ready for Passport.js strategies. [See Setup Guide](docs/AUTHENTICATION.md).
- **L1/L2 Caching**: Backend structure ready for memory + DB caching.
- **Image Generation**: "Share/Download" button uses client-side DOM snapshotting.
