'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/nya-bootstrap-select/dist/css/nya-bs-select.min.css',
        'public/lib/angular-bootstrap-datetimepicker/src/css/datetimepicker.css',
        'public/lib/ng-tags-input/ng-tags-input.min.css',
        'public/lib/ng-tags-input/ng-tags-input.bootstrap.min.css',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.min.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/dist/angular-file-upload.min.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/nya-bootstrap-select/dist/js/nya-bs-select.min.js',
        'public/lib/moment/min/moment-with-locales.min.js',
        'public/lib/angular-moment/angular-moment.min.js',
        'public/lib/angular-bootstrap-datetimepicker/src/js/datetimepicker.js',
        'public/lib/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js',
        'public/lib/ng-file-upload/ng-file-upload.min.js',
        'public/lib/ng-tags-input/ng-tags-input.min.js',
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/angular-translate/angular-translate.min.js',
        'public/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
        'public/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
        'public/lib/angular-translate-storage-local/angular-translate-storage-local.min.js',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.min.js',
        'public/lib/angular-mocks/angular-mocks.js'
        // endbower
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
