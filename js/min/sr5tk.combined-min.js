

// ####################################################################
// ### sr5tk.config

var $config = {};
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// R A C E   V A L U E S
/* Default racial attribute values
   Each Race has a min and a max attributes setting
   supported races are Humans, Elfes, Dwarfs, Orks and Trolls
*/

  // Humans
  $config['$defaults_human'] = { 
          min: {
            kon:1,
            agi:1,
            rea:1,
            str:1,
            wil:1,
            log:1,
            int:1,
            cha:1,
            edg:2
          }, 
          max: {
            kon:6,
            agi:6,
            rea:6,
            str:6,
            wil:6,
            log:6,
            int:6,
            cha:6,
            edg:7
          }
        };

  // Elves
  $config['$defaults_elf'] = { 
          min: {
            kon:1,
            agi:2,
            rea:1,
            str:1,
            wil:1,
            log:1,
            int:1,
            cha:3,
            edg:1
          }, 
          max: {
            kon:6,
            agi:7,
            rea:6,
            str:6,
            wil:6,
            log:6,
            int:6,
            cha:8,
            edg:6
          }
        };

  // Dwarfs
  $config['$defaults_dwarf'] = { 
          min: {
            kon:3,
            agi:1,
            rea:1,
            str:3,
            wil:2,
            log:1,
            int:1,
            cha:1,
            edg:1
          }, 
          max: {
            kon:8,
            agi:6,
            rea:5,
            str:8,
            wil:7,
            log:6,
            int:6,
            cha:6,
            edg:6
          }
        };

  // Orks
  $config['$defaults_ork'] = { 
          min: {
            kon:4,
            agi:1,
            rea:1,
            str:3,
            wil:1,
            log:1,
            int:1,
            cha:1,
            edg:1
          }, 
          max: {
            kon:9,
            agi:6,
            rea:6,
            str:8,
            wil:6,
            log:5,
            int:6,
            cha:5,
            edg:6
          }
        };

  // Trolls
  $config['$defaults_troll'] = { 
          min: {
            kon:5,
            agi:1,
            rea:1,
            str:5,
            wil:1,
            log:1,
            int:1,
            cha:1,
            edg:1
          }, 
          max: {
            kon:10,
            agi:5,
            rea:6,
            str:10,
            wil:6,
            log:5,
            int:5,
            cha:4,
            edg:6
          }
        };

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// P R I O R I T I E S
/* Depending on their specialization characters have a certain set of priorities.
   They have priorities for attributes, skills and gear.
   A higher priority means a higher chance for a high attribute value at character creation.
   Priorities range from 0 to 5.
   No attribute priority can be set for Edge.
   
   Usually one or more specializations are calculated to a certain set of priorities 
   but you can combine specializations to not use the default set of priorities but the special set for this combination.
   E.g. '$fight' has a default set but combined with '$stealth' it uses te set '$fight_and_stealth'. '$stealth' is still applied afterwords.
*/

  // Fight
  var $fight = { 
          attributes: {
            kon:5,
            agi:3,
            rea:3,
            str:5,
            wil:0,
            log:0,
            int:1,
            cha:0
          }
        };
        
  var $fight_and_magic = { 
          attributes: {
            kon:5,
            agi:3,
            rea:3,
            str:5,
            wil:0,
            log:0,
            int:1,
            cha:0
          }
        };
        
  var $fight_and_vehicles = { 
          attributes: {
            kon:1,
            agi:5,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:2,
            cha:0
          }
        };
        
  var $fight_and_drones = $fight_and_vehicles;
        
  var $fight_and_stealth = { 
          attributes: {
            kon:2,
            agi:5,
            rea:5,
            str:1,
            wil:0,
            log:0,
            int:2,
            cha:0
          }
        };
  
  // Magic     
  var $magic = { 
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:5,
            log:5,// according to magic school
            int:5,
            cha:5 // according to magic school 
          }
        };
  
  // Computer     
  var $computer = { 
          attributes: {
            kon:0,
            agi:0,
            rea:5,
            str:0,
            wil:5,
            log:5,
            int:5,
            cha:0
          }
        };
  
  // Vehicles     
  var $vehicles = { 
          attributes: {
            kon:0,
            agi:3,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:2,
            cha:0
          }
        };
  
  // Drones     
  var $drones= { 
          attributes: {
            kon:0,
            agi:5,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:1,
            cha:0
          }
        };
  
  // People     
  var $fcomputer = { 
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:3,
            log:0,
            int:5,
            cha:5
          }
        };
  
  // Stealth     
  var $fcomputer = { 
          attributes: {
            kon:0,
            agi:5,
            rea:3,
            str:0,
            wil:1,
            log:0,
            int:5,
            cha:2
          }
        };
  
  // Knowledge     
  var $knowledge = { 
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:2,
            log:5,
            int:5,
            cha:1
          }
        };
  
  // Equipment     
  var $equipment = { 
          attributes: {
            kon:0,
            agi:1,
            rea:0,
            str:0,
            wil:1,
            log:5,
            int:3,
            cha:1
          }
        };



// ####################################################################
// ### sr5tk.stats

var stats = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	// ------------------------------------------------------------------
	
	// R A N D O M   S T A T S
	// Generate an array of random attribute values
	// take into consideration: 
	// - available points
	// - min and max racial attributes
	// - character's priorities
  function random_stats($race, $priorities) {
    var $points = 4; // needs to become dynamic
    
    // fetch race default values
    var $race_stats = race_defaults($race); 
    var $attributes = $race_stats['min'];
    var $attribute_names = Object.keys($attributes);
    
    // loop troug the available points and increase an attribute's (i.e. key's) value
    for (var $points_spent = 0; $points_spent < $points; $points_spent ++) {
      
      var $random_number = get_attribute_by_priority($priorities);
      var $current_attribute = $attribute_names[$random_number];

      if ($attributes[$current_attribute] < $race_stats['max'][$current_attribute]) {
         $attributes[$current_attribute] ++;
      } else { 
         $points_spent --;
      }
    }
    // add a random value for Egde
    $attributes.edg += Math.round(Math.random()*3);
    // store the stats in character array
    character.add_values('attributes',$attributes);
    
    return $attributes;
  }

  // A T T R I B U T E   N U M B E R   B Y   P R I O R I T Y 
  // Make a random number equal the sum of the priority arra
  // Go through the priority array and check if the random number is lower than the sum at this position of the array
  // If the random number has reached the sums value, this is set as the attribute number returned
  function get_attribute_by_priority($priorities) {

    var $priority = [6,3,6,1,1,2,1,1];
    
    var $array_sum = 0;
    for (var $n = 0; $n < $priority.length; $n++) {
      $array_sum += $priority[$n];
    }

    var $random = Math.round(Math.random() * ($array_sum -1)); 
    
    var $attr = 0;
    var $attr_array_position = 0;
    for (var $n = 0; $n < $priority.length; $n++) {
      $attr_array_position += $priority[$n];
      if($random > $attr_array_position) {
        $attr ++;
      }
    }
    return $attr;
  }
  
  // R A C I A L   D E F A U L T S 
  // Return the racial min and max attribute values
  // The race name has to be delivered as a variable
  // 'human', 'elf', 'dwarf', 'ork', 'troll' 
  function race_defaults($race) {
    var $character_defaults = jQuery.extend(true, {}, $config['$defaults_'+$race]); // this is a deep copy of the defaults object
    return $character_defaults;
    
  }
  
  // D I S P L A Y   A T T R I B U T E S   A S   H T M L 
  // Take the array of generated stat values and merge it with an array of stat names
  // Return the new array as html text
  function list_stats($race, $priorities) {
    var $stat_numbers = random_stats($race,$priorities);
    var $stat_keys = Object.keys($stat_numbers);
    var $stat_text = new Array('Kon ','Ges ','Rea ','Sta ','Wil ','Log ','Int ','Cha ', 'Edg ')
    var $list_of_stats = new Array();
    for (var $n = 0; $n < $stat_text.length; $n ++) {
      $list_of_stats[$n] = $stat_text[$n] + $stat_numbers[$stat_keys[$n]];
    }
    return $list_of_stats.join(', ');
  }
  
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		build: function($race, $priorities) {
  		$('[data-sr5tk="echo_attributes"').html(list_stats($race, $priorities));
		}
	}
	
}();

// ####################################################################
// ### sr5tk.character_values

var character = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	
  function define_features($group, $list_of_features) {
    if (typeof $character_features === 'undefined') {
      $character_features = new Array();
    } 
    $character_features[$group] = $list_of_features;
    
    return ($character_features);
  }
  
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		add_values: function($group, $list_of_features) {
			define_features($group, $list_of_features);
		}
	}
	
}();

// ####################################################################
// ### sr5tk.form actions

var form = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	// ------------------------------------------------------------------
/*
	
	// R A N D O M   S T A T S
	function random_stats($race) {
    var $points = 14; // needs to become dynamic
    
    // fetch race default values
    var $race_stats = race_defaults($race);
    var $attributes = $race_stats['min'];
    var $attribute_names = Object.keys($attributes);
    
    // loop troug the available points and increase an attribute's (i.e. key's) value
    for ($n = 0; $n < $points; $n ++) { 
      
      var $random_number = get_attribute_by_priority();
      var $current_attribute = $attribute_names[$random_number];

      if ($attributes[$current_attribute] < $race_stats['max'][$current_attribute]) {
         $attributes[$current_attribute] ++;
      } else { 
         $n --;
      }
    }
    // add a random value for Egde
    $attributes.edg += Math.round(Math.random()*3);
    // store the stats in character array
    character.add_values('attributes',$attributes);
    return $attributes;
  }
    
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		build: function($race) {
			$('[data-sr5tk="echo_attributes"').html(list_stats($race));
		}
	}
*/
	
}();

// ------------------------------------------------------------------
// --- listeners

jQuery( document ).ready(function( $ ) {
  $('[data-sr5tk="button_launch_generator"]').click( function() {
    stats.build('human', $priorities);
  });
});	

