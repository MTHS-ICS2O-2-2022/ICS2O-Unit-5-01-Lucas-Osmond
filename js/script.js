// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: april 2023
// This file contains the JS functions for index.html

'use strict'

/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(document.getElementById('guessed-number').value)

  // process
  //pass

  // output
  document.getElementById('answer').innerHTML = numberGuessed
}
