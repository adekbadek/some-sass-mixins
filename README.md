# some sass mixins

Use it:

```
npm i --save-dev some-sass-mixins
```

## [media](src/_media.sass)

Pass a bootstrap-like breakpoint name or a value.

```sass
.foo
  +bp(md)
    width: 100%
  +bp(342)
    width: 42%
  // minimum breakpoint mixin takes only a value
  +bpmin(800)
    width: 24%
  // and minimum height breakpoint too
  +minh(400)
    width: 87%
```

## [size](src/_size.sass)

Can be used for scaling:

```sass
$w: 435
$h: 234
.some-img
  +size($w, $h)
  +bp(md)
    +size($w, $h, .6)  
```

## [hdpi](src/_hdpi.sass) background image

```sass
.hero
  +bg_hdpi('images/big-image')
```

## [shapes](src/_shapes.sass)

```sass
+triangle('down', 10px, $white)
```

```sass
+caret(red, white, 'bottom', 4px, 5px)
```
