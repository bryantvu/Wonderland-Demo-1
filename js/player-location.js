/*
    Copyright 2021. Futurewei Technologies Inc. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http:  www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

/* Global function used to play SFX and music */
var getPlayerLocation = null;
/**
@brief Audio that is attached to the player object.
*/
WL.registerComponent('player-location', {
}, {
    init: function() {
        this.playerLocation = [0,0,0];
        getPlayerLocation = function(){
            glMatrix.quat2.getTranslation(this.playerLocation, this.object.transformLocal);
            // console.log(`playerLocation() >> ${this.playerLocation}`);
            return this.playerLocation;
        }.bind(this);
    },
});