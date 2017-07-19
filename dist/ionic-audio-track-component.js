import { AudioProvider } from './ionic-audio-providers';
import { WebAudioTrack } from './ionic-audio-web-track';
import { CordovaAudioTrack } from './ionic-audio-cordova-track';
import { Component, EventEmitter, Output, Input } from '@angular/core';
/**
 * # ```<audio-track>```
 *
 * Creates a top level audio-track component
 *
 * ## Usage
 *
 * ````
 *   <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *   ...
 *   </audio-track>
 * ````
 * @element audio-track
 * @export
 * @class AudioTrackComponent
 */
var AudioTrackComponent = (function () {
    function AudioTrackComponent(_audioProvider) {
        this._audioProvider = _audioProvider;
        /**
         * Output property expects an event handler to be notified whenever playback finishes
         *
         * @property onFinish
         * @type {EventEmitter}
         */
        this.onFinish = new EventEmitter();
        this._isFinished = false;
    }
    AudioTrackComponent.prototype.ngOnInit = function () {
        if (!(this.track instanceof WebAudioTrack) && !(this.track instanceof CordovaAudioTrack)) {
            this._audioTrack = this._audioProvider.create(this.track);
        }
        else {
            Object.assign(this._audioTrack, this.track);
            this._audioProvider.add(this._audioTrack);
        }
        // update input track parameter with track is so we pass it to WebAudioProvider if needed
        this.track.id = this._audioTrack.id;
    };
    AudioTrackComponent.prototype.play = function () {
        this._audioTrack.play();
        this._audioProvider.current = this._audioTrack.id;
    };
    AudioTrackComponent.prototype.pause = function () {
        this._audioTrack.pause();
        this._audioProvider.current = undefined;
    };
    AudioTrackComponent.prototype.toggle = function () {
        if (this._audioTrack.isPlaying) {
            this.pause();
        }
        else {
            this.play();
        }
    };
    AudioTrackComponent.prototype.seekTo = function (time) {
        this._audioTrack.seekTo(time);
    };
    Object.defineProperty(AudioTrackComponent.prototype, "id", {
        get: function () {
            return this._audioTrack.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "art", {
        get: function () {
            return this.track.art;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "artist", {
        get: function () {
            return this.track.artist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "title", {
        get: function () {
            return this.track.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "progress", {
        get: function () {
            return this._audioTrack.progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isPlaying", {
        get: function () {
            return this._audioTrack.isPlaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "duration", {
        get: function () {
            return this._audioTrack.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "completed", {
        get: function () {
            return this._audioTrack.completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "canPlay", {
        get: function () {
            return this._audioTrack.canPlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "error", {
        get: function () {
            return this._audioTrack.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isLoading", {
        get: function () {
            return this._audioTrack.isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "hasLoaded", {
        get: function () {
            return this.hasLoaded;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackComponent.prototype.ngDoCheck = function () {
        if (!Object.is(this._audioTrack.isFinished, this._isFinished)) {
            // some logic here to react to the change
            this._isFinished = this._audioTrack.isFinished;
            // track has stopped, trigger finish event
            if (this._isFinished) {
                this.onFinish.emit(this.track);
                this._isFinished = false;
                this._audioTrack.isFinished = false;
            }
        }
    };
    return AudioTrackComponent;
}());
export { AudioTrackComponent };
AudioTrackComponent.decorators = [
    { type: Component, args: [{
                selector: 'audio-track',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
AudioTrackComponent.ctorParameters = function () { return [
    { type: AudioProvider, },
]; };
AudioTrackComponent.propDecorators = {
    'track': [{ type: Input },],
    'onFinish': [{ type: Output },],
};
//# sourceMappingURL=ionic-audio-track-component.js.map