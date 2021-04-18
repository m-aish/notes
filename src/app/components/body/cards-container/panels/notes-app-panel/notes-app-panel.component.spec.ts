import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAppPanelComponent } from './notes-app-panel.component';

describe('NotesAppPanelComponent', () => {
  let component: NotesAppPanelComponent;
  let fixture: ComponentFixture<NotesAppPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesAppPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAppPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
