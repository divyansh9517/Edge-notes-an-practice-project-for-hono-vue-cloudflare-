# Edge Notes 📝

A simple **CRUD Notes app** built using **Vue 3 frontend**, **Hono + Cloudflare D1 backend**, fully deployable on **Cloudflare Workers**.

---

## 🔹 Features

- Create, read, and delete notes (CRUD)
- Responsive and clean UI
- Backend deployed on Cloudflare Workers
- Database using **Cloudflare D1**
- CORS enabled for local development
- Easy to deploy

---

## 🔹 Tech Stack

- **Frontend:** Vue 3, Vite, Axios
- **Backend:** Hono (Cloudflare Workers)
- **Database:** Cloudflare D1
- **Language:** TypeScript
- **Deployment:** Cloudflare Workers

---

## 🔹 Folder Structure

edge-notes/
│
├─ frontend/ # Vue 3 frontend
│ ├─ src/
│ │ ├─ components/
│ │ ├─ views/
│ │ ├─ services/ # Axios API calls
│ │ └─ main.js
│ ├─ index.html
│ └─ vite.config.js
│
└─ backend/ # Hono + Cloudflare Workers
├─ src/
│ └─ index.ts
├─ .wrangler/
└─ wrangler.toml

yaml
Copy code

---

## 🔹 Setup & Run Locally

### Prerequisites

- Node.js >= 18
- NPM / Yarn
- Cloudflare account

---

### Backend

1. Install dependencies:

```bash
cd backend
npm install
Login to Cloudflare:

bash
Copy code
npx wrangler login
Run locally:

bash
Copy code
npx wrangler dev
API will be available at http://localhost:8787

Frontend
Install dependencies:

bash
Copy code
cd frontend
npm install
Run development server:

bash
Copy code
npm run dev
App will be available at http://localhost:5173

🔹 Deployment
Backend
bash
Copy code
cd backend
npx wrangler deploy
Wrangler will provide a live Worker URL

Update frontend API_URL in services/api.js:

js
Copy code
const API_URL = "https://<your-worker-name>.<subdomain>.workers.dev";
Frontend
Build frontend:

bash
Copy code
cd frontend
npm run build
Deploy built frontend on Cloudflare Pages, Netlify, or any static host.

🔹 API Endpoints
Method	Endpoint	Description
GET	/notes	Get all notes
POST	/notes	Create a new note
DELETE	/notes/:id	Delete a note by ID

🔹 Example
Create a note:

bash
Copy code
curl -X POST http://localhost:8787/notes \
-H "Content-Type: application/json" \
-d '{"title":"Hello","content":"My first note"}'
Get all notes:

bash
Copy code
curl http://localhost:8787/notes
Delete a note:

bash
Copy code
curl -X DELETE http://localhost:8787/notes/1
🔹 License
MIT License © Divyansh Saxena



---








