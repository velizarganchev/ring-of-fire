import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAddDialogComponent } from './player-add-dialog.component';

describe('PlayerAddDialogComponent', () => {
  let component: PlayerAddDialogComponent;
  let fixture: ComponentFixture<PlayerAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
