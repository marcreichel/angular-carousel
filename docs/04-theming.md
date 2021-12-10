# Theming

Create your own theme by styling at least the bullets (the `stripes` theme is used as an example below):

```css
// torchlight! {"lineNumbers": false}
.carousel__bullet {
    width: 2rem;
    height: 0.2rem;
    background: #54748B;
    opacity: 0.25;
}

.carousel__bullet:hover {
    opacity: 0.6;
}

.carousel__bullet.carousel__bullet--active {
    opacity: 1;
    background: #6366F1;
}
```
