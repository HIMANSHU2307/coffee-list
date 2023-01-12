import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [{ provide: Router, useValue: router }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to detail on item click', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();

    let coffeeButton = fixture.debugElement.query(By.css("list--grid-item"));
    coffeeButton.triggerEventHandler("click", null);

    expect(router.navigate).toHaveBeenCalledWith(['/detail']);
  });
});
