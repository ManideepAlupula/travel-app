import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemuPage } from './memu.page';

describe('MemuPage', () => {
  let component: MemuPage;
  let fixture: ComponentFixture<MemuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
