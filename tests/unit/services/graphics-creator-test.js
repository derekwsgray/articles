import Ember from 'ember';
import Service from '@ember/service';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:graphics-creator', 'Unit | services | graphics creator', {
    beforeEach() {
        // 1. Register a dummy
        this.register('service:map', Service.extend({
            addGraphic() { // Override so we don't need leaflet
                // NOOP
            }
        }));
    }
});

test('graphics are added via the map service', function(assert) {

    // 2. Spy
    const mapService = Ember.getOwner(this).lookup('service:map');
    this.spy(mapService, 'addGraphic');

    // 3. Test
    const dataForCircle = { lat: 45, lon: 120, radius: 1000 };
    this.subject().displayMyData(dataForCircle);

    // 4. Verify
    assert.ok(mapService.addGraphic.calledOnce, 'An attempt to use the map service to add a graphic should have been made.');
});
