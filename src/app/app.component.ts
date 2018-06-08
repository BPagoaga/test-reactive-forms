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
  days = ["lundi", "mardi"];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.testForm = this.fb.group({
      availableDaysForm: this.fb.group({
        lundi: false,
        mardi: false
      })
    });
  }

  onSubmitForm() {
    console.log(this.testForm.value);
  }
}
