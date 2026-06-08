import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {}
