'use strict';

const SELECTORS = {
  inputField: '.input__field',
  toggle: '.toggle',
  body: 'body',
  advOptions: '.adv__options__section',
  lang_switch_mobile: '.mobile__lang__switch',
  lang_switch_normal: '.normal__lang__switch',
};

const TOGGLE_TYPES = {
  DARKMODE: 'darkmode',
  EXTEND_INPUT: 'extend-input',
  ADV_OPTIONS: 'adv__options',
};

const inputFieldEl = document.querySelector(SELECTORS.inputField);
const advOptionsContainer = document.querySelector(SELECTORS.advOptions);
const toggleBtn = document.querySelectorAll(SELECTORS.toggle);
const langSwitchMobile = document.querySelector(SELECTORS.lang_switch_mobile);
const langSwitchNormal = document.querySelector(SELECTORS.lang_switch_normal);

const extendInputEl = document.querySelector(`[data-toggle="${TOGGLE_TYPES.EXTEND_INPUT}"]`);
const advOptionsEl = document.querySelector(`[data-toggle="${TOGGLE_TYPES.ADV_OPTIONS}"]`);
const darkmodeBody = document.querySelector(SELECTORS.body);
