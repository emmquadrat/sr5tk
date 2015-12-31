// ####################################################################
// ### sr5tk.form actions

var form = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	// ------------------------------------------------------------------
	
	// R E A D   P R I O R I T I E S
	function manage_priorities() {
  	
  	// walk though the checkboxes and make an array '$specializations' with all values checked
  	var $form__specializations =  $('[data-sr5tk="specializations_checkbox"]');
    var $specializations = [];
  	$.each($form__specializations, function(index, value) { 
      if ( $(this).prop('checked') ) {
        $specializations.push( $(this).attr('value') );
      }
    });
    
    // gather priorities settings from $config and combine them into a single object '$character_priorities'
    // make an average für each attribute
    var $character_priorities = {};
    var $number_of_specializations = 0;
    var $this_specialisazion = {};
    var $attribute_names = [];
    
    // walk though the list of checked spesializations
    $.each($specializations, function(index, value) {
      // if an object exists in $config …
      if (typeof $config['$'+value] !== 'undefined') {
        // … make a copy of the object and put it in $this_specialisazion
        $this_specialisazion = $.extend(true, {}, $config['$'+value]);
        // Extract the attribute's (key's) names
        $attribute_names = Object.keys($this_specialisazion.attributes);
        // walk through the attributes (keys) and put sum them
        $.each($attribute_names, function(index, value) {
          if ($character_priorities[value]) {
            $character_priorities[value] += $this_specialisazion.attributes[value];
          } else {
            // If the attribute (key) isn't set allready, make it 
            // and add +1 because the numbers in the $config range from 0 to 5 but we want the final numbers to range from 1 to 6
            $character_priorities[value] = $this_specialisazion.attributes[value] + 1;
          }
        });
        $number_of_specializations ++;
      }
    });
    // walk trough $character_priorities and divide it by the number of specializations to make an average number
    $.each($attribute_names, function(index, value) {
      $character_priorities[value] = Math.round( $character_priorities[value] / $number_of_specializations );
    });
    
    return $character_priorities;
    
  }
    
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		read: function() {
			return manage_priorities();
		}
	}
	
}();

// ------------------------------------------------------------------
// --- listeners

jQuery( document ).ready(function( $ ) {
  // Listen for the "Generate" Button to launch character creation
  $('[data-sr5tk="button_launch_generator"]').click( function() {
    // Check if any specialization boxes are checked.
    // Alert if not.
    var checked_boxes = $('[data-sr5tk="specializations_checkbox"]:checked');
    if (checked_boxes.length > 0) {
      stats.build( 'human', form.read() );
    } else {
      alert ("Checkbox missing");
    }
  });
});	











