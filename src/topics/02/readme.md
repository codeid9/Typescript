# Basic Type

---

## 📁 `02-props-with-types/` — Typing React Props

### ✅ What to Learn

- `interface` vs `type` for props
- Optional props
- Function props

#### 🧪 Practice

```tsx
// src/02-props-with-types/Button.tsx

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
```
