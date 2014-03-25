/// <reference path="flight-attach.d.ts" />
define('flight-attach', ['require', 'flight/lib/component', 'flight/lib/compose'], function (require, defineComponent, compose) {
    'use strict';

    return defineComponent(withAttach);

    function withAttach() {
        var _componentOptionsRegexp, _this;

        this.defaultAttrs({
            componentSelector: '[data-attach]',
            componentNameAttr: 'data-attach',
            componentOptionsAttrPrefix: 'data-option-'
        });

        this.attach = function (el) {
            var componentNames = el.getAttribute(this.attr.componentNameAttr).split(','), componentOptions = null;

            componentNames.forEach(function (value, index) {
                componentNames[i] = value.trim();
            });

            for (var i in el.attributes) {
                if (!el.attributes.hasOwnProperty(i)) {
                    continue;
                }

                var item = el.attributes[i];
                if (item && item.name && _componentOptionsRegexp.exec(item.name)) {
                    if (componentOptions == null) {
                        componentOptions = {};
                    }

                    componentOptions[item.name.substring(this.attr.componentOptionsAttrPrefix.length)] = item.value;
                }
            }

            require(componentNames, function () {
                var fns = Array.prototype.slice.call(arguments);
                var component = fns[0];
                if (component.attachTo) {
                    compose.mixin(component.prototype, fns.slice(1));
                } else {
                    component = defineComponent.apply(this, fns);
                }

                component.attachTo(el, componentOptions);
                // TODO: Is this needed?
                //_this.trigger('uiComponentAttached', { component: component });
            });
        };

        this.after('initialize', function () {
            _componentOptionsRegexp = new RegExp('^' + this.attr.componentOptionsAttrPrefix, 'i');

            _this = this;

            this.select('componentSelector').each(function (index, el) {
                _this.attach.call(_this, el);
            });
        });
    }
});
//# sourceMappingURL=flight-attach.js.map
