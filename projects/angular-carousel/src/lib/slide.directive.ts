import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[mrCarouselSlide]',
})
export class CarouselSlideDirective {
  constructor(public template: TemplateRef<any>) {
  }
}
