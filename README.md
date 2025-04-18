# Helpia-Rmvp

Nova versió del projecte HelpIA basada en una arquitectura moderna amb **React + FastAPI**.

## 📁 Estructura del projecte

```
Helpia-Rmvp/
├── helpia-frontend/   # Aplicació React (SPA)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
└── helpia-backend/    # (opcional) Backend amb FastAPI si es migra aquí
```

## 🚀 Primeres passes per al frontend

```bash
cd helpia-frontend
npm install
npm run dev
```

## 🔐 Autenticació

El sistema es connecta al backend de HelpIA (FastAPI) per obtenir tokens JWT i accedir a les dades de client, FAQs i configuració.

## 📌 Objectius

- Interfície moderna i responsive
- Gestió multi-client amb autenticació
- Xatbot integrat (pròxima fase)
- FAQ editor i configuració visual

---

## 🧱 Estat del projecte

✔️ Login funcionant amb connexió al backend  
✔️ Estructura modular creada amb Tailwind i React Router  
⬜️ Migració del dashboard i configuració del client  
⬜️ FAQ editor i integració del xatbot

---

## 📄 Llicència

Projecte privat de desenvolupament intern
