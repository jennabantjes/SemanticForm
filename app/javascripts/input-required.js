var init = function() {
        inputs = form.elements;

        inputs[0].focus();

        form.onsubmit = function() {
            var required = [ ], att, val;

            for (var i = 0; i < inputs.length; i++) {
                att = inputs[i].getAttribute('required');

                if (att != null) {
                    val = inputs[i].value;

                    if (val.replace(/^\s+|\s+$/g, '') == ' ') {
                        required.push(inputs[i]).name;
                    }
                }
            }

            if (required.length > 0) {
                alert('The following fields are required: ' + required.join(', '));
                return false;
            }
        }
    }
};