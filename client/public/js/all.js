(function() {
  'use strict';

  var firstCTAdata = {
    emailInput: $('#email-input'),
    messageBox: $('#message-box')
  },
    secondCTAdata = {
      emailInput: $('#email-input-2'),
      messageBox: $('#message-box-2')
    };

  $('#submit-email')
    .submit(submitEmailForm.bind(firstCTAdata));

  $('#submit-email-2')
    .submit(submitEmailForm.bind(secondCTAdata));

  function submitEmailForm(e) {
    var emailAddress = this.emailInput.val(),
      errorMessageBox = this.messageBox;

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
  }
})();
