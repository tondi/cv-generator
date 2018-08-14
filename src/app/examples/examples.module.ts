import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';

import { ExamplesRoutingModule } from '@app/examples/examples-routing.module';
import { ExamplesComponent } from '@app/examples/examples/examples.component';
import { TodosComponent } from '@app/examples/todos/todos.component';
import { todosReducer } from '@app/examples/todos/todos.reducer';
import { TodosEffects } from '@app/examples/todos/todos.effects';
import { StockMarketComponent } from '@app/examples/stock-market/stock-market.component';
import { stockMarketReducer } from '@app/examples/stock-market/stock-market.reducer';
import { StockMarketEffects } from '@app/examples/stock-market/stock-market.effects';
import { StockMarketService } from '@app/examples/stock-market/stock-market.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    SharedModule,
    ExamplesRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([TodosEffects, StockMarketEffects])
  ],
  declarations: [
    ExamplesComponent,
    TodosComponent,
    StockMarketComponent,
  ],
  providers: [StockMarketService]
})
export class ExamplesModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}
