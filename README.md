# sn-capitalise

[![Build Status](https://travis-ci.org/solnetdigital/sn-capitalise.svg?branch=master)](https://travis-ci.org/solnetdigital/sn-capitalise)
[![Code Climate](https://codeclimate.com/github/solnetdigital/sn-capitalise/badges/gpa.svg)](https://codeclimate.com/github/solnetdigital/sn-capitalise)
[![Test Coverage](https://codeclimate.com/github/solnetdigital/sn-capitalise/badges/coverage.svg)](https://codeclimate.com/github/solnetdigital/sn-capitalise)

Angular JS filter for word capitalisation. Inspired and adapted from [WinterJoey's codepen][1].

## Usage

### HTML

```HTML
<!-- Capitalise first letter of first word only -->
<span>{{ someText | snCapitalise }}</span>

<!-- Capitalise first letter of all words -->
<span>{{ someText | snCapitalise:true }}</span>
```

### JS

```JavaScript
angular.module('yourApp', ['snCapitalise']);
```

[1]: http://codepen.io/WinterJoey/pen/sfFaK
