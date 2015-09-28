(function() {
  'use strict';

  $('#submit-email')
    .submit(function submitForm(e) {
      var emailAddress = $('#email-input').val(),
        errorMessageBox = $('#message-box');

      e.preventDefault();

      clearMessageBox();

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
          .removeClass('text-danger')
          .removeClass('text-success')
          .text('');
      }

      function showBlankEmailError() {
        errorMessageBox
          .addClass('text-danger')
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
          .addClass('text-success')
          .text('Successfully added ' + emailAddress + ' to the email list!');
      }
    });

})();
