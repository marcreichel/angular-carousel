
# Angular Carousel

A simple and lightweight Angular (12+) Carousel Component.


## Installation

Install `@marcreichel/angular-carousel` with npm:

```bash
npm install @marcreichel/angular-carousel --save
```

or with yarn:

```bash
yarn add @marcreichel/angular-carousel
```

## Usage/Examples

### Basic setup

`app.module.ts`:

```typescript
import { CarouselModule } from '@marcreichel/angular-carousel';

@NgModule({
  // ...
  imports: [
    // ...
    CarouselModule,
  ],
})
export class AppModule { }
```

`app.component.html`:

```html
<mr-carousel>
  <ng-template *mrCarouselSlide>
    Slide 1
  </ng-template>
  <ng-template *mrCarouselSlide>
    Slide 2
  </ng-template>
  <ng-template *mrCarouselSlide>
    Slide 3
  </ng-template>
</mr-carousel>
```

Import a theme:

```scss
@import "~@marcreichel/angular-carousel/themes/stripes.css";

/* or */

@import "~@marcreichel/angular-carousel/themes/dots.css";
```

You can also create your own theme to match the theme of your website/app. More on that in the [Theming](#theming) section.

### Bullets (default: `true`)

Setting the `[bullets]` option to `false` hides the bullets from the carousel.

```html
<mr-carousel [bullets]="false">
  <!-- Slides -->
</mr-carousel>
```

### Infinite (default: `false`)

Using the `[infinite]` option the carousel can be slide through infinitely.

```html
<mr-carousel [infinite]="true">
  <!-- Slides -->
</mr-carousel>
```

### Auto (default: `false`)

Setting the `[auto]` option to `true` lets the carousel cycle through the slides automatically.

```html
<mr-carousel [auto]="true">
  <!-- Slides -->
</mr-carousel>
```

### Duration (default: `5000`, minimum: `500`)

This setting describes for how long each slide is visible in milliseconds (when using the `[auto]="true"` mode).

```html
<mr-carousel [duration]="6000">
  <!-- Slides -->
</mr-carousel>
```

### Theming

Create your own theme by styling at least the bullets (the `stripes` theme is used as an example below):

```css
.carousel__bullet {
  width: 2rem;
  height: 0.2rem;
  background: #64748B;
  opacity: .25;
}

.carousel__bullet:hover {
  opacity: .6;
}

.carousel__bullet.carousel__bullet--active {
  opacity: 1;
  background: #6366F1;
}
```
