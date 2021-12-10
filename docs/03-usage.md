# Usage/Examples

```html
// torchlight! {"lineNumbers": false}
<angular-carousel>
    <ng-template *angularCarouselSlide>
        Slide 1
    </ng-template>
    <ng-template *angularCarouselSlide>
        Slide 2
    </ng-template>
    <ng-template *angularCarouselSlide>
        Slide 3
    </ng-template>
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
