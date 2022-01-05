import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LightComponent } from './components/light/light.component';
import { LightsComponent } from './components/lights/lights.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { groupsReducer } from './+state/groups/groups.reducer';
import { lightsReducer } from './+state/lights/lights.reducer';
import { LightEffects } from './+state/lights/lights.effects';
import { GroupEffects } from './+state/groups/groups.effects';
import { GroupComponent } from './components/group/group.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ActionComponent } from './components/group/action/action.component';
import { sequenceReducer } from './+state/sequence/sequence.reducer';
import { FormsModule } from '@angular/forms';
import { SequenceComponent } from './components/sequence/sequence.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AudioPlayerComponent } from './audio/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LightComponent,
    LightsComponent,
    OverviewComponent,
    GroupComponent,
    GroupsComponent,
    ActionComponent,
    SequenceComponent,
    AudioPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    StoreModule.forRoot(
      {
        lights: lightsReducer,
        groups: groupsReducer,
        sequences: sequenceReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LightEffects, GroupEffects]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faTrash, faPlus);
  }
}
