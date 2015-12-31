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