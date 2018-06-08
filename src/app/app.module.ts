import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FileUploadService } from "./services/file-upload.service";

@NgModule({
  declarations: [AppComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FileUploadService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
