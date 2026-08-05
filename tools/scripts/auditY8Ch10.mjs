import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// For simplicity, I'll generate the precise data for all 30 questions.
const customData = {
  'y8-10a-q1a': {
    options: [{ text: '\\(\\$7.00\\)', imageUrl: '' }, { text: '\\(\\$8.40\\)', imageUrl: '' }, { text: '\\(\\$8.60\\)', imageUrl: '' }, { text: '\\(\\$10.20\\)', imageUrl: '' }],
    a: 1, // $8.40
    steps: [
      { explanation: "Find the cost of 1 kg of potatoes by dividing the total cost by the weight.", workingOut: "\\(\\frac{\\$4.80}{4\\text{ kg}} = \\$1.20\\text{ per kg}\\)", graphData: null },
      { explanation: "Multiply the unit cost by the new quantity (7 kg).", workingOut: "\\(\\$1.20 \\times 7\\)", graphData: null },
      { explanation: "Calculate the final cost.", workingOut: "\\(\\$8.40\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The cost of 7 kg is } \\$8.40.\\)", graphData: null }
    ]
  },
  'y8-10a-q1b': {
    options: [{ text: '\\(\\$28\\)', imageUrl: '' }, { text: '\\(\\$30\\)', imageUrl: '' }, { text: '\\(\\$32\\)', imageUrl: '' }, { text: '\\(\\$36\\)', imageUrl: '' }],
    a: 2, // 32
    steps: [
      { explanation: "Find the cost of 1 pen by dividing the total cost by the quantity.", workingOut: "\\(\\frac{\\$24}{6} = \\$4\\text{ per pen}\\)", graphData: null },
      { explanation: "Multiply the unit cost by the new quantity (8 pens).", workingOut: "\\(\\$4 \\times 8\\)", graphData: null },
      { explanation: "Calculate the final cost.", workingOut: "\\(\\$32\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The cost of 8 pens is } \\$32.\\)", graphData: null }
    ]
  },
  'y8-10a-q1c': {
    options: [{ text: '\\(\\$35\\)', imageUrl: '' }, { text: '\\(\\$38\\)', imageUrl: '' }, { text: '\\(\\$40\\)', imageUrl: '' }, { text: '\\(\\$42\\)', imageUrl: '' }],
    a: 2, // 40
    steps: [
      { explanation: "Find the cost of 1 tennis ball by dividing the total cost by the quantity.", workingOut: "\\(\\frac{\\$15}{6} = \\$2.50\\text{ per ball}\\)", graphData: null },
      { explanation: "Multiply the unit cost by the new quantity (16 balls).", workingOut: "\\(\\$2.50 \\times 16\\)", graphData: null },
      { explanation: "Calculate the final cost.", workingOut: "\\(\\$40\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The cost of 16 tennis balls is } \\$40.\\)", graphData: null }
    ]
  },
  'y8-10a-q1d': {
    options: [{ text: '\\(700\\text{ g}\\)', imageUrl: '' }, { text: '\\(800\\text{ g}\\)', imageUrl: '' }, { text: '\\(850\\text{ g}\\)', imageUrl: '' }, { text: '\\(900\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 800g
    steps: [
      { explanation: "Find the weight of 1 billiard ball by dividing the total weight by the quantity.", workingOut: "\\(\\frac{1280\\text{ g}}{8} = 160\\text{ g per ball}\\)", graphData: null },
      { explanation: "Multiply the unit weight by the new quantity (5 balls).", workingOut: "\\(160 \\times 5\\)", graphData: null },
      { explanation: "Calculate the final weight.", workingOut: "\\(800\\text{ g}\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{5 billiard balls weigh } 800\\text{ g}.\\)", graphData: null }
    ]
  },
  'y8-10a-q1e': {
    options: [{ text: '\\(950\\text{ cm}\\)', imageUrl: '' }, { text: '\\(990\\text{ cm}\\)', imageUrl: '' }, { text: '\\(1050\\text{ cm}\\)', imageUrl: '' }, { text: '\\(1100\\text{ cm}\\)', imageUrl: '' }],
    a: 1, // 990cm
    steps: [
      { explanation: "Find the length of 1 seat by dividing the total length by the number of seats.", workingOut: "\\(\\frac{675\\text{ cm}}{15} = 45\\text{ cm per seat}\\)", graphData: null },
      { explanation: "Multiply the unit length by the new quantity (22 seats).", workingOut: "\\(45 \\times 22\\)", graphData: null },
      { explanation: "Calculate the final length.", workingOut: "\\(990\\text{ cm}\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The row of 22 seats will be } 990\\text{ cm long}.\\)", graphData: null }
    ]
  },
  'y8-10a-q1f': {
    options: [{ text: '\\(42\\text{ g}\\)', imageUrl: '' }, { text: '\\(48\\text{ g}\\)', imageUrl: '' }, { text: '\\(52\\text{ g}\\)', imageUrl: '' }, { text: '\\(54\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 48g
    steps: [
      { explanation: "Find the sugar content of 1 cookie by dividing the sugar per serve by the cookies per serve.", workingOut: "\\(\\frac{18\\text{ g}}{3\\text{ cookies}} = 6\\text{ g per cookie}\\)", graphData: null },
      { explanation: "Multiply the unit sugar content by the new quantity (8 cookies).", workingOut: "\\(6 \\times 8\\)", graphData: null },
      { explanation: "Calculate the final sugar amount.", workingOut: "\\(48\\text{ g}\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{8 cookies contain } 48\\text{ g of sugar}.\\)", graphData: null }
    ]
  },
  'y8-10a-q2a': {
    options: [{ text: '\\(24\\)', imageUrl: '' }, { text: '\\(28\\)', imageUrl: '' }, { text: '\\(30\\)', imageUrl: '' }, { text: '\\(32\\)', imageUrl: '' }],
    a: 2, // 30
    steps: [
      { explanation: "Find the cost of 1 banana.", workingOut: "\\(\\frac{\\$3.60}{8} = \\$0.45\\text{ per banana}\\)", graphData: null },
      { explanation: "Divide the new total money by the cost of 1 banana to find the quantity.", workingOut: "\\(\\frac{\\$13.50}{\\$0.45}\\)", graphData: null },
      { explanation: "Calculate the quantity.", workingOut: "\\(30\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{You can buy } 30\\text{ bananas}.\\)", graphData: null }
    ]
  },
  'y8-10a-q2b': {
    options: [{ text: '\\(5600\\)', imageUrl: '' }, { text: '\\(5800\\)', imageUrl: '' }, { text: '\\(6000\\)', imageUrl: '' }, { text: '\\(6400\\)', imageUrl: '' }],
    a: 2, // 6000
    steps: [
      { explanation: "Find the cost of 1 share.", workingOut: "\\(\\frac{\\$960}{800} = \\$1.20\\text{ per share}\\)", graphData: null },
      { explanation: "Divide the new total money by the cost of 1 share.", workingOut: "\\(\\frac{\\$7200}{\\$1.20}\\)", graphData: null },
      { explanation: "Calculate the quantity.", workingOut: "\\(6000\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{You can buy } 6000\\text{ shares}.\\)", graphData: null }
    ]
  },
  'y8-10a-q2c': {
    options: [{ text: '\\(45\\)', imageUrl: '' }, { text: '\\(48\\)', imageUrl: '' }, { text: '\\(50\\)', imageUrl: '' }, { text: '\\(52\\)', imageUrl: '' }],
    a: 2, // 50
    steps: [
      { explanation: "Find the cost of 1 notebook (a dozen is 12).", workingOut: "\\(\\frac{\\$6}{12} = \\$0.50\\text{ per notebook}\\)", graphData: null },
      { explanation: "Divide the new total money by the cost of 1 notebook.", workingOut: "\\(\\frac{\\$25}{\\$0.50}\\)", graphData: null },
      { explanation: "Calculate the quantity.", workingOut: "\\(50\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{You can buy } 50\\text{ notebooks}.\\)", graphData: null }
    ]
  },
  'y8-10a-q2d': {
    options: [{ text: '\\(15\\)', imageUrl: '' }, { text: '\\(16\\)', imageUrl: '' }, { text: '\\(17\\)', imageUrl: '' }, { text: '\\(18\\)', imageUrl: '' }],
    a: 2, // 17
    steps: [
      { explanation: "Find the number of people 1 lettuce feeds.", workingOut: "\\(\\frac{60}{5} = 12\\text{ people per lettuce}\\)", graphData: null },
      { explanation: "Divide the new number of people by the rate.", workingOut: "\\(\\frac{204}{12}\\)", graphData: null },
      { explanation: "Calculate the quantity.", workingOut: "\\(17\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{He needs } 17\\text{ lettuces}.\\)", graphData: null }
    ]
  },
  'y8-10a-q2e': {
    options: [{ text: '\\(11\\)', imageUrl: '' }, { text: '\\(12\\)', imageUrl: '' }, { text: '\\(13\\)', imageUrl: '' }, { text: '\\(14\\)', imageUrl: '' }],
    a: 2, // 13
    steps: [
      { explanation: "Find the number of words on 1 page.", workingOut: "\\(\\frac{1050}{3} = 350\\text{ words per page}\\)", graphData: null },
      { explanation: "Divide the target word count by words per page.", workingOut: "\\(\\frac{4550}{350}\\)", graphData: null },
      { explanation: "Calculate the number of pages.", workingOut: "\\(13\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The essay needs } 13\\text{ pages}.\\)", graphData: null }
    ]
  },
  'y8-10a-q3a': {
    options: [{ text: '\\(9\\text{ km}\\)', imageUrl: '' }, { text: '\\(11\\text{ km}\\)', imageUrl: '' }, { text: '\\(14\\text{ km}\\)', imageUrl: '' }, { text: '\\(16\\text{ km}\\)', imageUrl: '' }],
    a: 1, // 11
    steps: [
      { explanation: "Find the actual distance for 1 cm on the map.", workingOut: "\\(\\frac{3\\text{ km}}{6\\text{ cm}} = 0.5\\text{ km per cm}\\)", graphData: null },
      { explanation: "Multiply the unit rate by the new map distance.", workingOut: "\\(0.5 \\times 22\\)", graphData: null },
      { explanation: "Calculate the actual distance.", workingOut: "\\(11\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The suburbs are } 11\\text{ km apart}.\\)", graphData: null }
    ]
  },
  'y8-10a-q3b': {
    options: [{ text: '\\(12\\text{ cm}\\)', imageUrl: '' }, { text: '\\(15\\text{ cm}\\)', imageUrl: '' }, { text: '\\(18\\text{ cm}\\)', imageUrl: '' }, { text: '\\(20\\text{ cm}\\)', imageUrl: '' }],
    a: 1, // 15
    steps: [
      { explanation: "Find the map distance for 1 km.", workingOut: "\\(\\frac{8\\text{ cm}}{40\\text{ km}} = 0.2\\text{ cm per km}\\)", graphData: null },
      { explanation: "Multiply by the new actual distance.", workingOut: "\\(0.2 \\times 75\\)", graphData: null },
      { explanation: "Calculate the map distance.", workingOut: "\\(15\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The map distance is } 15\\text{ cm}.\\)", graphData: null }
    ]
  },
  'y8-10a-q3c': {
    options: [{ text: '\\(1.0\\text{ m}\\)', imageUrl: '' }, { text: '\\(1.2\\text{ m}\\)', imageUrl: '' }, { text: '\\(1.4\\text{ m}\\)', imageUrl: '' }, { text: '\\(1.5\\text{ m}\\)', imageUrl: '' }],
    a: 1, // 1.2
    steps: [
      { explanation: "Find the ratio of height to shadow length.", workingOut: "\\(\\frac{1.6\\text{ m}}{2.4\\text{ m}} = \\frac{2}{3}\\)", graphData: null },
      { explanation: "Multiply the ratio by the new shadow length.", workingOut: "\\(\\frac{2}{3} \\times 1.8\\)", graphData: null },
      { explanation: "Calculate the new height.", workingOut: "\\(1.2\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The person is } 1.2\\text{ m tall}.\\)", graphData: null }
    ]
  },
  'y8-10a-q3d': {
    options: [{ text: '\\(10.8\\text{ m}\\)', imageUrl: '' }, { text: '\\(11.6\\text{ m}\\)', imageUrl: '' }, { text: '\\(12.4\\text{ m}\\)', imageUrl: '' }, { text: '\\(13.2\\text{ m}\\)', imageUrl: '' }],
    a: 1, // 11.6
    steps: [
      { explanation: "Find the ratio of shadow length to height.", workingOut: "\\(\\frac{14.5\\text{ m}}{10\\text{ m}} = 1.45\\)", graphData: null },
      { explanation: "Multiply the ratio by the new height.", workingOut: "\\(1.45 \\times 8\\)", graphData: null },
      { explanation: "Calculate the new shadow length.", workingOut: "\\(11.6\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{The shadow is } 11.6\\text{ m long}.\\)", graphData: null }
    ]
  },
  'y8-10a-q3e': {
    options: [{ text: '\\(1025\\text{ g}\\)', imageUrl: '' }, { text: '\\(1125\\text{ g}\\)', imageUrl: '' }, { text: '\\(1225\\text{ g}\\)', imageUrl: '' }, { text: '\\(1325\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 1125
    steps: [
      { explanation: "Find the amount of flour per egg.", workingOut: "\\(\\frac{450\\text{ g}}{6} = 75\\text{ g per egg}\\)", graphData: null },
      { explanation: "Multiply by the new number of eggs.", workingOut: "\\(75 \\times 15\\)", graphData: null },
      { explanation: "Calculate the new amount of flour.", workingOut: "\\(1125\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{He should use } 1125\\text{ g of flour}.\\)", graphData: null }
    ]
  },
  'y8-10a-q5a': {
    options: [{ text: '\\(8\\text{ kg}\\)', imageUrl: '' }, { text: '\\(10\\text{ kg}\\)', imageUrl: '' }, { text: '\\(12\\text{ kg}\\)', imageUrl: '' }, { text: '\\(14\\text{ kg}\\)', imageUrl: '' }],
    a: 1, // 10
    steps: [
      { explanation: "Find the amount of tomatoes per dollar.", workingOut: "\\(\\frac{4\\text{ kg}}{\\$14} = \\frac{2}{7}\\text{ kg per dollar}\\)", graphData: null },
      { explanation: "Multiply by the new amount of money.", workingOut: "\\(\\frac{2}{7} \\times 35\\)", graphData: null },
      { explanation: "Calculate the quantity.", workingOut: "\\(10\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{You can buy } 10\\text{ kg of tomatoes}.\\)", graphData: null }
    ]
  },
  'y8-10a-q5b': {
    options: [{ text: '\\(\\$7.20\\)', imageUrl: '' }, { text: '\\(\\$7.40\\)', imageUrl: '' }, { text: '\\(\\$7.60\\)', imageUrl: '' }, { text: '\\(\\$7.80\\)', imageUrl: '' }],
    a: 2, // 7.60
    steps: [
      { explanation: "Find the cost per orange.", workingOut: "\\(\\frac{\\$4.80}{12} = \\$0.40\\text{ per orange}\\)", graphData: null },
      { explanation: "Multiply by the new quantity.", workingOut: "\\(\\$0.40 \\times 19\\)", graphData: null },
      { explanation: "Calculate the total cost.", workingOut: "\\(\\$7.60\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{19 oranges cost } \\$7.60.\\)", graphData: null }
    ]
  },
  'y8-10a-q5c': {
    options: [{ text: '\\(420\\text{ g}\\)', imageUrl: '' }, { text: '\\(480\\text{ g}\\)', imageUrl: '' }, { text: '\\(520\\text{ g}\\)', imageUrl: '' }, { text: '\\(540\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 480
    steps: [
      { explanation: "Find the ratio of fruit to tinned peaches.", workingOut: "\\(\\frac{270}{450} = 0.6\\)", graphData: null },
      { explanation: "Multiply the ratio by the new total weight.", workingOut: "\\(0.6 \\times 800\\)", graphData: null },
      { explanation: "Calculate the fruit content.", workingOut: "\\(480\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{It will contain } 480\\text{ g of fruit}.\\)", graphData: null }
    ]
  },
  'y8-10a-q5d': {
    options: [{ text: '\\(200\\text{ g}\\)', imageUrl: '' }, { text: '\\(240\\text{ g}\\)', imageUrl: '' }, { text: '\\(260\\text{ g}\\)', imageUrl: '' }, { text: '\\(280\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 240
    steps: [
      { explanation: "Find the sugar content per mL.", workingOut: "\\(\\frac{128\\text{ g}}{800\\text{ mL}} = 0.16\\text{ g/mL}\\)", graphData: null },
      { explanation: "Multiply by the new volume (1.5 litres = 1500 mL).", workingOut: "\\(0.16 \\times 1500\\)", graphData: null },
      { explanation: "Calculate the total sugar.", workingOut: "\\(240\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{1.5 L contains } 240\\text{ g of sugar}.\\)", graphData: null }
    ]
  },
  'y8-10a-q6a': {
    options: [{ text: '\\(240\\)', imageUrl: '' }, { text: '\\(250\\)', imageUrl: '' }, { text: '\\(270\\)', imageUrl: '' }, { text: '\\(290\\)', imageUrl: '' }],
    a: 2, // 270
    steps: [
      { explanation: "Find one-fifth of the amount.", workingOut: "\\(\\frac{360}{4} = 90\\)", graphData: null },
      { explanation: "Multiply by 3 to find three-fifths.", workingOut: "\\(90 \\times 3\\)", graphData: null },
      { explanation: "Calculate the result.", workingOut: "\\(270\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{Three-fifths of the amount is } 270.\\)", graphData: null }
    ]
  },
  'y8-10a-q6b': {
    options: [{ text: '\\(10\\)', imageUrl: '' }, { text: '\\(11\\)', imageUrl: '' }, { text: '\\(12\\)', imageUrl: '' }, { text: '\\(14\\)', imageUrl: '' }],
    a: 2, // 12
    steps: [
      { explanation: "Find the number of panels painted in one-quarter of an hour.", workingOut: "\\(\\frac{18}{3} = 6\\text{ panels}\\)", graphData: null },
      { explanation: "Multiply by 2 for half an hour (two-quarters).", workingOut: "\\(6 \\times 2\\)", graphData: null },
      { explanation: "Calculate the total panels.", workingOut: "\\(12\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{He can paint } 12\\text{ panels}.\\)", graphData: null }
    ]
  },
  'y8-10a-q6c': {
    options: [{ text: '\\(24\\)', imageUrl: '' }, { text: '\\(25\\)', imageUrl: '' }, { text: '\\(27\\)', imageUrl: '' }, { text: '\\(30\\)', imageUrl: '' }],
    a: 2, // 27
    steps: [
      { explanation: "Find how many bags one-fifteenth of the group clears (multiply by 5, divide by 3). Or find the total group's capacity.", workingOut: "\\(\\text{Total group} = 15 \\times 3 = 45\\text{ bags}\\)", graphData: null },
      { explanation: "Calculate three-fifths of the total capacity.", workingOut: "\\(\\frac{3}{5} \\times 45\\)", graphData: null },
      { explanation: "Perform the calculation.", workingOut: "\\(3 \\times 9 = 27\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{They could clear } 27\\text{ bags}.\\)", graphData: null }
    ]
  },
  'y8-10a-q6d': {
    options: [{ text: '\\(250\\text{ g}\\)', imageUrl: '' }, { text: '\\(300\\text{ g}\\)', imageUrl: '' }, { text: '\\(350\\text{ g}\\)', imageUrl: '' }, { text: '\\(400\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 300
    steps: [
      { explanation: "Find the multiplier for the fat content.", workingOut: "\\(\\frac{4.5\\text{ g}}{1.5\\text{ g}} = 3\\)", graphData: null },
      { explanation: "Multiply the base amount of cereal by this multiplier.", workingOut: "\\(100\\text{ g} \\times 3\\)", graphData: null },
      { explanation: "Calculate the total cereal.", workingOut: "\\(300\\text{ g}\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{It takes } 300\\text{ g of cereal}.\\)", graphData: null }
    ]
  },
  'y8-10a-q6e': {
    options: [{ text: '\\(13.5\\text{ mL}\\)', imageUrl: '' }, { text: '\\(15.3\\text{ mL}\\)', imageUrl: '' }, { text: '\\(16.5\\text{ mL}\\)', imageUrl: '' }, { text: '\\(18.2\\text{ mL}\\)', imageUrl: '' }],
    a: 1, // 15.3
    steps: [
      { explanation: "Identify the dosage per kilogram.", workingOut: "\\(\\text{Dosage} = 4.5\\text{ mL/kg}\\)", graphData: null },
      { explanation: "Multiply the dosage by the puppy's weight.", workingOut: "\\(4.5 \\times 3.4\\)", graphData: null },
      { explanation: "Perform the multiplication.", workingOut: "\\(15.3\\)", graphData: null },
      { explanation: "State the final answer with units.", workingOut: "\\(\\text{Give the puppy } 15.3\\text{ mL}.\\)", graphData: null }
    ]
  },
  'y8-10a-q7a': {
    options: [{ text: '\\(650\\text{ g}\\)', imageUrl: '' }, { text: '\\(500\\text{ g}\\)', imageUrl: '' }],
    a: 1, // 500g
    steps: [
      { explanation: "Calculate the cost per 100 g for the 500 g tin.", workingOut: "\\(\\frac{\\$6.50}{5} = \\$1.30\\text{ per } 100\\text{ g}\\)", graphData: null },
      { explanation: "Calculate the cost per 100 g for the 650 g tin.", workingOut: "\\(\\frac{\\$8.19}{6.5} = \\$1.26\\text{ per } 100\\text{ g}\\)", graphData: null },
      { explanation: "Compare the unit prices.", workingOut: "\\(\\$1.26 < \\$1.30\\)", graphData: null },
      { explanation: "State the better buy.", workingOut: "\\(\\text{The } 650\\text{ g tin is the better buy. Wait! The answer in the seed is 1, which implies the second option (500g)? Let's re-read.}\\)", graphData: null }
    ]
  },
  'y8-10a-q7b': {
    options: [{ text: '\\(600\\text{ g}\\)', imageUrl: '' }, { text: '\\(400\\text{ g}\\)', imageUrl: '' }],
    a: 0, // 600g
    steps: [
      { explanation: "Calculate the cost per 100 g for the 600 g grapes.", workingOut: "\\(\\frac{\\$5.40}{6} = \\$0.90\\text{ per } 100\\text{ g}\\)", graphData: null },
      { explanation: "Calculate the cost per 100 g for the 400 g grapes.", workingOut: "\\(\\frac{\\$3.80}{4} = \\$0.95\\text{ per } 100\\text{ g}\\)", graphData: null },
      { explanation: "Compare the unit prices.", workingOut: "\\(\\$0.90 < \\$0.95\\)", graphData: null },
      { explanation: "State the better buy.", workingOut: "\\(\\text{The } 600\\text{ g grapes are the better buy.}\\)", graphData: null }
    ]
  },
  'y8-10a-q7c': {
    options: [{ text: '\\(150\\text{ g}\\)', imageUrl: '' }, { text: '\\(200\\text{ g}\\)', imageUrl: '' }],
    a: 0, // 150g
    steps: [
      { explanation: "Calculate the cost per 50 g for the 150 g toothpaste.", workingOut: "\\(\\frac{\\$1.80}{3} = \\$0.60\\text{ per } 50\\text{ g}\\)", graphData: null },
      { explanation: "Calculate the cost per 50 g for the 200 g toothpaste.", workingOut: "\\(\\frac{\\$2.60}{4} = \\$0.65\\text{ per } 50\\text{ g}\\)", graphData: null },
      { explanation: "Compare the unit prices.", workingOut: "\\(\\$0.60 < \\$0.65\\)", graphData: null },
      { explanation: "State the better buy.", workingOut: "\\(\\text{The } 150\\text{ g toothpaste is the better buy.}\\)", graphData: null }
    ]
  },
  'y8-10a-q8': {
    options: [], 
    a: null, // manual
    steps: [
      { explanation: "Calculate the cost of 500 g at the special rate.", workingOut: "\\(\\frac{\\$4.20}{350} \\times 500 = \\frac{\\$4.20}{7} \\times 10 = \\$6.00\\)", graphData: null },
      { explanation: "Compare with the actual 500 g box.", workingOut: "\\(\\$5.50 < \\$6.00\\)", graphData: null },
      { explanation: "Calculate the difference in price.", workingOut: "\\(\\$6.00 - \\$5.50 = \\$0.50\\)", graphData: null },
      { explanation: "State the final conclusion.", workingOut: "\\(\\text{The } 500\\text{ g box is cheaper by } \\$0.50.\\)", graphData: null }
    ]
  },
  'y8-10a-q9': {
    options: [{ text: '\\(28\\text{ days}\\)', imageUrl: '' }, { text: '\\(30\\text{ days}\\)', imageUrl: '' }, { text: '\\(32\\text{ days}\\)', imageUrl: '' }, { text: '\\(36\\text{ days}\\)', imageUrl: '' }],
    a: 1, // 30 days
    steps: [
      { explanation: "Find the time taken for 1/8 of the journey.", workingOut: "\\(\\frac{18\\text{ days}}{3} = 6\\text{ days}\\)", graphData: null },
      { explanation: "Determine the remaining fraction of the journey.", workingOut: "\\(1 - \\frac{3}{8} = \\frac{5}{8}\\)", graphData: null },
      { explanation: "Multiply the unit time by the remaining fraction parts.", workingOut: "\\(6 \\times 5\\)", graphData: null },
      { explanation: "State the final answer.", workingOut: "\\(\\text{It will take } 30\\text{ more days}.\\)", graphData: null }
    ]
  }
};

// Fix q7a option A value (650g vs 500g). The original answer was 1 which implies 650g. Wait.
// Original question: Which is the better buy: 500g for $6.50, or 650g for $8.19?
// 6.50 / 5 = 1.30. 8.19 / 6.5 = 1.26. So 650g is better.
// In my code: a: 0 (650g). Wait, if I set a: 0, it should be 650g.

customData['y8-10a-q7a'].a = 0; // The 650g option
customData['y8-10a-q7a'].steps[3].workingOut = "\\(\\text{The } 650\\text{ g tin is the better buy.}\\)";


async function fix() {
  const filepath = path.resolve('src/constants/seedYear8Ch10Questions.js');
  const { Y8_CH10A_QUESTIONS } = await import('../../src/constants/seedYear8Ch10Questions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y8_CH10A_QUESTIONS) {
    if (customData[q.id]) {
      const cd = customData[q.id];
      q.solutionSteps = cd.steps;
      if (q.type !== 'teacher_review') {
        q.isManual = false;
        q.options = cd.options;
        q.a = cd.a;
        if (q.opts) delete q.opts;
      }
      
      const updateData = {
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      };
      if (q.type !== 'teacher_review') {
        updateData.isManual = false;
        updateData.options = q.options;
        updateData.a = q.a;
        updateData.opts = FieldValue.delete();
      }

      await db.collection('questions').doc(q.id).update(updateData);
      count++;
    }
  }

  const fileContent = "export const Y8_CH10A_QUESTIONS = " + JSON.stringify(Y8_CH10A_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully updated ${count} custom solutionSteps and options for Y8-10A locally and pushed to Firestore.`);
}
fix().catch(console.error);
