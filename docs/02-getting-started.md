# Getting started

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
export class AppModule {
}
```

`styles.css`:

```css
/* Main Styling */

@import "~@marcreichel/angular-carousel/css/main.css";

/* Theme */

@import "~@marcreichel/angular-carousel/themes/stripes.css";
/* or */
@import "~@marcreichel/angular-carousel/themes/dots.css";
/* or */
/* @import "your-own-theme.css"; */
```

You can also create your own theme to match the theme of your website/app. More on that in the [Theming](04-theming.md)
section.


