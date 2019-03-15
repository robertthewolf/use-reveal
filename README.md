# use-reveal

> Scroll-reveal react hook for creating beautifuly timed animations

![size: 1.3kb](https://img.shields.io/github/size/robertthewolf/use-reveal/index.js.svg)

## Install

```bash
npm install --save use-reveal
```

## Usage

```jsx
import useReveal from 'use-reveal'

export default () => {
  const {ref, isRevealed, delay} = useReveal()
  
  return (
    <div
      ref={ref}
      style={{
        opacity: 0;
        animation: isRevealed ? `fade .6s ease-out ${delay}s forwards` : 'none'
      }}
    />
  )
}
```

The useReveal() hook returns an object with these properties:

**`ref`** let's you choose the element to be detected by passing it to the `ref` prop.

**`isRevealed`** returns `false` by default. Once the element enters the view, isRevealed changes to `true`.

**`delay`** makes it easy to beautifully timed animations. Elements visible on load have delay from `0` to `1`. Elements entering on scroll have delay of `.2`, because it simply looks good.

