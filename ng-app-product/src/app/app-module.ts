import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './pages/layout/header/header';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { UIModule } from './modules/ui/ui-module';
import { CartModule } from './modules/cart/cart-module';
import { AuthModule } from './modules/auth/auth-module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, Header, NotFound, Home, About],
  imports: [
    UIModule,
    BrowserModule,
    AppRoutingModule,
    CartModule,
    AuthModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App],
})
export class AppModule {}
