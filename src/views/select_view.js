const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(){

}

SelectView.prototype.receiveAllData = function () {
  PubSub.subscribe('InstrumentFamiliesAllData', (event) => {
    const data = event.detail;
    this.populateSelect(data);
  });
};

SelectView.prototype.populateSelect = function (data) {
  const select = document.querySelector('select#instrument-families');

data.forEach((family, index) => {
  const option = document.createElement('option')
  option.textContent = family.name;
  option.value = index;
  select.appendChild(option);
});
};

SelectView.prototype.setUpListenerForUserChoice = function () {
  const select = document.querySelector('select#instrument-families')

  select.addEventListener('change', (event) => {
    const index = event.target.value;
    PubSub.publish('SelectViewUserChoice', index);
  })
};

module.exports = SelectView;
