import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[carouselSlide]',
})
export class CarouselSlideDirective {
  constructor(public template: TemplateRef<any>) {
  }
}
