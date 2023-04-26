// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: april 2023
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * This function updates a slider value.
 */
function updateSliderValue () {
  // this function updates the slider value
  document.getElementById("sliderValue").innerHTML = valueFromSlider

  //process
  if (valueFromSlider == randomNumber) {
    // output
    document.getElementById('answer').innerHTML = 
    "the answer was," + randomNumber + "!" + 'You are correct!'
  }

  // block of code to be executed if the condition1 is true
  if (valueFromSlider < randomNumber) {
    // output
    document.getElementById('answer').innerHTML = 
    "the answer was," + randomNumber + "!" + 'You are too low!'
  }
}
