# use-reveal

> Scroll-reveal react hook for creating beautifuly timed animations

## Install

```bash
npm install --save use-reveal
```

## Usage

```jsx
import React from 'react'

import useReveal from 'use-reveal'

const Example = () => {
  const {ref, isRevealed, delay} = useReveal()
  return (
    <div
      ref={ref}
      className={isRevealed ? 'revealed' : 'hidden'}
      data-delay={delay}
    />
  )
}
```