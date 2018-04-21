// Файл setup.js
'use strict';

var userDialog = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

userDialog.classList.remove('hidden');

var wizardFirstName = ['Иван Хуан','Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var wizardSecondName = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var varietyCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var varietyEyeColor = ['black','red','blue','yellow','green'];

var wizardsArrayLength = 4;
var wizardsFragment = document.createDocumentFragment();

 var getRandomWizard = function (arr) {
  var randIndex = Math.ceil(Math.random() * arr.length) - 1;
  return arr[randIndex];
};

var createOneElement = function () {
  var element = {
    name: getRandomWizard(wizardFirstName) + ' ' + getRandomWizard(wizardSecondName),
    coatColor: getRandomWizard(varietyCoatColor),
    eyesColor: getRandomWizard(varietyEyeColor),
  };
  return element;
};

var createArrayElements = function (number) {
  var wizardsArray = [];
  for (var i = 0; i < number; i++) {
    wizardsArray.push(createOneElement());
  }
  return wizardsArray;
};

var createWizard = function (wizardsArray) {
  var wizardTemplate = similarWizardTemplate.cloneNode(true);
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizardsArray.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizardsArray.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizardsArray.eyesColor;

  return wizardTemplate;
};

var createWizards = function (data) {
  data.forEach(function (wizard) {
    wizardsFragment.appendChild(createWizard(wizard));
  });

  setupSimilarList.appendChild(wizardsFragment);
};

var inputData = createArrayElements(wizardsArrayLength);
createWizards(inputData);

setupSimilar.classList.remove('hidden');
