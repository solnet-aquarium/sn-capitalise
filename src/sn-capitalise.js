(function() {
    'use strict';
    angular.module('snCapitaliseFilter', [])
        .filter('snCapitalise', function() {

            function capitaliseWord(word) {
                return word.charAt(0).toUpperCase() + word.substr(1);
            }
            return function(input, all) {
                if (!input) {
                    return '';
                }

                if (all) {
                    return input.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
                        return capitaliseWord(txt);
                    });
                } else {
                    return capitaliseWord(input);
                }

            };
        });
})();
