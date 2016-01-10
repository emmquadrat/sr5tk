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

  	// get checkboxes and make an array '$specializations' with all values checked
  	var $specializations = load_checked_specializations();

    // gather priorities settings from $config and combine them into a single object '$character_priorities'
    // make an average für each attribute
    var $character_priorities = {};
    var $number_of_specializations = 0;
    var $this_specialization = {};
    var $attribute_names = [];

    // walk though the list of checked spesializations
    $.each($specializations, function(index, value) {
      // Check if an object exists in $config
      if (typeof $config['$'+value] !== 'undefined') {
        // Check if there is a config for this set of specializations (like fight + vehicles)
        var $found_special_config = false;
        $.each($specializations, function(index_two, value_two) {
          // If you find a special set of specializations use this …
          if (typeof $config['$'+value+'_and_'+value_two] !== 'undefined') {
            $this_specialization = $.extend(true, {}, $config['$'+value+'_and_'+value_two]);
            $found_special_config = true;
          }
        });
        // … otherwise make a copy of the object and put it in $this_specialization
        if ( !$found_special_config ) {
          $this_specialization = $.extend(true, {}, $config['$'+value]);
        }
        // Extract the attribute's (key's) names
        $attribute_names = Object.keys($this_specialization.attributes);
        // Walk through the attributes (keys) and sum them
        $.each($attribute_names, function(index, value) {
          if ($character_priorities[value]) {
            $character_priorities[value] += $this_specialization.attributes[value];
          } else {
            // If the attribute (key) isn't set allready, make it
            // and add +1 because the numbers in the $config range from 0 to 5 but we want the final numbers to range from 1 to 6
            $character_priorities[value] = $this_specialization.attributes[value] + 1;
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

  function load_checked_specializations() {
    // walk though the checkboxes and make an array '$specializations' with all values checked
  	var $form__specializations =  $('[data-sr5tk="specializations_checkbox"]');
    var $specializations = [];
  	$.each($form__specializations, function(index, value) {
      if ( $(this).prop('checked') ) {
        $specializations.push( $(this).attr('value') );
      }
    });

    return $specializations;
  }

  function manage_professionality() {
    var $professionality_value = $('[data-sr5tk="professionality_slider"]').val();
    return $professionality_value;
  }

  function random_species() {
    var $rand = Math.random()*100;
    if ($rand > 0)  {$species = 'human';}
    if ($rand > 60) {$species = 'elf';}
    if ($rand > 70) {$species = 'dwarf';}
    if ($rand > 80) {$species = 'ork';}
    if ($rand > 95) {$species = 'troll';}
    return $species;
  }

  // ------------------------------------------------------------------
	// --- public functions
	return {
		read_priorities: function() {
			return manage_priorities();
		},
		read_professionality: function() {
			return manage_professionality();
		},
		generate_species: function() {
      return random_species();
		},
		read_specializations: function() {
			return load_checked_specializations();
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
      stats.build( form.generate_species(), form.read_priorities(), form.read_professionality() );
      skills.build( form.read_specializations(), form.read_professionality() );
  		$('[data-sr5tk="echo_attributes"').html(display.list_charactervalues('priorities'));
  		$('[data-sr5tk="echo_species"]').html(display.list_charactervalues('species'));
    } else {
      alert ("Checkbox missing");
    }
  });
});
