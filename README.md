# Matching Engine Nodejs
## Usage
```js

import { MatchingEngine } from './MatchingEngine.js'

const matchEngine = new MatchingEngine();

// Add new order
matchEngine.addOrder("sell", 100.003, 2.4);

// Add trade order
matchEngine.addOrder("buy", 90.394, 3.445);

// Print volume order
matchEngine.printOrder(); // {"buy":[{"price":90.394,"volume":3.445}],"sell":[{"price":100.003,"volume":2.4}]}

```
