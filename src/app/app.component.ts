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
  days: Array<string>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.days = Object.keys(this.testForm.controls.availableDaysForm.value);
  }

  initForm() {
    this.testForm = this.fb.group({
      availableDaysForm: this.getAvailableDays()
    });
  }

  getAvailableDays(): FormGroup {
    return this.fb.group({
      lundi: false,
      mardi: false,
      mercredi: false,
      jeudi: false,
      vendredi: false,
      samedi: false,
      dimanche: false
    });
  }

  onSubmitForm() {
    console.log(this.testForm.value);
  }
}
