# CampusGPT

An AI-powered assistant for college students.  
Built with Next.js + Tailwind + Node.js + Express + MongoDB + OpenAI API.

## Setup

### Backend

1. `cd backend`
2. `cp .env.example .env` and fill in your credentials.
3. `npm install`
4. `npm run dev`

### Frontend

1. `cd frontend`
2. `cp .env.local.example .env.local` and fill in your credentials.
3. `npm install`
4. `npm run dev`

## Features

- AI Chatbot (course Q&A, campus info)
- Doubt Forum (AI answers, file upload)
- Timetable Assistant (upload/generate/parse)
- Assignment Tracker (reminders, suggestions)
- Announcements Feed (summarized)
- Lost & Found (AI vision tags)
- Peer Connect (smart matching)
- Google/Email auth (role-based)

## Deployment

- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/) or similar
- DB: [MongoDB Atlas](https://www.mongodb.com/atlas)

## API Reference

- `/api/chat` - Chatbot (proxy to backend)
- `/api/assignment/[...slug]` - Assignment CRUD
- `/api/timetable/upload` - Timetable upload/parse
- `/api/announcement/all` - Announcements
- `/api/lostfound/all` - Lost & Found entries
- `/api/peerconnect/find` - Peer Connect

---

**Continue developing each feature in `/backend/src/routes` and `/frontend/components`.**

- To add OCR, AI vision, or résumé builder, extend the relevant routes/services.