const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.receiveAllData();
  selectView.setUpListenerForUserChoice();

  const infoView = new InfoView();
  infoView.receiveChosenInstrument();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.receiveOptionIndex();
  instrumentFamilies.sendOutData();

});
