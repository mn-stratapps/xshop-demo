import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
//import { CoreModuleModule } from './core/core-module/core-module.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpAuthService } from './shared/services/http-auth.service';
import { ImageCropperModule } from './modules/image-cropper/image-cropper.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleMapsModule } from '@angular/google-maps';
import {SocialLoginModule,SocialAuthServiceConfig,} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login'
import { CoreModuleModule } from './core/core-module/core-module.module';
import { DatePipe } from '@angular/common';
import { UrlService } from './shared/services/previous-url.service';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    PagesComponent,
    ElementsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    NgxPaginationModule,
    GoogleMapsModule,
    SocialLoginModule,
    CoreModuleModule,
   // CoreModuleModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: false,
      enableHtml: true,
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    SharedModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpAuthService,multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('114581051467-mfur92sv175fnujv0coij9eehrrs0v8o.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    DatePipe,UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
