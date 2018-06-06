import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class FileUploadService {
  constructor(private httpClient: HttpClient) {}

  postFile(fileToUpload: File): Observable<boolean | {}> {
    const endpoint = "your-destination-url";
    const formData: FormData = new FormData();
    formData.append("fileKey", fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => {
        return true;
      })
      .catch(e => this.handleError(e));
  }

  handleError(e): any {
    console.error(`Erreur lors de l'upload : ${e}`);
  }
}
