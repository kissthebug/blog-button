# @kissthebug/blog-button

A tiny, typed React button component built with TypeScript. Ships both ESM and CJS, works with React 18/19, and supports styling via utility classes (e.g., Tailwind).

## ✨ Features

- 🚀 Zero-config: just install & import
- 📦 Tree-shakeable, tiny bundle
- 🔄 Supports **ESM** and **CJS** consumers
- ⚛️ Compatible with React 18 & 19
- 🔧 Written in TypeScript with full typings

## 📦 Installation

```bash
npm install @kissthebug/blog-button
# or
yarn add @kissthebug/blog-button
# or
pnpm add @kissthebug/blog-button
```

> ⚠️ Make sure you already have `react` and `react-dom` installed (they are peer dependencies).

## 🚀 Usage

```tsx
import Button from "@kissthebug/blog-button";

export default function App() {
  return (
    <div className="p-6">
      <Button onClick={() => alert("Hello!")}>Primary Button</Button>

      <Button variant="secondary" className="ml-2">
        Secondary Button
      </Button>
    </div>
  );
}
```

---

## 🛠 Props

| Prop       | Type                                      | Default     | Description                 |
| ---------- | ----------------------------------------- | ----------- | --------------------------- |
| `children` | `ReactNode`                               | —           | Button label or elements    |
| `variant`  | `"primary"` \| `"secondary"`              | `"primary"` | Style variant               |
| ...rest    | `ButtonHTMLAttributes<HTMLButtonElement>` | —           | All native `<button>` props |

---

## 📖 Examples

- **Primary**

```tsx
<Button>Click me</Button>
```

- **Secondary**

```tsx
<Button variant="secondary">Cancel</Button>
```

- **With Tailwind override**

```tsx
<Button className="bg-green-600 hover:bg-green-700">Custom Green</Button>
```

---

## 📚 Development

Clone the repo and build locally:

```bash
git clone https://github.com/kissthebug/blog-button.git
cd blog-button
npm install
npm run build
```

Run in watch mode:

```bash
npm run dev
```

---

## 📝 License

MIT © [kissthebug](https://github.com/kissthebug)
