import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges
} from '@angular/core';

import {CarouselSlideDirective} from "./slide.directive";

@Component({
  selector: 'angular-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnChanges, AfterContentChecked, OnDestroy {
  @Input() public bullets: boolean = true;
  @Input() public infinite: boolean = false;
  @Input() public auto: boolean = false;
  @Input() public duration: number = 5000;

  @Output() public page: EventEmitter<number> = new EventEmitter<number>();
  @Output() public previous: EventEmitter<number> = new EventEmitter<number>();
  @Output() public next: EventEmitter<number> = new EventEmitter<number>();

  @ContentChildren(CarouselSlideDirective) public slides: QueryList<CarouselSlideDirective> = new QueryList<CarouselSlideDirective>();

  public currentSlide: number = 0;

  private interval: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  public ngAfterContentChecked(): void {
    this.cdr.detectChanges();
    this.currentSlide = Math.max(Math.min(this.currentSlide, this.slides.length - 1), 0);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.auto) {
      if (changes.auto.currentValue) {
        this.startInterval();
      } else {
        this.stopInterval();
      }
    }
  }

  public ngOnDestroy(): void {
    this.stopInterval();
  }

  public previousSlide($event?: MouseEvent): void {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    if (this.currentSlide <= 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide--;
    }

    this.emitPrevious();
    this.restartInterval();
  }

  public nextSlide($event?: MouseEvent): void {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }
    if (this.currentSlide >= this.slides.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }

    this.emitNext();
    this.restartInterval();
  }

  public goToSlide(slide: number, $event?: MouseEvent): void {
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
    this.restartInterval();
  }

  public startInterval(): void {
    if (!this.auto) {
      return;
    }
    this.interval = setInterval(() => {
      this.nextSlide();
    }, Math.max(this.duration, 500));
  }

  public stopInterval(): void {
    if (!this.auto) {
      return;
    }
    clearInterval(this.interval);
  }

  private emitPrevious(): void {
    this.previous.emit(this.currentSlide + 1);
    this.emitPage();
  }

  private emitNext(): void {
    this.next.emit(this.currentSlide + 1);
    this.emitPage();
  }

  private emitPage(): void {
    this.page.emit(this.currentSlide + 1);
  }

  private restartInterval(): void {
    this.stopInterval();
    this.startInterval();
  }

}
