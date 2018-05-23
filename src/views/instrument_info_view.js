const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(){

}

InfoView.prototype.receiveChosenInstrument = function () {
  PubSub.subscribe('InstrumentFamiliesChosenInstrument', (event) => {
    const data = event.detail;
    this.displayInstrumentInformation(data);
  })
};

InfoView.prototype.displayInstrumentInformation = function (data) {
  const div = document.querySelector('div#family-instrument-info');
  const paragraph = document.createElement('p');
  paragraph.textContent = data.description;
  div.appendChild(paragraph);
  const ul = document.createElement('ul');
  data.instruments.forEach((instrument) => {
    const li = document.createElement('li');
    li.textContent = instrument;
    ul.appendChild(li);
})
div.appendChild(ul);
};

module.exports = InfoView;
