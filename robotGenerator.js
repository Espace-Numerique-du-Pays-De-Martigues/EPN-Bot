goog.provide('Blockly.Arduino.Robotdulab');
goog.require('Blockly.Arduino');


var setup_epnbot = "EpnBot.begin();\n";

var define_epnbot = '#include <Servo.h>\n'+
  '//#include <Adafruit_NeoPixel.h>\n'+
  '#include "EPNBot.h"\n'+
  '#define TRIGGER_PIN 12 // broche trig du capteur US HC-SR04\n'+
  '#define ECHO_PIN 4 // broche echo du capteur US HC-SR04\n'+
  '#define ROUE_DROITE_PIN 11\n'+
  '#define ROUE_GAUCHE_PIN 10\n'+
  '#define ANNEAU_LED_PIN 6\n'+
  //'#define GRAYSCALE_SENSOR 0 // broche du capteur suiveur de ligne\n\n'+
  '#define RELAI_ALIM_MOTEUR 2 // broche du relai alimentation des moteurs\n'+
  '#define INTER_BOT 13 // interrupteur robot\n'+
  
  'int etat_robot=0;

  'EPNBot EpnBot(TRIGGER_PIN, ECHO_PIN, ROUE_DROITE_PIN, ROUE_GAUCHE_PIN, ANNEAU_LED_PIN, GRAYSCALE_SENSOR, RELAI_ALIM_MOTEUR);\n';
  //'RobotDuLAB robotDuLAB(TRIGGER_PIN, ECHO_PIN, ROUE_DROITE_PIN, ROUE_GAUCHE_PIN, ANNEAU_LED_PIN);\n';

/*Blockly.Arduino ['Avancer'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot; 
  var dropdown_option = block.getFieldValue('Vitesse');
  var value_option = Blockly.Arduino.valueToCode(block, 'Vitesse', Blockly.Arduino.ORDER_ATOMIC);
  var code  = "robotDuLAB.Avancer("+dropdown_option+");\n";
  return  code;
};*/

Blockly.Arduino ['Avancer'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.Avancer();\n";
  return  code;
};

Blockly.Arduino ['Reculer'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.Reculer();\n";
  return  code;
};

Blockly.Arduino ['Arreter'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.Arreter();\n";
  return  code;
};

Blockly.Arduino ['TournerAGauche'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.TournerAGauche();\n";
  return  code;
};

Blockly.Arduino ['TournerADroite'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.TournerADroite();\n";
  return  code;
};

Blockly.Arduino ['Attendre'] = function (block)  {
  var time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  var code  ="delay("+time+");\n";
  return  code;
};

Blockly.Arduino ['AnimerAnneauLed'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  
  var couleur = Blockly.Arduino.valueToCode(block, 'Couleur', Blockly.Arduino.ORDER_ATOMIC)||'VERT';
  var animation = Blockly.Arduino.valueToCode(block, 'Animation', Blockly.Arduino.ORDER_ATOMIC)||'COULEUR';
  var pin = Blockly.Arduino.valueToCode(block, 'Pin_Led_avant', Blockly.Arduino.ORDER_ATOMIC);

  var code  ="robotDuLAB.AnimerAnneauLed("+animation+","+couleur+","+pin+");\n";
  return  code;
};

Blockly.Arduino ['Distance'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var code  ="robotDuLAB.getDistanceObstacle();";
  return [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['Animation'] = function (block)  {
  var dropdown_option = block.getFieldValue('Animation');
  var value_option = Blockly.Arduino.valueToCode(block, 'Animation', Blockly.Arduino.ORDER_ATOMIC);
  var code  = dropdown_option;
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['VERT'] = function (block)  {
  var code  ="VERT";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['ORANGE'] = function (block)  {
  var code  ="ORANGE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['ROUGE'] = function (block)  {
  var code  ="ROUGE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['MAGENTA'] = function (block)  {
  var code  ="MAGENTA";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['BLEU'] = function (block)  {
  var code  ="BLEU";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['TURQUOISE'] = function (block)  {

  var code  ="TURQUOISE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['VIOLET'] = function (block)  {
  var code  ="VIOLET";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['JAUNE'] = function (block) {
  var code  ="JAUNE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['BLANC'] = function (block) {
  var code  ="BLANC";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['ROSE'] = function (block) {
  var code  ="ROSE";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['GRIS'] = function (block) {
  var code  ="GRIS";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['NOIR'] = function (block) {
  var code  ="NOIR";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['loop_dist_inf'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var value_while = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'while (robotDuLAB.getDistanceObstacle() < ' + value_while +')\n{\n'+ statements_do +'}\n';
  return code;
};

Blockly.Arduino['loop_dist_sup'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var value_while = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC);
  var statements_do = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'while (robotDuLAB.getDistanceObstacle() > ' + value_while +')\n{\n'+ statements_do +'}\n';
  return code;
};

Blockly.Arduino['if_inf'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var value_distance = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'if (robotDuLAB.getDistanceObstacle() < ' + value_distance +  ')\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['if_inter_bot'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');
  var code = 'if (digitalRead(INTER_BOT)==LOW)\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['if_color_ligne'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var dropdown_option = block.getFieldValue('Couleur_ligne');
  //var value_option = Blockly.Arduino.valueToCode(block, 'Couleur_ligne', Blockly.Arduino.ORDER_ATOMIC);
  //var code  = "robotDuLAB.Avancer("+dropdown_option+");\n";
  //var couleur = Blockly.Arduino.valueToCode(block, 'Couleur', Blockly.Arduino.ORDER_ATOMIC)||'VERT';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');
  if(dropdown_option==100) //blanc
  {
      var code = 'if (EpnBot.Getsuiveurligne()<' + dropdown_option + ')\n{\n' +
              statements_faire + '} \n';
  }
  else if(dropdown_option==135)   //gris (corrige à gauche)
  {
      var code = 'if ((EpnBot.Getsuiveurligne()>=' + (dropdown_option-35) + ')&&(EpnBot.Getsuiveurligne()<=' + (parseInt(dropdown_option)+parseInt(35)) + '))\n{\n' +
              statements_faire + '} \n';
  }
  else if(dropdown_option==170)   //noir (corrige à droite)
  {
      var code = 'if (EpnBot.Getsuiveurligne()>' + dropdown_option + ')\n{\n' +
              statements_faire + '} \n';
  }

  return code;
};

Blockly.Arduino['if_color'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var couleur = Blockly.Arduino.valueToCode(block, 'Couleur', Blockly.Arduino.ORDER_ATOMIC)||'VERT';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');
  var statements_sinon = Blockly.Arduino.statementToCode(block, 'Sinon');
  if(typeof(statements_sinon) != 'undefined')
  {
        var code = 'if (strcascmp(EpnBot.Getcolorzone(),' + couleur + ')==0)\n{\n' +
                    statements_faire + '}\nelse\n{\n' +
                    statements_sinon + '} \n';
  }
  else
  {
        var code = 'if (strcascmp(robotDuLAB.getColorZone(),' + couleur + ')==0)\n{\n' +
                    statements_faire + '}\n';
  }

  return code;
};

Blockly.Arduino['if_sup'] = function(block) {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var value_distance = Blockly.Arduino.valueToCode(block, 'Distance', Blockly.Arduino.ORDER_ATOMIC) || '20';
  var statements_faire = Blockly.Arduino.statementToCode(block, 'Faire');

  var code = 'if (robotDuLAB.getDistanceObstacle() > ' + value_distance +  ')\n{\n' +
              statements_faire + '} \n';

  return code;
};

Blockly.Arduino['EtatRobot'] = function (block)  {
  var code  ="etat_robot";
  return  [ code,  Blockly.Arduino.ORDER_ATOMIC ];
};

Blockly.Arduino['AffectationVariable'] = function (block)  {
  Blockly.Arduino.setups_["setup_epnbot"] = setup_epnbot;
  Blockly.Arduino.definitions_["define_epnbot"] = define_epnbot;
  var variable = Blockly.Arduino.valueToCode(block, 'A', Blockly.Arduino.ORDER_ATOMIC);
  var number = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC)||'0';
  var code = '' + variable + ' = ' + number + ';\n';
  return  code;
};
