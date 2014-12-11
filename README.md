# sn-capitalise

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
