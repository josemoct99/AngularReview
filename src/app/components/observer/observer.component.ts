import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    // Informacion de servidor o que demora en responder.
  }

  private buildForm() {
    /*this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(80)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });*/
    
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    

    this.form.valueChanges
    .pipe(
      debounceTime(1500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault(); // Cancelar su comportamiento por defecto.
    console.log('Save')
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  doSomething() {
    console.log('Clic');
  }

}