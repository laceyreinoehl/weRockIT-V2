$(function(){
    $(document).on("click", "#katreenaReadMore", katreenaReadMore);
    $(document).on("click", "#katreenaReadLess", katreenaReadLess);
    $(document).on('submit', '#test-form', submitToMailingList);
    $(document).on('submit', '#sponsorshipEmailForm', submitSponsorForm);
    $(document).on('submit', '#anonymousReportForm', submitAnonymousReportForm);


    function katreenaReadMore(){
        $("#katreenaReadMore").hide();
        $("#katreenaExtendedBio").show();
    }

    function katreenaReadLess(){
        $("#katreenaReadMore").show();
        $("#katreenaExtendedBio").hide();
    }

    /**
     *
     * @param event
     */
    function submitToMailingList(event) {
        event.preventDefault();
        var form = $('form#test-form'),
            url = 'https://script.google.com/macros/s/AKfycbz0nWMxmjxxguJski_acVi0VDUZBtDAGBxRhIzcjZU65Tedo9I/exec';
        $.get(url, form.serialize())
            .done(function () {
                $("#mailingListThankYou").slideDown();
            })
            .fail(function () {
                $("#mailingListError").slideDown();
            });
    }

    /**
     *
     * @param event
     */
    function submitSponsorForm(event){
        event.preventDefault();
        var form = $('form#sponsorshipEmailForm'),
            url = 'https://script.google.com/macros/s/AKfycbzz7ZuItYGczN943eoRWZ3o1-qdv7a0lp27mIneYUm5pl4nBYix/exec';
        $.get(url, form.serialize())
            .done(function () {
                $("#sponsorInquiryFormThankYou").slideDown();
            })
            .fail(function () {
                $("#sponsorInquiryFormError").slideDown();
            });
    }

    /**
     *
     * @param event
     */
    function submitAnonymousReportForm(event){
        event.preventDefault();
        var form = $('form#anonymousReportForm'),
            url = 'https://script.google.com/macros/s/AKfycbzvCiiUaWzlDU883InliBan-dinyBsc7R4RMqvt4su8LKx0aVRE/exec';
        $.get(url, form.serialize())
            .done(function () {
                $("#anonymousReportFormReceived").slideDown();
            })
            .fail(function () {
                $("#anonymousReportFormError").slideDown();
            });
    }


});