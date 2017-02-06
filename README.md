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
  // minimum breakpoint and minimum height breakpoint
  // take only a value
  +bpmin(800)
    width: 24%
  +minh(400)
    width: 87%
```

## [size](src/_size.sass)

```sass
$w: 435
$h: 234
.some-img
  +size($w, $h)
  +bp(md)
    // Can be used for scaling:
    +size($w, $h, .6)  
```

```sass
// center fix-width element
.el   
  +max-width-center(200)
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

## [pseudo](src/_pseudo.sass)

```sass
// add a color overlay, 50% black by default
.el
  +pseudo-after-full()
```

## [spacing](src/_spacing.sass)

```sass
// atomic padding classes
+paddings(2)
+margins(2)
```

## [colors](src/_colors.sass)

```sass
// atomic color classes
$colors: (#1044fa 'blue') (#59f665 'green')
+colors($colors)
// will output classes for 'color' and 'background-color' properties
```
