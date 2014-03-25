define(
    'test/components/fixture',

    ['flight/lib/component'],

    function (defineComponent) {

        'use strict';

        return defineComponent(fixture);

        function fixture() {

            this.after('initialize', function () {
                this.$node.addClass('test');

            });
        }
    }
);


