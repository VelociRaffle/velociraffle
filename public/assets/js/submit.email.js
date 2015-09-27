(function() {
  'use strict';

  $('#submit-email')
    .submit(function submitForm(e) {
      var emailAddress = $('#email-input').val(),
        errorMessageBox = $('#message-box');

      e.preventDefault();

      if (!emailAddress) {
        showBlankEmailError();
      }
      else {
        showSendingMessage();
        submitEmailAddress();
      }


      //////////////////////////////////////////////////////////////////////////
      function clearMessageBox() {
        errorMessageBox
          .removeClass('ticket-red visor-green')
          .text('');
      }

      function showBlankEmailError() {
        errorMessageBox
          .addClass('ticket-red')
          .text('Email cannot be blank.');
      }

      function showSendingMessage() {
        errorMessageBox
          .text('Adding ' + emailAddress + ' to the e-mail list...');
      }

      function submitEmailAddress() {
        $.ajax({
          type: 'POST',
          url: '/email/new-signup',
          data: {
            email: emailAddress
          },
          success: showSuccess
        });
      }

      function showSuccess(data) {
        errorMessageBox
          .addClass('visor-green')
          .text('Successfully added ' + emailAddress + ' to the email list!');
      }
    });

})();
