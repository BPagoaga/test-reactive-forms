import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  testForm: FormGroup;
  days: Array<String> = ["lundi", "mardi"];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm();
  }

  initForm() {
    this.testForm = this.fb.group({
      availableDaysForm: this.fb.array([])
    });

    this.patch();
  }

  patch() {
    const control = <FormArray>this.testForm.controls["availableDaysForm"];

    this.days.forEach(x => control.push(this.fb.group({ x: false })));
  }

  onSubmitForm() {
    console.log(this.testForm.value);
  }
}
