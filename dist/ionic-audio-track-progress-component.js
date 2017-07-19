import { Component, ElementRef, Renderer, Input } from '@angular/core';
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
var AudioTrackProgressComponent = (function () {
    function AudioTrackProgressComponent() {
    }
    return AudioTrackProgressComponent;
}());
export { AudioTrackProgressComponent };
AudioTrackProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-track-progress',
                template: '<em *ngIf="audioTrack.duration > 0">{{audioTrack.progress | audioTime}} / </em><em>{{audioTrack.duration | audioTime}}</em>'
            },] },
];
/** @nocollapse */
AudioTrackProgressComponent.ctorParameters = function () { return []; };
AudioTrackProgressComponent.propDecorators = {
    'audioTrack': [{ type: Input },],
};
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
var AudioTrackProgressBarComponent = (function () {
    function AudioTrackProgressBarComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "progress", {
        get: function () {
            return this._showProgress;
        },
        /**
         * Input property indicating whether to display track progress
         *
         * @property @Input() progress
         * @type {boolean}
         */
        set: function (value) {
            this._showProgress = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "duration", {
        get: function () {
            return this._showDuration;
        },
        /**
         * Input property indicating whether to display track duration
         *
         * @property @Input() duration
         * @type {boolean}
         */
        set: function (value) {
            this._showDuration = true;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackProgressBarComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
    };
    AudioTrackProgressBarComponent.prototype.seekTo = function (value) {
        console.log("Seeking to", value);
        if (!Number.isNaN(value))
            this.audioTrack.seekTo(value);
    };
    return AudioTrackProgressBarComponent;
}());
export { AudioTrackProgressBarComponent };
AudioTrackProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-track-progress-bar',
                template: "\n    <time *ngIf=\"_showProgress\">{{audioTrack.progress | audioTime}}</time>\n    <input type=\"range\" #seeker min=\"0\" [max]=\"audioTrack.duration\" step=\"any\" [value]=\"audioTrack.progress\" (change)=\"seekTo(seeker.value)\">\n    <time *ngIf=\"_showDuration\">{{audioTrack.duration | audioTime}}</time>\n    "
            },] },
];
/** @nocollapse */
AudioTrackProgressBarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
AudioTrackProgressBarComponent.propDecorators = {
    'audioTrack': [{ type: Input },],
    'progress': [{ type: Input },],
    'duration': [{ type: Input },],
};
//# sourceMappingURL=ionic-audio-track-progress-component.js.map