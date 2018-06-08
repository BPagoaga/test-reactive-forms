import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, FormControl } from "@angular/forms";
import { MatSelectionListChange } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  testForm: FormGroup;
  availableDaysForm: FormGroup;
  days: Array<string> = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
  ];

  get availableDays(): FormArray {
    return this.testForm.get("availableDays") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.testForm = this.fb.group({
      availableDays: this.fb.array([])
    });
    this.setAvailableDays();
  }

  setAvailableDays() {
    const days = this.days.map(day => this.fb.group({ day: day }));

    const dayFormArray = this.fb.array(days);
    this.testForm.setControl("availableDays", dayFormArray);
  }

  updateAvailableDaysArray(event: MatSelectionListChange) {
    const selection = event.source.selectedOptions.selected;

    const daysArray = [];
    selection.forEach(d => daysArray.push(d.getLabel()));

    const daysArrayForm = this.fb.array(daysArray);

    this.testForm.setControl("availableDays", daysArrayForm);
  }

  onSubmitForm() {
    console.log(this.testForm.value);
  }
}
