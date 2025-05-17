# goodparty-styleguide

## 📦 Installation

Install the package from npm:

```bash
npm install goodparty-styleguide
# or
yarn add goodparty-styleguide
# or
pnpm add goodparty-styleguide
```

> **Peer dependencies:** You must have `react` and `react-dom` installed in your project.

## 🚀 Usage

Import components directly from the package:

```tsx
import { Button, Input, Card } from "goodparty-styleguide";

export default function Example() {
  return (
    <Card>
      <Input placeholder="Type here..." />
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🛠️ Development

```bash
# Clone the repo
# (or work in your own monorepo)
git clone ...
cd goodparty-styleguide
npm install

# Start the dev server
npm run dev

# Launch Storybook
npm run storybook

# Build the package for npm
npm run build
```

## 📄 License

MIT
