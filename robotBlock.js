/*Blockly.Blocks['Avancer'] = {  
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',  
  init: function() {    
    this.jsonInit({      
      "previousStatement": null,      
      "nextStatement": null    
    });  
    this.appendDummyInput()        
      .appendField("Avancer")     
      .appendField(new Blockly.FieldDropdown([["25 %", "25"],                                                 
                                              ["50 %", "50"],                                                 
                                              ["75 %", "75"],                                                 
                                              ["100 %", "100"]]),                                                     
                                              "Vitesse");    
    this.setTooltip('Fait avancer le robot');    
    /*this.setOutput(true, 'Vitesse');  */  
    /*this.setColour(300);   
  }
};*/

Blockly.Blocks['Avancer'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Avancer");
    this.setColour(300);
    this.setTooltip('Fait avancer le robot');
   }
};

Blockly.Blocks['Reculer'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Reculer");
    this.setColour(300);
    this.setTooltip('Fait reculer le robot');
   }
};

Blockly.Blocks['Arreter'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Arreter");
    this.setColour(300);
    this.setTooltip('Stoppe le robot');
   }
};

Blockly.Blocks['TournerAGauche'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Tourner à gauche");
    this.setColour(300);
    this.setTooltip('Fait tourner à gauche le robot');
   }
};

Blockly.Blocks['TournerADroite'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Tourner à droite");
    this.setColour(300);
    this.setTooltip('Fait tourner à droite le robot');
   }
};

Blockly.Blocks['CorrigeAGauche'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Corrige à gauche");
    this.setColour(300);
    this.setTooltip('Fait corriger à gauche le robot lors d\'un suivi de ligne');
   }
};

Blockly.Blocks['CorrigeADroite'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.appendDummyInput()
        .appendField("Corrige à droite");
    this.setColour(300);
    this.setTooltip('Fait corriger à droite le robot lors d\'un suivi de ligne');
   }
};

Blockly.Blocks['Attendre'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField("Attendre")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setTooltip('Le robot attends un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};

Blockly.Blocks['AnimerAnneauLed'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });
    this.setColour(300);
    this.appendDummyInput()
        .appendField("Animer Anneau de Led");

    this.appendValueInput('Couleur')
        .appendField("Couleur")
        .setCheck('Couleur')
        .setAlign(Blockly.ALIGN_RIGHT);

    this.appendValueInput('Animation')
        .appendField("Animation")
        .setCheck('Animation')
        .setAlign(Blockly.ALIGN_RIGHT);
    
    this.appendValueInput('Pin_Led_avant')
        .appendField("Pin Led avant")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);

    this.setTooltip('Le robot attends un temps donné en millisecondes avant de passer à l\'instruction suivante');
  }
};

Blockly.Blocks['Animation'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField('Animation')
        .appendField(new Blockly.FieldDropdown([["Couleur", "COULEUR"], 
                                                ["Arc en ciel", "ARC_EN_CIEL"], 
                                                ["Arc en ciel cyclique", "ARC_EN_CIEL_CYCLIQUE"], 
                                                ["Couleur cyclique", "COULEUR_CYCLIQUE"], 
                                                ["Clignotant Droit", "CLIGNOTANT_DROIT"], 
                                                ["Clignotant Gauche", "CLIGNOTANT_GAUCHE"], 
                                                ["Clignotant", "CLIGNOTANT"]]), 
                                                    "Animation");
        
    this.setTooltip('Permet de choisir le motif d\'animation de l\'anneau de LED');

    this.setOutput(true, 'Animation');
    this.setColour(0);

  }
};

Blockly.Blocks['VERT'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("VERT");
    this.setOutput(true, 'Couleur');
    this.setColour(95);
    this.setTooltip('');
  }
};

Blockly.Blocks['ORANGE'] = {  
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',  
  init: function() {    
    this.appendDummyInput()        
      .appendField("ORANGE");    
    this.setOutput(true, 'Couleur');    
    this.setColour(24);    
    this.setTooltip('');  
  }
};

Blockly.Blocks['ROUGE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("ROUGE");
    this.setOutput(true, 'Couleur');
    this.setColour(0);
    this.setTooltip('');
  }
};

Blockly.Blocks['MAGENTA'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("MAGENTA");
    this.setOutput(true, 'Couleur');
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['BLEU'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("BLEU");
    this.setOutput(true, 'Couleur');
    this.setColour(240);
    this.setTooltip('');
  }
};

Blockly.Blocks['TURQUOISE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("TURQUOISE");
    this.setOutput(true, 'Couleur');
    this.setColour(180);
    this.setTooltip('');
  }
};

Blockly.Blocks['VIOLET'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("VIOLET");
    this.setOutput(true, 'Couleur');
    this.setColour(310);
    this.setTooltip('');
  }
};

Blockly.Blocks['JAUNE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("JAUNE");
    this.setOutput(true, 'Couleur');
    this.setColour(50);
    this.setTooltip('');
  }
};


Blockly.Blocks['BLANC'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("BLANC");
    this.setOutput(true, 'Couleur');
    this.setColour(59);
    this.setTooltip('');
  }
};

Blockly.Blocks['ROSE'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("ROSE");
    this.setOutput(true, 'Couleur');
    this.setColour(5);
    this.setTooltip('');
  }
};

Blockly.Blocks['GRIS'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("GRIS");
    this.setOutput(true, 'Couleur');
    this.setColour(43);
    this.setTooltip('');
  }
};

Blockly.Blocks['NOIR'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendDummyInput()
        .appendField("NOIR");
    this.setOutput(true, 'Couleur');
    this.setColour(500);
    this.setTooltip('');
  }
};

Blockly.Blocks['loop_dist_inf'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("tant que distance <");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("faire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};

Blockly.Blocks['loop_dist_sup'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("tant que distance >");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("faire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};

Blockly.Blocks['if_inf'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("si distance (en cm) <");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setColour(210);
    this.setTooltip('');
  }
};

Blockly.Blocks['if_inter_bot'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Si interrupteur du robot epn-bot appuyé");    
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setTooltip('');
  }
};

Blockly.Blocks['if_color_ligne'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
 /* init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });*/
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Si couleur suiveur de ligne détecté")
        .appendField(new Blockly.FieldDropdown([["BLANC", "100"],                                                 
                                              ["GRIS", "135"],                                                 
                                              ["NOIR", "170"]]),                                                     
                                              "Couleur_ligne");    

    /*this.appendValueInput('Couleur')
        .appendField("Couleur")
        .setCheck('Couleur')
        .setAlign(Blockly.ALIGN_RIGHT);*/
    

   /* this.appendValueInput("Couleur")
        .setCheck('Number')
        .appendField("si distance (en cm) <");*/
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setTooltip('');
  }
};

Blockly.Blocks['if_color'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
 /* init: function() {
    this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });*/
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    
    this.appendDummyInput()
        .appendField("Si couleur zone détecté");
    
    this.appendValueInput('Couleur')
        .appendField("Couleur")
        .setCheck('Couleur')
        .setAlign(Blockly.ALIGN_RIGHT);

   /* this.appendValueInput("Couleur")
        .setCheck('Number')
        .appendField("si distance (en cm) <");*/
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .appendField("Faire")
        .setCheck(null);
    
    this.setInputsInline(true);
    this.appendStatementInput("Sinon")
        .appendField("Sinon")
        .setCheck(null)
        .appendField("alors");
    this.setTooltip('');
  }
};

Blockly.Blocks['if_sup'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendValueInput("Distance")
        .setCheck('Number')
        .appendField("si distance (en cm) >");
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");

    this.setColour(210);
    this.setTooltip('');
  }
};

Blockly.Blocks['text_compare'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setTooltip('Compare deux textes');    
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(" = ");
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    /*var thisBlock = this;
    this.prevBlocks_ = [null, null];*/
  }
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @this Blockly.Block
   */
  /*onchange: function() {
    var blockA = this.getInputTargetBlock('A');
    var blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !blockA.outputConnection.checkType_(blockB.outputConnection)) {
      // Mismatch between two inputs.  Disconnect previous and bump it away.
      for (var i = 0; i < this.prevBlocks_.length; i++) {
        var block = this.prevBlocks_[i];
        if (block === blockA || block === blockB) {
          block.setParent(null);
          block.bumpNeighbours_();
        }
      }
    }
    this.prevBlocks_[0] = blockA;
    this.prevBlocks_[1] = blockB;
  }*/
};

Blockly.Blocks['EtatRobot'] = {  
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',  
  init: function() {
    this.appendDummyInput()
        .appendField("Etat du robot");
    this.setTooltip('Etat du robot'); 
    this.setOutput(true, 'Variable');
    this.setColour(24);  
  }
};

Blockly.Blocks['AffectationVariable'] = {  
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',  
  init: function() {    
    this.jsonInit({      
      "previousStatement": null,      
      "nextStatement": null    
    });
    //var OPERATORS = "EQ";
    
    /*this.setOutput(true, 'Affectation');*/
    this.appendValueInput('A')
        .setCheck('Variable');
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField("=");
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    //var thisBlock = this;
    /*this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
    });
    this.prevBlocks_ = [null, null];*/
    this.setColour(24);  
  }
};

Blockly.Blocks['ConvertisseurVariableNumber'] = {  
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',  
  init: function() {    
    this.setOutput(true, 'Number');
    this.appendValueInput('variable')
        .setCheck('Variable');
    this.setInputsInline(true);
    this.setTooltip("Utilisation d'une variable dans une condition");
    this.setColour(24);  
  }
};

Blockly.Blocks['DistanceObstacle'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    /*this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });*/
    this.appendDummyInput()
        .appendField("Distance obstacle");
    this.setOutput(true, 'Number');
    this.setColour(0);
    this.setTooltip('Retourne la distance en centimetre de l\'obstacle');
   }
};

Blockly.Blocks['CouleurZone'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    /*this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });*/
    this.appendDummyInput()
        .appendField("Couleur Zone");
    this.setOutput(true, 'Text');
    this.setColour(0);
    this.setTooltip('Retourne la couleur sous le robot');
   }
};

Blockly.Blocks['CouleurLigne'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    /*this.jsonInit({
      "previousStatement": null,
      "nextStatement": null
    });*/
    this.appendDummyInput()
        .appendField("Couleur Ligne");
    this.setOutput(true, 'Number');
    this.setColour(0);
    this.setTooltip('Retourne la couleur de la ligne (suiveur de ligne)');
   }
};
