import { ModuleWithProviders } from '@angular/core';
import { AudioTrackComponent } from './ionic-audio-track-component';
import { AudioTrackProgressComponent, AudioTrackProgressBarComponent } from './ionic-audio-track-progress-component';
import { AudioTrackPlayComponent } from './ionic-audio-track-play-component';
import { AudioTimePipe } from './ionic-audio-time-pipe';
export declare function declarations(): (typeof AudioTrackComponent | typeof AudioTrackProgressComponent | typeof AudioTrackProgressBarComponent | typeof AudioTrackPlayComponent | typeof AudioTimePipe)[];
export declare class IonicAudioModule {
    /**
     * Configures Ionic Audio to use either Cordova or HTML5 audio.
     * If no ```audioProvider``` is set it will automatically choose one based on the current environment
     */
    static forRoot(audioProviderFactory: any): ModuleWithProviders;
}
