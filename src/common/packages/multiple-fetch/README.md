# Multiple fetch lib

### General

This custom package provides a class 
for easy working with async actions like fetch-requests 

### Usage

```js
import {MultipleFetch} from 'multiple-fetch'

...

const fetch1 = ...
const fetch2 = ...
const fetch3 = ...

const props1 = ...
const props2 = ...
const props3 = ...

...

// constructor gets alone param - log enable flag
const instance = new MultipleFetch(true)

const async1 = instance.run(() => fetch1(props1))
const async2 = instance.run(() => fetch1(props1))
const async3 = instance.run(() => fetch1(props1))
    
...

const result1 = async1.synchronize()
const result2 = async2.synchronize()
const result3 = async3.synchronize()
    
...
```

### TODO

- share comments
- add docs
- add test case for checking async boost