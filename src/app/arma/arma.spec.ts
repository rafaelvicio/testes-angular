import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ArmaComponent } from './arma.component';

describe('Component: Greeter', () => {
    let fixture, armaComponente, element, de;
    
    //setup
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ ArmaComponent ]
      });
  
      fixture = TestBed.createComponent(ArmaComponent);
      armaComponente = fixture.componentInstance;  // to access properties and methods
      element = fixture.nativeElement;      // to access DOM element
      de = fixture.debugElement;            // test helper
    });
    
    //specs
    it('should render `Hello World!`', async(() => {
        armaComponente.name = 'World';
      //trigger change detection
      fixture.detectChanges();
      fixture.whenStable().then(() => { 
        expect(element.querySelector('h1').innerText).toBe('Hello World!');
        expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
      });
    }));
  }) 