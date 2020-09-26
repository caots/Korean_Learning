import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListWordPage } from './list-word.page';

describe('ListWordPage', () => {
  let component: ListWordPage;
  let fixture: ComponentFixture<ListWordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
