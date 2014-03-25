
'use strict';

describeComponent('flight-attach', function () {


    // Initialize the component and attach it to the DOM
    beforeEach(function () {
        setupComponent();
    });

    it('is defined', function () {
        expect(this.component).toBeDefined();
    });

    it('fixture is attached', function () {
        setupComponent('<div><div data-attach="test/components/fixture"></div></div>');

        var component = this.component;

        // Setting a timeout to wait for requirejs loading test/components/fixture.js.
        setTimeout(function () {

            expect(component.$node.children()).toHaveClass('test');
            
        }, 500);
    });
});