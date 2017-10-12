import Ember from 'ember';
import Service from '@ember/service';

export default Service.extend({

    map: Ember.inject.service(),

    displayMyData(data) {
        const graphic = data;

        this.get('map').addGraphic(graphic);
    }

});
