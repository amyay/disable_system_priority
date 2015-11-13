(function() {

  return {
    events: {
      'app.activated'                   : 'init',
      'ticket.form.id.changed'          : 'reinit'
    },

    init: function() {
      this.ticketFields("priority").disable();
    }
  };

}());
