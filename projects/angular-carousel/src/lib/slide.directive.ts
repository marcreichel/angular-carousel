import {Directive, TemplateRef} from "@angular/core";

@Directive({
  selector: '[angularCarouselSlide]',
})
export class CarouselSlideDirective {
  constructor(public template: TemplateRef<any>) {
  }
}
