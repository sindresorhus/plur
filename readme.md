# plur [![Build Status](https://travis-ci.org/sindresorhus/plur.svg?branch=master)](https://travis-ci.org/sindresorhus/plur)

> Naively pluralize a word


## Install

```
$ npm install --save plur
```


## Usage

```js
var plur = require('plur');

plur('unicorn', 4);
//=> 'unicorns'

plur('puppy', 2);
//=> puppies

plur('box', 2);
//=> boxes

plur('woman', 'women', 2);
//=> 'women'
```


## API

### plur(word, [plural], count)

#### word

Type: `string`

Word to pluralize.

#### plural

Type: `string`  
Default: Words ending in *s*, *x*, *z*, *ch*, *sh* will be pluralized with *-es*, like
*foxes*. Words ending in *y* will be pluralized by replacing *y* with *-ies* as
in *puppies*.

Pluralized word.

The plural suffix will match the case of the last letter in the word.

#### count

Type: `number`

Count to determine whether to use singular or plural.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
