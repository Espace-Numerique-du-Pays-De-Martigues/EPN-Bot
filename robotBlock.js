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
                                                ["Arc en ciel animé", "ARC_EN_CIEL_ANIME"], 
                                                ["Arc en ciel cyclique", "ARC_EN_CIEL_CYCLIQUE"], 
                                                ["Couleur cyclique", "COULEUR_CYCLIQUE"], 
                                                ["Clignotant Droit", "CLIGNOTANT_DROIT"], 
                                                ["Clignotant Gauche", "CLIGNOTANT_GAUCHE"], 
                                                ["Clignotant", "CLIGNOTANT"], 
                                                ["Éteindre", "ETEINDRE"]]), 
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

Blockly.Blocks['if_telecommande'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField('Si on utilise la télécommande');
    //this.setOutput(true, 'Boolean');
   this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setTooltip('Permet de choisir lancer la détection des touches de la télécommande');
    this.setColour(210);
  }
};

Blockly.Blocks['if_color_ligne'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
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
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .setCheck(null)
        .appendField("alors");
    this.setTooltip('');
  }
};

/*Blockly.Blocks['if_color_ligne'] = 
{
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() 
  {
    this.setColour(210);
    
    this.appendValueInput('IF0')
        .setCheck('Boolean')
        .appendField("IF");
    this.appendStatementInput('DO0')
        .appendField("Faire");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                         'controls_if_else']));
    this.appendValueInput('IF0')
    
    //this.appendDummyInput()
        .appendField("Si couleur suiveur de ligne détecté")
        .appendField(new Blockly.FieldDropdown([["BLANC", "100"],                                                 
                                              ["GRIS", "135"],                                                 
                                              ["NOIR", "170"]]),                                                     
                                              "Couleur_ligne"); 
    this.appendStatementInput('DO0')
        .appendField('control IF THEN');
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    
    this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                                         'controls_if_else']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() 
    {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return 'CONTROLS_IF_TOOLTIP_1';
      } 
      else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return 'CONTROLS_IF_TOOLTIP_2';
      } 
      else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return 'CONTROLS_IF_TOOLTIP_3';
      } 
      else if (thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return 'CONTROLS_IF_TOOLTIP_4';
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  mutationToDom: function() 
  {
    if (!this.elseifCount_ && !this.elseCount_) 
    {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) 
    {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) 
    {
      container.setAttribute('else', 1);
    }
    return container;
  },
  domToMutation: function(xmlElement) 
  {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      this.appendValueInput('IF' + i)
          .setCheck('Boolean')
          .appendField('ELSEIF');
      this.appendStatementInput('DO' + i)
          .appendField('MSG_THEN');
    }
    if (this.elseCount_) 
    {
      this.appendStatementInput('ELSE')
          .appendField('MSG_ELSE');
    }
  },
  decompose: function(workspace) 
  {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) 
    {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  compose: function(containerBlock) 
  {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) 
    {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) 
    {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
              .setCheck('Boolean')
              .appendField('MSG_ELSEIF');
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField('MSG_THEN');
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) 
          {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) 
          {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'controls_if_else':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField('MSG_ELSE');
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) 
          {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
          break;
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) 
  {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'controls_if_else':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }
  }
};*/

Blockly.Blocks['if_color'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
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
    
    this.setInputsInline(true);
    this.appendStatementInput("Faire")
        .appendField("alors")
        .setCheck(null);
    
    this.setTooltip('');
  }
};

Blockly.Blocks['text_compare'] = {
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  init: function() {
    this.setTooltip('Compare deux textes');    
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(" = ");
    this.setInputsInline(true);
  }
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
    this.setOutput(true, 'Couleur');
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
        .appendField("couleur ligne")
        .appendField(new Blockly.FieldDropdown([["BLANC", "100"],                                                 
                                              ["GRIS", "135"],                                                 
                                              ["NOIR", "170"]]),                                                     
                                              "Couleur_ligne"); 
    this.setOutput(true, 'CouleurLigne');
    this.setColour(0);
    this.setTooltip('Retourne la couleur de la ligne (suiveur de ligne)');
   }
};

Blockly.Blocks['if_touche_telecommande'] = {
helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
init: function() {
/*this.setPreviousStatement(true, null);
this.setNextStatement(true, null);*/
this.appendDummyInput()
.appendField("touche ")
.appendField(new Blockly.FieldDropdown([["On/Off", "0xFD00FF"],
["Vol+", "0xFD807F"],
["Vol-", "0xFD906F"],
["Précédent", "0xFD20DF"],
["Suivant", "0xFD609F"],
["Func/Stop", "0xFD40BF"],
["Play/Pause", "0xFDA05F"],
["Haut", "0xFD50AF"],
["Bas", "0xFD10EF"],
["Eq", "0xFDB04F"],
["St/rept", "0xFD708F"],
["0", "0xFD30CF"],
["1", "0xFD08F7"],
["2", "0xFD8877"],
["3", "0xFD48B7"],
["4", "0xFD28D7"],
["5", "0xFDA857"],
["6", "0xFD6897"],
["7", "0xFD18E7"],
["8", "0xFD9867"],
["9", "0xFD58A7"]]),
"id_telecommande");
this.setOutput(true, 'telecommande');
/*this.setInputsInline(true);
this.appendStatementInput("Faire")
.setCheck(null)
.appendField("alors");*/
this.setTooltip('Permet de choisir la touche de la télécommande');
this.setColour(0);
}
};

Blockly.Blocks['if_touche_bluetooth'] = {
helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
init: function() {
/*this.setPreviousStatement(true, null);
this.setNextStatement(true, null);*/
this.appendDummyInput()
.appendField("touche bluetooth ")
.appendField(new Blockly.FieldDropdown([["Gauche", "gauche"],
["Haut", "haut"],
["Droite", "droite"],
["Bas", "bas"],
["Select", "select"],
["Start", "start"],
["Carré", "carre"],
["Triangle", "triangle"],
["Croix", "croix"],
["Rond", "rond"]]),
"id_bluetooth");
this.setOutput(true, 'bluetooth');
this.setTooltip('Permet de choisir la touche de la manette bluetooth');
this.setColour(0);
}
};








Blockly.Blocks['controls_if_if_epn'] = {
//
// Mutator block for if container.
// @this Blockly.Block
//
init: function() {
this.setColour(210);
this.appendDummyInput()
.appendField("Si");
//.appendField("test 1");
this.appendStatementInput('STACK');
this.setTooltip("Ajouter, supprimer, ou reordonner les sections pour reconfigurer le bloc Si.");
//this.setTooltip("test 2");
this.contextMenu = false;
}
};
Blockly.Blocks['controls_if_elseif_epn'] = {
//
// Mutator bolck for else-if condition.
// @this Blockly.Block
//
init: function() {
this.setColour(210);
this.appendDummyInput()
.appendField("Sinon Si");
//.appendField("test 3");
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setTooltip("Ajouter une condition au bloc Si.");
//this.setTooltip("test 4");
this.contextMenu = false;
}
};

Blockly.Blocks['controls_if_telecommande'] = {
helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
//
// Block for if/elseif/else condition.
// @this Blockly.Block
//
init: function() {
this.setColour(210);
this.appendValueInput('IF0')
.setCheck('telecommande')
.appendField("Si touche de la télécommande appuyé ");
this.appendStatementInput('DO0')
.appendField("Faire");
//.appendField("test 7");
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setMutator(new Blockly.Mutator(['controls_if_elseif_epn',
'controls_if_else_epn']));
// Assign 'this' to a variable for use in the tooltip closure below.
var thisBlock = this;
this.setTooltip(function() {
if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
return "Si une valeur est vrai, alors exécuter certains ordres.";
//return "test 8";
} else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
return "Si une valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, exécuter le second bloc d'ordres.";
//return "test 9";
} else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres.";
//return "test 10";
} else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres. Si aucune des valeurs n'est vrai, exécuter le dernier bloc d'ordres.";
//return "test 11";
}
return '';
});
this.elseifCount_ = 0;
this.elseCount_ = 0;
},
//
// Create XML to represent the number of else-if and else inputs.
// @return {Element} XML storage element.
// @this Blockly.Block
//
mutationToDom: function() {
if (!this.elseifCount_ && !this.elseCount_) {
return null;
}
var container = document.createElement('mutation');
if (this.elseifCount_) {
container.setAttribute('elseif', this.elseifCount_);
}
if (this.elseCount_) {
container.setAttribute('else', 1);
}
return container;
},
//
// Parse XML to restore the else-if and else inputs.
// @param {!Element} xmlElement XML storage element.
// @this Blockly.Block
//
domToMutation: function(xmlElement) {
this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
for (var i = 1; i <= this.elseifCount_; i++) {
this.appendValueInput('IF' + i)
.setCheck('telecommande')
.appendField("Sinon Si touche de la télécommande appuyé ");
this.appendStatementInput('DO' + i)
.appendField("Faire");
//.appendField("test 13");
}
if (this.elseCount_) {
this.appendStatementInput('ELSE')
.appendField("Sinon");
//.appendField("test 14");
}
},
//
// Populate the mutator's dialog with this block's components.
// @param {!Blockly.Workspace} workspace Mutator's workspace.
// @return {!Blockly.Block} Root block in mutator.
// @this Blockly.Block
//
decompose: function(workspace) {
var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if_epn');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var i = 1; i <= this.elseifCount_; i++) {
var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif_epn');
elseifBlock.initSvg();
connection.connect(elseifBlock.previousConnection);
connection = elseifBlock.nextConnection;
}
if (this.elseCount_) {
var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else_epn');
elseBlock.initSvg();
connection.connect(elseBlock.previousConnection);
}
return containerBlock;
},
//
// Reconfigure this block based on the mutator dialog's components.
// @param {!Blockly.Block} containerBlock Root block in mutator.
// @this Blockly.Block
//
compose: function(containerBlock) {
// Disconnect the else input blocks and remove the inputs.
if (this.elseCount_) {
this.removeInput('ELSE');
}
this.elseCount_ = 0;
// Disconnect all the elseif input blocks and remove the inputs.
for (var i = this.elseifCount_; i > 0; i--) {
this.removeInput('IF' + i);
this.removeInput('DO' + i);
}
this.elseifCount_ = 0;
// Rebuild the block's optional inputs.
var clauseBlock = containerBlock.getInputTargetBlock('STACK');
while (clauseBlock) {
switch (clauseBlock.type) {
case 'controls_if_elseif':
this.elseifCount_++;

var ifInput = this.appendValueInput('IF' + this.elseifCount_)
.setCheck('telecommande')
.appendField("Sinon Si touche de la télécommande appuyé ");
var doInput = this.appendStatementInput('DO' + this.elseifCount_);
doInput.appendField("Faire");
//doInput.appendField("test 16");
// Reconnect any child blocks.
if (clauseBlock.valueConnection_) {
ifInput.connection.connect(clauseBlock.valueConnection_);
}
if (clauseBlock.statementConnection_) {
doInput.connection.connect(clauseBlock.statementConnection_);
}
break;
case 'controls_if_else_epn':
this.elseCount_++;
var elseInput = this.appendStatementInput('ELSE');
elseInput.appendField("Sinon");
// Reconnect any child blocks.
if (clauseBlock.statementConnection_) {
elseInput.connection.connect(clauseBlock.statementConnection_);
}
break;
default:
throw 'Unknown block type.';
}
clauseBlock = clauseBlock.nextConnection &&
clauseBlock.nextConnection.targetBlock();
}
},
//
// Store pointers to any connected child blocks.
// @param {!Blockly.Block} containerBlock Root block in mutator.
// @this Blockly.Block
//
saveConnections: function(containerBlock) {
var clauseBlock = containerBlock.getInputTargetBlock('STACK');
var i = 1;
while (clauseBlock) {
switch (clauseBlock.type) {
case 'controls_if_elseif_epn':
var inputIf = this.getInput('IF' + i);
var inputDo = this.getInput('DO' + i);
clauseBlock.valueConnection_ =
inputIf && inputIf.connection.targetConnection;
clauseBlock.statementConnection_ =
inputDo && inputDo.connection.targetConnection;
i++;
break;
case 'controls_if_else_epn':
var inputDo = this.getInput('ELSE');
clauseBlock.statementConnection_ =
inputDo && inputDo.connection.targetConnection;
break;
default:
throw 'Unknown block type.';
}
clauseBlock = clauseBlock.nextConnection &&
clauseBlock.nextConnection.targetBlock();
}
}
};

Blockly.Blocks['controls_if_else_epn'] = {
//
// Mutator block for else condition.
// @this Blockly.Block
//
init: function() {
this.setColour(210);
this.appendDummyInput()
.appendField("Sinon");
//.appendField("test 18");
this.setPreviousStatement(true);
this.setTooltip("Ajouter une condition finale fourre-tout au bloc Si.");
//this.setTooltip("test 19");
this.contextMenu = false;
}
};


Blockly.Blocks['controls_if_bluetooth'] = {
helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
//
// Block for if/elseif/else condition.
// @this Blockly.Block
//
init: function() {
this.setColour(210);
this.appendValueInput('IF0')
.setCheck('bluetooth')
.appendField("Si touche bluetooth appuyé ");
this.appendStatementInput('DO0')
.appendField("Faire");
//.appendField("test 7");
this.setPreviousStatement(true);
this.setNextStatement(true);
this.setMutator(new Blockly.Mutator(['controls_if_elseif_epn',
'controls_if_else_epn']));
// Assign 'this' to a variable for use in the tooltip closure below.
var thisBlock = this;
this.setTooltip(function() {
if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
return "Si une valeur est vrai, alors exécuter certains ordres.";
//return "test 8";
} else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
return "Si une valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, exécuter le second bloc d'ordres.";
//return "test 9";
} else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres.";
//return "test 10";
} else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres. Si aucune des valeurs n'est vrai, exécuter le dernier bloc d'ordres.";
//return "test 11";
}
return '';
});
this.elseifCount_ = 0;
this.elseCount_ = 0;
},
//
// Create XML to represent the number of else-if and else inputs.
// @return {Element} XML storage element.
// @this Blockly.Block
//
mutationToDom: function() {
if (!this.elseifCount_ && !this.elseCount_) {
return null;
}
var container = document.createElement('mutation');
if (this.elseifCount_) {
container.setAttribute('elseif', this.elseifCount_);
}
if (this.elseCount_) {
container.setAttribute('else', 1);
}
return container;
},
//
// Parse XML to restore the else-if and else inputs.
// @param {!Element} xmlElement XML storage element.
// @this Blockly.Block
//
domToMutation: function(xmlElement) {
this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
for (var i = 1; i <= this.elseifCount_; i++) {
this.appendValueInput('IF' + i)
.setCheck('bluetooth')
.appendField("Sinon Si touche bluetooth appuyé ");
this.appendStatementInput('DO' + i)
.appendField("Faire");
//.appendField("test 13");
}
if (this.elseCount_) {
this.appendStatementInput('ELSE')
.appendField("Sinon");
//.appendField("test 14");
}
},
//
// Populate the mutator's dialog with this block's components.
// @param {!Blockly.Workspace} workspace Mutator's workspace.
// @return {!Blockly.Block} Root block in mutator.
// @this Blockly.Block
//
decompose: function(workspace) {
var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if_epn');
containerBlock.initSvg();
var connection = containerBlock.getInput('STACK').connection;
for (var i = 1; i <= this.elseifCount_; i++) {
var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif_epn');
elseifBlock.initSvg();
connection.connect(elseifBlock.previousConnection);
connection = elseifBlock.nextConnection;
}
if (this.elseCount_) {
var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else_epn');
elseBlock.initSvg();
connection.connect(elseBlock.previousConnection);
}
return containerBlock;
},
//
// Reconfigure this block based on the mutator dialog's components.
// @param {!Blockly.Block} containerBlock Root block in mutator.
// @this Blockly.Block
//
compose: function(containerBlock) {
// Disconnect the else input blocks and remove the inputs.
if (this.elseCount_) {
this.removeInput('ELSE');
}
this.elseCount_ = 0;
// Disconnect all the elseif input blocks and remove the inputs.
for (var i = this.elseifCount_; i > 0; i--) {
this.removeInput('IF' + i);
this.removeInput('DO' + i);
}
this.elseifCount_ = 0;
// Rebuild the block's optional inputs.
var clauseBlock = containerBlock.getInputTargetBlock('STACK');
while (clauseBlock) {
switch (clauseBlock.type) {
case 'controls_if_elseif_epn':
this.elseifCount_++;
var ifInput = this.appendValueInput('IF' + this.elseifCount_)
.setCheck('bluetooth')
.appendField("Sinon Si touche bluetooth appuyé ");
var doInput = this.appendStatementInput('DO' + this.elseifCount_);
doInput.appendField("Faire");
//doInput.appendField("test 16");
// Reconnect any child blocks.
if (clauseBlock.valueConnection_) {
ifInput.connection.connect(clauseBlock.valueConnection_);
}
if (clauseBlock.statementConnection_) {
doInput.connection.connect(clauseBlock.statementConnection_);
}
break;
case 'controls_if_else_epn':
this.elseCount_++;
var elseInput = this.appendStatementInput('ELSE');
elseInput.appendField("Sinon");
// Reconnect any child blocks.
if (clauseBlock.statementConnection_) {
elseInput.connection.connect(clauseBlock.statementConnection_);
}
break;
default:
throw 'Unknown block type.';
}
clauseBlock = clauseBlock.nextConnection &&
clauseBlock.nextConnection.targetBlock();
}
},
//
// Store pointers to any connected child blocks.
// @param {!Blockly.Block} containerBlock Root block in mutator.
// @this Blockly.Block
//
saveConnections: function(containerBlock) {
var clauseBlock = containerBlock.getInputTargetBlock('STACK');
var i = 1;
while (clauseBlock) {
switch (clauseBlock.type) {
case 'controls_if_elseif_epn':
var inputIf = this.getInput('IF' + i);
var inputDo = this.getInput('DO' + i);
clauseBlock.valueConnection_ =
inputIf && inputIf.connection.targetConnection;
clauseBlock.statementConnection_ =
inputDo && inputDo.connection.targetConnection;
i++;
break;
case 'controls_if_else_epn':
var inputDo = this.getInput('ELSE');
clauseBlock.statementConnection_ =
inputDo && inputDo.connection.targetConnection;
break;
default:
throw 'Unknown block type.';
}
clauseBlock = clauseBlock.nextConnection &&
clauseBlock.nextConnection.targetBlock();
}
}
};



Blockly.Blocks['controls_if_color'] = 
{
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  //
  // Block for if/elseif/else condition.
  // @this Blockly.Block
  //
  init: function() 
  {
    this.setColour(210);
    this.appendValueInput('IF0')
    .setCheck('Couleur')
    .appendField("Si couleur détecté ");
    this.appendStatementInput('DO0')
    .appendField("Faire");
    //.appendField("test 7");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif_epn',
    'controls_if_else_epn']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() 
    {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return "Si une valeur est vrai, alors exécuter certains ordres.";
        //return "test 8";
      } 
      else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return "Si une valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, exécuter le second bloc d'ordres.";
        //return "test 9";
      } 
      else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres.";
        //return "test 10";
      } 
      else if (thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres. Si aucune des valeurs n'est vrai, exécuter le dernier bloc d'ordres.";
        //return "test 11";
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  //
  // Create XML to represent the number of else-if and else inputs.
  // @return {Element} XML storage element.
  // @this Blockly.Block
  //
  mutationToDom: function() 
  {
    if (!this.elseifCount_ && !this.elseCount_) 
    {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) 
    {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) 
    {
      container.setAttribute('else', 1);
    }
    return container;
  },
  //
  // Parse XML to restore the else-if and else inputs.
  // @param {!Element} xmlElement XML storage element.
  // @this Blockly.Block
  //
  domToMutation: function(xmlElement) 
  {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      this.appendValueInput('IF' + i)
      .setCheck('Couleur')
      .appendField("Sinon Si couleur détecté ");
      this.appendStatementInput('DO' + i)
      .appendField("Faire");
      //.appendField("test 13");
    }
    if (this.elseCount_) 
    {
      this.appendStatementInput('ELSE')
      .appendField("Sinon");
      //.appendField("test 14");
    }
  },
  //
  // Populate the mutator's dialog with this block's components.
  // @param {!Blockly.Workspace} workspace Mutator's workspace.
  // @return {!Blockly.Block} Root block in mutator.
  // @this Blockly.Block
  //
  decompose: function(workspace) 
  {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if_epn');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif_epn');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) 
    {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else_epn');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  //
  // Reconfigure this block based on the mutator dialog's components.
  // @param {!Blockly.Block} containerBlock Root block in mutator.
  // @this Blockly.Block
  //
  compose: function(containerBlock) 
  {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) 
    {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) 
    {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif_epn':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
          .setCheck('Couleur')
          .appendField("Sinon Si couleur détecté ");
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField("Faire");
          //doInput.appendField("test 16");
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) 
          {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) 
          {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
          
        case 'controls_if_else_epn':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField("Sinon");
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) 
          {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  },
  //
  // Store pointers to any connected child blocks.
  // @param {!Blockly.Block} containerBlock Root block in mutator.
  // @this Blockly.Block
  //
  saveConnections: function(containerBlock) 
  {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
     var i = 1;
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif_epn':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          i++;
          break;

        case 'controls_if_else_epn':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          break;

        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['controls_if_ligne'] = 
{
  helpUrl: 'http://wiki.labaixbidouille.com/index.php/RoboduLAB',
  //
  // Block for if/elseif/else condition.
  // @this Blockly.Block
  //
  init: function() 
  {
    this.setColour(210);
    this.appendValueInput('IF0')
    .setCheck('CouleurLigne')
    .appendField("Si ligne détecté ");
    this.appendStatementInput('DO0')
    .appendField("Faire");
    //.appendField("test 7");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['controls_if_elseif_epn',
    'controls_if_else_epn']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() 
    {
      if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return "Si une valeur est vrai, alors exécuter certains ordres.";
        //return "test 8";
      } 
      else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return "Si une valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, exécuter le second bloc d'ordres.";
        //return "test 9";
      } 
      else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) 
      {
        return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres.";
        //return "test 10";
      } 
      else if (thisBlock.elseifCount_ && thisBlock.elseCount_) 
      {
        return "Si la première valeur est vrai, alors exécuter le premier bloc d'ordres. Sinon, si la seconde valeur est vrai, alors exécuter le second bloc d'ordres. Si aucune des valeurs n'est vrai, exécuter le dernier bloc d'ordres.";
        //return "test 11";
      }
      return '';
    });
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
  },
  //
  // Create XML to represent the number of else-if and else inputs.
  // @return {Element} XML storage element.
  // @this Blockly.Block
  //
  mutationToDom: function() 
  {
    if (!this.elseifCount_ && !this.elseCount_) 
    {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) 
    {
      container.setAttribute('elseif', this.elseifCount_);
    }
    if (this.elseCount_) 
    {
      container.setAttribute('else', 1);
    }
    return container;
  },
  //
  // Parse XML to restore the else-if and else inputs.
  // @param {!Element} xmlElement XML storage element.
  // @this Blockly.Block
  //
  domToMutation: function(xmlElement) 
  {
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      this.appendValueInput('IF' + i)
      .setCheck('CouleurLigne')
      .appendField("Sinon Si ligne détecté ");
      this.appendStatementInput('DO' + i)
      .appendField("Faire");
      //.appendField("test 13");
    }
    if (this.elseCount_) 
    {
      this.appendStatementInput('ELSE')
      .appendField("Sinon");
      //.appendField("test 14");
    }
  },
  //
  // Populate the mutator's dialog with this block's components.
  // @param {!Blockly.Workspace} workspace Mutator's workspace.
  // @return {!Blockly.Block} Root block in mutator.
  // @this Blockly.Block
  //
  decompose: function(workspace) 
  {
    var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if_epn');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) 
    {
      var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif_epn');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) 
    {
      var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else_epn');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  //
  // Reconfigure this block based on the mutator dialog's components.
  // @param {!Blockly.Block} containerBlock Root block in mutator.
  // @this Blockly.Block
  //
  compose: function(containerBlock) 
  {
    // Disconnect the else input blocks and remove the inputs.
    if (this.elseCount_) 
    {
      this.removeInput('ELSE');
    }
    this.elseCount_ = 0;
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) 
    {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif_epn':
          this.elseifCount_++;
          var ifInput = this.appendValueInput('IF' + this.elseifCount_)
          .setCheck('CouleurLigne')
          .appendField("Sinon Si ligne détecté ");
          var doInput = this.appendStatementInput('DO' + this.elseifCount_);
          doInput.appendField("Faire");
          //doInput.appendField("test 16");
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) 
          {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) 
          {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
          
        case 'controls_if_else_epn':
          this.elseCount_++;
          var elseInput = this.appendStatementInput('ELSE');
          elseInput.appendField("Sinon");
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) 
          {
            elseInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  },
  //
  // Store pointers to any connected child blocks.
  // @param {!Blockly.Block} containerBlock Root block in mutator.
  // @this Blockly.Block
  //
  saveConnections: function(containerBlock) 
  {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
     var i = 1;
    while (clauseBlock) 
    {
      switch (clauseBlock.type) 
      {
        case 'controls_if_elseif_epn':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          i++;
          break;

        case 'controls_if_else_epn':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
          break;

        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
    }
  }
};
