import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[ngxCarouselSlide]',
})
export class CarouselSlideDirective {
  constructor(public template: TemplateRef<any>) {
  }
}
