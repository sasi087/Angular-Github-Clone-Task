import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  private GITHUB_BASE_URL = 'https://api.github.com/';

  getBaseURL() {
    return this.GITHUB_BASE_URL;
  }
}
