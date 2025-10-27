# 5 Practical CSS Layout Tips

Here are a few layout tips that have helped me build cleaner, more flexible pages.

## 1. Use a content width container

```css
.container { width: min(1100px, 92%); margin-inline: auto; }
```

## 2. Prefer Flexbox for one-dimensional alignment

```css
.header { display: flex; align-items: center; justify-content: space-between; }
```

## 3. Prefer Grid for two-dimensional layouts

```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
```

## 4. Use `clamp()` for responsive type

```css
h1 { font-size: clamp(2rem, 6vw, 3.25rem); }
```

## 5. Keep spacing consistent

Set a small set of spacing tokens and reuse them.

Happy styling!