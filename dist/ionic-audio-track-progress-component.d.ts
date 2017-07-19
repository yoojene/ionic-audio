import { IAudioTrack } from './ionic-audio-interfaces';
import { ElementRef, Renderer } from '@angular/core';
/**
 * # ```<audio-track-progress>```
 *
 * Renders a timer component displaying track progress and duration
 *
 * ## Usage
 * ````
 * <audio-track-progress [audioTrack]="track"></audio-track-progress>
 * ````
 *
 * @element audio-track-progress
 * @parents audio-track
 * @export
 * @class AudioTrackProgressComponent
 */
export declare class AudioTrackProgressComponent {
    /**
     * The AudioTrackComponent parent instance created by ```<audio-track>```
     *
     * @property @Input() audioTrack
     * @type {IAudioTrack}
     */
    audioTrack: IAudioTrack;
}
/**
 * # ```<audio-track-progress-bar>```
 *
 * Renders a progress bar with optional timer, duration and progress indicator
 *
 * ## Usage
 * ````
 *  <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>
 * ````
 *
 * @element audio-track-progress-bar
 * @parents audio-track
 * @export
 * @class AudioTrackProgressBarComponent
 */
export declare class AudioTrackProgressBarComponent {
    private el;
    private renderer;
    /**
     * The AudioTrackComponent parent instance created by ```<audio-track>```
     *
     * @property @Input() audioTrack
     * @type {IAudioTrack}
     */
    audioTrack: IAudioTrack;
    private _showDuration;
    private _showProgress;
    constructor(el: ElementRef, renderer: Renderer);
    /**
     * Input property indicating whether to display track progress
     *
     * @property @Input() progress
     * @type {boolean}
     */
    progress: boolean;
    /**
     * Input property indicating whether to display track duration
     *
     * @property @Input() duration
     * @type {boolean}
     */
    duration: boolean;
    ngOnInit(): void;
    seekTo(value: any): void;
}
