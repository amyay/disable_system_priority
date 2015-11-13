(function() {

  return {
    events: {
      'app.activated'                   : 'init',
      'ticket.form.id.changed'          : 'init'
    },

    init: function() {
      this.ticketFields("priority").disable();
    }
  };

}());
