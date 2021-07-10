import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from '@angular/core';
import {CarouselSlideDirective} from "./slide.directive";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterContentChecked {
  @Input() public hideBullets: boolean = false;

  @Output() public page: EventEmitter<number> = new EventEmitter<number>();
  @Output() public previous: EventEmitter<number> = new EventEmitter<number>();
  @Output() public next: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(CarouselSlideDirective) public slides: QueryList<CarouselSlideDirective> = new QueryList<CarouselSlideDirective>();

  public currentSlide: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.currentSlide = Math.max(Math.min(this.currentSlide, this.slides.length - 1), 0);
  }

  previousSlide($event?: MouseEvent) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    if (this.currentSlide <= 0) {
      return;
    }

    this.currentSlide--;
    this.emitPrevious();
  }

  nextSlide($event?: MouseEvent) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    if (this.currentSlide >= this.slides.length - 1) {
      return;
    }

    this.currentSlide++;
    this.emitNext();
  }

  goToSlide(slide: number, $event?: MouseEvent) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }

    const index = slide - 1;

    if (index < 0 || index >= this.slides.length) {
      return;
    }

    if (index === this.currentSlide) {
      return;
    }

    this.currentSlide = index;
    this.emitPage();
  }

  private emitPrevious() {
    this.previous.emit(this.currentSlide + 1);
    this.emitPage();
  }

  private emitNext() {
    this.next.emit(this.currentSlide + 1);
    this.emitPage();
  }

  private emitPage() {
    this.page.emit(this.currentSlide + 1);
  }

}
