# 💳 RewardFlow

## Overview
**RewardFlow** is a finance-aware fitness rewards platform that connects **physical activity** with **spending efficiency**.  
It tracks workouts, fitness-related spending, and consumable “fuel” (gear, subscriptions, electrolytes, energy gels, energy drinks) and converts them into **reward points and cost-efficiency insights**.

Think: **personal banking meets quantified fitness**.

---

## Core Objectives
- Track **physical activity**
  - Running (distance-based)
  - Walking (steps, distance)
  - Sports & workouts (time-based)
- Track **fitness-related spending**
  - Equipment & gear
  - Subscriptions
  - Fuel (electrolytes, gels, energy drinks)
- Attribute spending to activity to calculate:
  - Cost per mile
  - Cost per workout
  - Cost per training hour
- Convert activity + efficiency into **reward points**
- Generate insights inspired by **banking & retail analytics**:
  - Spending categorization
  - ROI-style efficiency metrics
  - Behavioral trends

---

## Tech Stack

### Backend
- **NestJS (TypeScript)** — scalable, enterprise-grade backend framework
- **PostgreSQL** — relational database for users, activity, and transactions
- **Prisma** — type-safe ORM and migrations
- **Redis** — caching, rate limiting, fast lookups
- **BullMQ** — background jobs (reward calculation, aggregation)
- **Docker** — containerized local development and deployment

### Frontend
- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

---

## Architecture Highlights
- Modular, domain-driven structure (users, spending, activity, rewards)
- Background job processing for banking-style calculations
- Strong typing from database to UI
- Clear separation of concerns between API, jobs, persistence, and frontend
