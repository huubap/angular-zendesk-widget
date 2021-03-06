describe('ZendeskWidgetProvider', function() {
  'use strict';

  var subject, mockService, $window;

  beforeEach(module('zendeskWidget'));
  beforeEach(inject(function(_$window_, _ZendeskWidget_) {
    subject    = _ZendeskWidget_;
    $window    = _$window_;
  }));

  describe('a set of API methods', function() {
    beforeEach(function() {
      var apiMethods = ['setLocale', 'identify', 'hide', 'show', 'activate'];
      mockService    = jasmine.createSpyObj('MockZendeskWebWidgetAPI', apiMethods);
      $window.zE     = mockService;
    });

    it("delegates to Zendesk's Web Widget API", function() {
      var anyArgs = ['foo', 'bar', 'baz'];

      subject.identify(anyArgs);
      subject.hide(anyArgs);
      subject.show(anyArgs);
      subject.activate(anyArgs);
      subject.setLocale(anyArgs);

      expect(mockService.identify).toHaveBeenCalledWith(anyArgs);
      expect(mockService.hide).toHaveBeenCalledWith(anyArgs);
      expect(mockService.show).toHaveBeenCalledWith(anyArgs);
      expect(mockService.activate).toHaveBeenCalledWith(anyArgs);
      expect(mockService.setLocale).toHaveBeenCalledWith(anyArgs);
    });
  });
})
