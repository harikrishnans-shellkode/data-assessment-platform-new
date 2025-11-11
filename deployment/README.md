# Data Assessment Platform

A full-stack application for database assessment and migration planning.

## Features
- Database connection testing (SQL Server, MySQL, PostgreSQL, Oracle, SQLite)
- Automated schema analysis
- Migration assessment reports
- Cloud readiness evaluation

## Deployment
This app is configured for Railway deployment with automatic build and start commands.

## Environment Variables
- `NODE_ENV=production`
- `PORT=8000`
- `JWT_SECRET=your-secret-key`

## Tech Stack
- Frontend: React 18, Tailwind CSS
- Backend: Node.js, Express
- Database: SQLite (for app data), Multiple DB support for assessments