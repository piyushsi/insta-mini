# insta-mini

A Node.js module to fetch Instagram details (HD dp image link, Name, Followers, Following, Posts).
[![Github stars](https://img.shields.io/github/stars/piyushsi/insta-mini.svg?style=social&label=Star)](https://github.com/piyushsi/insta-mini)


## Installation

```
npm install insta-mini --save
```

## Usage


``` javascript
const instagram = require('metagetall');
instagram.fetch('zayn').then(res=>{console.log(res);});
```


Response will be an Object containing all the information from the id. All information are output in the example above.

## Stack/Library/Module Used
```
"node-fetch": "^2.6.0"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
