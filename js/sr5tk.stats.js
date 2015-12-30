// ####################################################################
// ### sr5tk.character_values

var stats = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	
	// Generate an array of random attribute values
	// take into consideration: 
	// - available points
	// - min and max racial attributes
	// - character's priorities
  function random_stats($race) {
    $points = 14;
    $anzahl_attribute = 8;
    $race_stats = race_defaults($race);
    $attributes = $race_stats['min'];
    for ($n = 0; $n < $points; $n ++) { 
      
      $attr = get_attribute_by_priority();
      if ($attributes[$attr] == undefined) {
        $attributes[$attr] = 0;
      }
      if ($attributes[$attr] < $race_stats['max'][$attr]) {
         $attributes[$attr] ++;
      } else { 
         $n --;
      }
    }
    // store the stats in character array
    character.add_values('attributes',$attributes);
    return $attributes;
  }

  // Make a random number equal the sum of the priority arra
  // Go through the priority array and check if the random number is lower than the sum at this position of the array
  // If the random number has reached the sums value, this is set as the attribute number returned
  function get_attribute_by_priority() {

    $priority = [6,3,6,1,1,2,1,1];
    
    $array_sum = 0;
    for (n = 0; n < $priority.length; n++) {
      $array_sum += $priority[n];
    }

    random = Math.round(Math.random() * $array_sum); 
    
    $attr = 0;
    $attr_array_position = 0;
    for (n = 0; n < $priority.length; n++) {
      $attr_array_position += $priority[n];
      if(random > $attr_array_position) {
        $attr ++;
      }
    }
    return $attr;
  }
  
  // Define and return the racial min and max attribute values
  // The race name has to be delivered as a variable
  // 'human', 'elf', 'dwarf', 'ork', 'troll' 
  function race_defaults($race) {
    $defaults_human = { min: [1,1,1,1,1,1,1,1], max: [6,6,6,6,6,6,6,6] };
    $defaults_elf = { min: [1,2,1,1,1,1,1,3], max: [6,7,6,6,6,6,6,8] };
    $defaults_dwarf = { min: [3,1,1,3,2,1,1,1], max: [8,6,5,8,7,6,6,6] };
    $defaults_ork = { min: [4,1,1,3,1,1,1,1], max: [9,6,6,8,6,5,6,5] };
    $defaults_troll = { min: [5,1,1,5,1,1,1,1], max: [10,5,6,10,6,5,5,4] };
    
    return( window['$defaults_'+$race]);
    
  }
  
  // Take the array of generated stat values and merge it with an array of stat names
  // Return the new array as html text
  function list_stats($race) {
    $stat_numbers = random_stats($race);
    $stat_text = new Array('Kon ','Ges ','Rea ','Sta ','Wil ','Log ','Int ','Cha ')
    $list_of_stats = new Array();
    for ($n = 0; $n < $stat_text.length; $n ++) {
      $list_of_stats[$n] = $stat_text[$n] + $stat_numbers[$n];
    }
    return $list_of_stats.join(', ');
  }
  
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		build: function($race) {
			$('.output').html(list_stats($race));
		}
	}
	
}();