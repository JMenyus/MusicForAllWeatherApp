import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeWinterComponent } from './youtube-winter.component';

describe('YoutubeWinterComponent', () => {
  let component: YoutubeWinterComponent;
  let fixture: ComponentFixture<YoutubeWinterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubeWinterComponent]
    });
    fixture = TestBed.createComponent(YoutubeWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
