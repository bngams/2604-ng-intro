import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MaterialModule } from './material-module';
import { Header } from './pages/layout/header/header';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

@NgModule({
  declarations: [App, Header, NotFound, Home, About],
  imports: [MaterialModule, BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
