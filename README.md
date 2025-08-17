
# 🧩 Uzence Components

A modern, reusable React component library built with TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Features

- **Reusable UI Components**: DataTable, InputField, Button, Header, and more
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Vite**: Lightning-fast development
- **Storybook**: Isolated component development & documentation
- **Unit Testing**: Vitest for fast, reliable tests

---

## 📦 Installation

```bash
npm install uzence-components
# or
yarn add uzence-components
```

---

## 🛠️ Usage

Import and use components in your React app:

```tsx
import { DataTable, InputField, Button, Header } from 'uzence-components';

function App() {
  return (
	 <div>
		<Header title="Welcome" />
		<InputField label="Name" />
		<Button>Click Me</Button>
		<DataTable data={[]} columns={[]} />
	 </div>
  );
}
```

---

## 📚 Storybook

Run Storybook to explore and develop components in isolation:

```bash
npm run storybook
```

---

## 🏗️ Project Structure

```
uzence-components/
├── src/
│   ├── components/
│   │   ├── DataTable/
│   │   └── InputField/
│   ├── stories/
│   └── assets/
├── .storybook/
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

---

## 🧑‍💻 Development

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Start dev server:**
	```bash
	npm run dev
	```
3. **Run tests:**
	```bash
	npm run test
	```
4. **Build for production:**
	```bash
	npm run build
	```

---

