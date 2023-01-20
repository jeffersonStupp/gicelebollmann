import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariocadastroComponent } from './usuariocadastro.component';

describe('UsuariocadastroComponent', () => {
  let component: UsuariocadastroComponent;
  let fixture: ComponentFixture<UsuariocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariocadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
