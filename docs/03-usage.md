# Usage/Examples

```html
// torchlight! {"lineNumbers": false}
<angular-carousel>
    <div *angularCarouselSlide>
        Slide 1
    </div>
    <div *angularCarouselSlide>
        Slide 2
    </div>
    <div *angularCarouselSlide>
        Slide 3
    </div>
</angular-carousel>
```

## Options

### `[bullets]` (`boolean`) (default: `true`)

Show or hide the bullets.

```html
// torchlight! {"lineNumbers": false}
<angular-carousel [bullets]="false">
    <!-- slides -->
</angular-carousel>
```

![No Bullets](art/bullets.gif)

### `[infinite]` (`boolean`) (default: `false`)

Enable or disable infinite sliding.

```html
// torchlight! {"lineNumbers": false}
<angular-carousel [infinite]="true">
    <!-- slides -->
</angular-carousel>
```

![Infinite](art/infinite.gif)

### `[auto]` (`boolean`) (default: `false`)

Enable or disable auto sliding.

```html
// torchlight! {"lineNumbers": false}
<angular-carousel [auto]="true">
    <!-- slides -->
</angular-carousel>
```

![Auto](art/auto.gif)

### `[duration]` (`number`) (default: `5000`)

Duration (in ms) of transition between slides (if `[auto]` is enabled)

```html
// torchlight! {"lineNumbers": false}
<angular-carousel [duration]="2500">
    <!-- slides -->
</angular-carousel>
```
