/*
 * Copyright (C) 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * This file represents a TicTacToe board object, with all needed drawing and
 * state update functions.
 */

/**
 * Creates an empty board object with no location
 * @param {CanvasRenderingContext2D} context the 2D context of the canvas that
 *     the board is drawn on.
 * @constructor
 */


var card_files = [
    "10_of_clubs.png",
    "10_of_diamonds.png",
    "10_of_hearts.png",
    "10_of_spades.png",
    "2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
    "3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
    "6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
    "7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "8_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_hearts.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_diamonds.png",
    "9_of_hearts.png",
    "9_of_spades.png",
    "ace_of_clubs.png",
    "ace_of_diamonds.png",
    "ace_of_hearts.png",
    "ace_of_spades2.png",
    "jack_of_clubs2.png",
    "jack_of_diamonds2.png",
    "jack_of_hearts2.png",
    "jack_of_spades2.png",
    "king_of_clubs2.png",
    "king_of_diamonds2.png",
    "king_of_hearts2.png",
    "king_of_spades2.png",
    "queen_of_clubs2.png",
    "queen_of_diamonds2.png",
    "queen_of_hearts2.png",
    "queen_of_spades2.png"];

function board(context) {
  this.mContext = context;

  this.setup = function () {
    console.log("SETTING UP BOARD");

    var svg = d3.select('svg');
    var avatar_g = svg.append('g');

    var x_margin = 150;
    var y_margin = 150;

    var width = $('svg').width();
    var height = $('svg').height();

    var x_radius = (width - 2*x_margin) / 2;
    var y_radius = (height - 2*y_margin) / 2;
    
    var avatars = [
      "bear.png",
      "beaver.png",
      "bee.png",
      "chicken.png",
      "cow.png",
      "dog.png",
      "elephant.png",
      "giraffe.png",
      "goat.png",
      "hippo.png",
      "owl.png",
      "penguin.png",
      "pig.png",
      "sheep.png",
      "turkey.png",
      "zebra.png"
    ];

    
    avatar_g.selectAll('.avatar')
      .data(chance.shuffle(avatars))
      .enter()
        .append('svg:image')
        .attr('class', 'avatar')
        .attr('x', function (avatar, index) {
          return (x_radius * Math.cos((index) / avatars.length * 2 * Math.PI)) + width/2 - x_margin/4;
        })
        .attr('y', function (avatar, index) {
          return (y_radius * Math.sin((index) / avatars.length * 2 * Math.PI)) + height/2 - y_margin/4;
        })
        .attr('width', 50)
        .attr('height', 50)
        .attr('xlink:href', function (avatar) {
          return 'images/' + avatar;
        });

    var spoon_g = svg.append("g")
        .attr('class', 'spoon')
        .attr("transform", "translate(" + (width / 2 - 25/2) + "," + (height / 2 - 25/2) + ")")
        .each(caroom)
    
    var spoon = spoon_g.append("svg:image")
        // .attr('x', width/2)
        // .attr('y', height/2)
        .attr('width', 30)
        .attr('height', 30)
        .attr('xlink:href', 'images/spoon.png');

    spoon.append('animateTransform')
        .attr('attributeName', "transform")
        .attr('type', "rotate")
        .attr('from', "0 15 15")
        .attr('to', "360 15 15")
        .attr('dur', "2s")
        .attr('repeatCount', "indefinite");

    function caroom () {
      d3.select(this).transition()
      .attr('transform', 'translate(' + random_x() + ',' + random_y() + ')')
      .duration(3000)
      .each('end', caroom);
    }

    function random_x () {
      return chance.integer({min: 0, max: width});
    }

    function random_y () {
      return chance.integer({min: 0, max: height});
    }

  }

}