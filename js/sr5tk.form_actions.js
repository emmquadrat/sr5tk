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