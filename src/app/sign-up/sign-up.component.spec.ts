import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { ToastrService } from 'ngx-toastr';



describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let toastrService: ToastrService
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check save data', () => {
    expect(component.saveData().code).toEqual(200);
    expect(component.saveData().status).toEqual('Successfull');
  });
});
