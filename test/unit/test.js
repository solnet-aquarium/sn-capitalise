angular.module('snCapitaliseApp', ['snCapitaliseFilter']);

describe('Solnet Angular Capitalise Filter', function() {
    beforeEach(module('snCapitaliseApp'));

    it('capitalise the first letter of the first word by default', inject(function(snCapitaliseFilter) {
        expect(snCapitaliseFilter('lowercase string')).toEqual('Lowercase string');
    }));

    it('capitalise the first letter of each word if passed "true" as the first parameter', inject(function(snCapitaliseFilter) {
        expect(snCapitaliseFilter('lowercase string', true)).toEqual('Lowercase String');
    }));

    it('should not modify the rest of the string', inject(function(snCapitaliseFilter) {
        expect(snCapitaliseFilter('LOWERCASE STRING')).toEqual('LOWERCASE STRING');
        expect(snCapitaliseFilter('LOWERCASE STRING', true)).toEqual('LOWERCASE STRING');
    }));
});
