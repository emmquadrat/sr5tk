

// ####################################################################
// ### sr5tk.config

var $config = {
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// R A C E   V A L U E S
/* Default racial attribute values
   Each Race has a min and a max attributes setting
   supported races are Humans, Elfes, Dwarfs, Orks and Trolls
*/

  // Humans
  $defaults_human : {
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
        },

  // Elves
  $defaults_elf : {
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
        },

  // Dwarfs
  $defaults_dwarf : {
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
        },

  // Orks
  $defaults_ork : {
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
        },

  // Trolls
  $defaults_troll : {
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
        },

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
  $fight : {
          attributes: {
            kon:5,
            agi:3,
            rea:3,
            str:5,
            wil:0,
            log:0,
            int:1,
            cha:0
          },
          skills: {
            5:['pistols','automatics','unarmed combat'],
            4:['longarms','heavy weapons','throwing weapons'],
            3:['gunnery','blades','clubs'],
            2:[],
            1:['gymnastics','sneaking','test']
          }
        },

  $fight_and_magic : {
          attributes: {
            kon:2,
            agi:2,
            rea:5,
            str:0,
            wil:5,
            log:5,// according to magic school
            int:5,
            cha:5 // according to magic school
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  $fight_and_vehicles : {
          attributes: {
            kon:1,
            agi:5,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:2,
            cha:0
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  //$fight_and_drones : $config.$fight_and_vehicles,

  $fight_and_stealth : {
          attributes: {
            kon:2,
            agi:5,
            rea:5,
            str:1,
            wil:0,
            log:0,
            int:2,
            cha:0
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Magic
  $magic : {
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:5,
            log:5,// according to magic school
            int:5,
            cha:5 // according to magic school
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Computer
  $computer : {
          attributes: {
            kon:0,
            agi:0,
            rea:5,
            str:0,
            wil:5,
            log:5,
            int:5,
            cha:0
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Vehicles
  $vehicles : {
          attributes: {
            kon:0,
            agi:3,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:2,
            cha:0
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Drones
  $drones: {
          attributes: {
            kon:0,
            agi:5,
            rea:5,
            str:0,
            wil:0,
            log:5,
            int:1,
            cha:0
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // People
  $people : {
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:3,
            log:0,
            int:5,
            cha:5
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Stealth
  $stealth : {
          attributes: {
            kon:0,
            agi:5,
            rea:3,
            str:0,
            wil:1,
            log:0,
            int:5,
            cha:2
          },
          skills: {
            5:['gymnastics','sneaking'],
            4:['blades'],
            3:['locksmith','pistols','blades'],
            2:['palming','automatics','throwing weapons','diving'],
            1:['longarms']
          }
        },

  // Knowledge
  $knowledge : {
          attributes: {
            kon:0,
            agi:0,
            rea:0,
            str:0,
            wil:2,
            log:5,
            int:5,
            cha:1
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        },

  // Equipment
  $equipment : {
          attributes: {
            kon:0,
            agi:1,
            rea:0,
            str:0,
            wil:1,
            log:5,
            int:3,
            cha:1
          },
          skills: {
            5:[],
            4:[],
            3:[],
            2:[],
            1:[]
          }
        }

}; // closing variable scope '$config'


// ####################################################################
// ### sr5tk.character_values

var $character_features = {};

var character = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	
  function define_features($group, $list_of_features) {
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
// ### sr5tk.display

var display = function () {
  
  // ------------------------------------------------------------------
	// --- variables
	
  // ------------------------------------------------------------------
	// --- local functions	
	// ------------------------------------------------------------------
	  
  // R E T U R N   A T T R I B U T E S   A S   H T M L 
  function list_stats($list_what) {
    // Take the array of generated stat values and merge it with an array of stat names
    // Return the new array as html text
    if ($list_what === 'priorities') {
      var $stat_numbers = $character_features.attributes;
      var $stat_keys = Object.keys($stat_numbers);
      var $stat_text = new Array('Kon ','Ges ','Rea ','Sta ','Wil ','Log ','Int ','Cha ', 'Edg ')
      var $list_of_stats = new Array();
      for (var $n = 0; $n < $stat_text.length; $n ++) {
        $list_of_stats[$n] = $stat_text[$n] + $stat_numbers[$stat_keys[$n]];
      }
      return $list_of_stats.join(', '); 
    }
    if ($list_what === 'species') {
      var $species = $character_features.species;
      if ($species === 'human') { return 'Mensch';}
      if ($species === 'elf')   { return 'Elf';}
      if ($species === 'ork')   { return 'Ork';}
      if ($species === 'dwarf') { return 'Zwerg';}
      if ($species === 'troll') { return 'Troll';}
    }
  }
  
  // ------------------------------------------------------------------
	// --- public functions	
	return {
		list_charactervalues: function($list_what) {
  		return list_stats($list_what);
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
  function random_stats($race, $priorities, $professionality) {

    var $points = get_points($professionality);

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
    character.add_values('species',$race);

    return $attributes;
  }

  // P R O F E S S I O N A L I T Y   A N D   D E V E L O P M E N T   P O I N T S
  // Calculate the points available for attribute increase based on the professionality rating
  function get_points($professionality) {
    return ( 22 - 8 + ($professionality * 4) );
  }

  // A T T R I B U T E   N U M B E R   B Y   P R I O R I T Y
  // Make a random number equal the sum of the priority arra
  // Go through the priority array and check if the random number is lower than the sum at this position of the array
  // If the random number has reached the sums value, this is set as the attribute number returned
  function get_attribute_by_priority($priorities) {
    // walk through $$priorities object to make an array of priority numbers
    var $attribute_names = Object.keys($priorities);
    var $priority = [];
    $.each($attribute_names, function(index, value) {
      $priority.push($priorities[value]);
    });

    var $array_sum = 0;
    for (var $n = 0; $n < $priority.length; $n++) {
      $array_sum += $priority[$n];
    }

    var $random = Math.round(Math.random() * ($array_sum -1));

    var $attr = 0;
    var $attr_array_position = 0;
    for (var $n = 0; $n < $priority.length; $n++) {
      $attr_array_position += $priority[$n];
      if($random >= $attr_array_position) {
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
    var $character_defaults = $.extend(true, {}, $config['$defaults_' + $race]); // this is a deep copy of the defaults object
    return $character_defaults;
  }

  // ------------------------------------------------------------------
	// --- public functions
	return {
		build: function($race, $priorities, $professionality) {
  		random_stats($race, $priorities, $professionality);
		}
	}

}();


// ####################################################################
// ### sr5tk.skills

var skills = function () {

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
  function random_skills($specializations, $professionality) {

    var $points = get_points($professionality);
    var $number_of_skills = get_number_of_skills($professionality);
    var $this_skills = combine_skills($professionality, $specializations);

    var $skill_prios_combined = 0;
    for (var i = 0; i < $this_skills.length; i++) {
      $skill_prios_combined += Number($this_skills[i]);
    }

    // loop
    // for (var $skills_used = 0; $skills_used < $number_of_skills; $skills_used ++) {
    //
    //   var $select_skill_random = Math.floor( Math.random() * $skill_prios_combined)+1;
    //   var $select_skill_steps = 0;
    //
    //   for (var $n = 0; $n <= $skill_prios.length; $n++) {
    //     if ($select_skill_random <= $select_skill_steps) {
    //       var $skills_in_prio_length = $config[$speciallization]['skills'][$n].length;
    //       var $skills_in_prio_random = Math.floor(Math.random()*$skills_in_prio_length);
    //       var $skill_name = $config[$speciallization]['skills'][$n][$skills_in_prio_random];
    //       $skills.push($skill_name);
    //       $n = $skill_prios_combined;
    //     } else {
    //       $select_skill_steps += Number($skill_prios[$n]);
    //     }
    //   }
    // }
    // store the stats in character array

    //character.add_values('skills',$this_skills);
    //return $this_skills;
  }

  function combine_skills ($professionality, $specializations) {
    var $points = get_points($professionality);
    var $number_of_skills = get_number_of_skills($professionality);
    var $this_skills = {5:[],4:[],3:[],2:[],1:[]};
    // walk trough each of the specializations
    for (var $nth_specialization = 0; $nth_specialization < $specializations.length; $nth_specialization ++ ) {
      // make a variable for this specialization
      var $specialization = '$'+$specializations[$nth_specialization];
      // store the skills of this specialization in an object $skill_selection
      var $skill_selection = $config[$specialization]['skills'];
      // store the keys of that object in an array
      var $skill_prios = Object.keys($config[$specialization]['skills']);

      for (var $nth_priority = ($skill_prios.length -1); $nth_priority >= 0; $nth_priority--) {console.log('---');
        for (var m = 0; m < $config[$specialization]['skills'][$skill_prios[$nth_priority]].length; m ++) {
          var $this_skill = $config[$specialization]['skills'][$skill_prios[$nth_priority]][m];

          if (!check_if_is_in_object(
                    $this_skill,
                    $this_skills,
                    $skill_prios[$nth_priority],
                    $skill_prios)
          ) {
            $this_skills[$skill_prios[$nth_priority]].push($this_skill);
            console.log('pushed: '+$this_skill+' in '+$skill_prios[$nth_priority]+' -> '+$this_skills[$skill_prios[$nth_priority]]);
          }
          // if ($nth_specialization == 0 && $nth_priority == 0) {
          //   if (check_if_is_in_object(
          //             $this_skill,
          //             $this_skills,
          //             '1',
          //             $skill_prios)
          //   ) {
          //     //$this_skills[$skill_prios[$nth_priority]].push($this_skill);
          //     var $index_of_skill = $this_skills[$skill_prios[$nth_priority]].indexOf($this_skill);
          //     $this_skills[$skill_prios[$nth_priority]].splice($index_of_skill, 1);
          //     console.log('deleted: '+$this_skill+' from '+$skill_prios[$nth_priority]+' -> '+$this_skills[$skill_prios[$nth_priority]]);
          //   }
          // }

        }
      }
    }
    console.log($this_skills);
    return $this_skills;
  }

  function check_if_is_in_object($term, $object, $from_key, $key_list){
    $from_key = Number($from_key);
    var $is_in = false;
    for (var $n = Object.keys($object).length; $n >= $from_key; $n--) {console.log($n);
      if ($.inArray($term, $object[$key_list[$n]]) > -1) {
        console.log(' found '+$term+' in '+$key_list[$n]);
        $is_in = true;
      }
    }
    return $is_in;
  }

  // P R O F E S S I O N A L I T Y   A N D   D E V E L O P M E N T   P O I N T S
  // Calculate the points available for attribute increase based on the professionality rating
  function get_points($professionality) {
    return ( 12 + ($professionality * 8) );
  }
  function get_number_of_skills($professionality) {
    return ( 5 + ($professionality * 2) );
  }

  // ------------------------------------------------------------------
	// --- public functions
	return {
		build: function($specializations, $professionality) {
      random_skills($specializations, $professionality);
		}
	}

}();


// ####################################################################
// ### sr5tk.translate

var translate = function () {

  // ------------------------------------------------------------------
	// --- variables

  // ------------------------------------------------------------------
	// --- local functions
	// ------------------------------------------------------------------

	// G E R M A N
	function translate_de($word) {

    if($word==='pistols'){ var $translation='Pistolen';}
    if($word==='automatics'){ var $translation='Schnell&shy;feuer&shy;waffen';}
    if($word==='unarmed combat'){ var $translation='Waffenloser Kampf';}
    if($word==='longarms'){ var $translation='Gewehre';}
    if($word==='heavy weapons'){ var $translation='Schwere Waffen';}
    if($word==='throwing weapons'){ var $translation='Wurf&shy;waffen';}
    if($word==='gunnery'){ var $translation='Geschütze';}
    if($word==='blades'){ var $translation='Klingen&shy;waffen';}
    if($word==='clubs'){ var $translation='Knüppel';}
    if($word==='gymnastics'){ var $translation='Akrobatik';}
    if($word==='sneaking'){ var $translation='Schleichen';}
    if($word===''){ var $translation='';}
    if($word===''){ var $translation='';}
    if($word===''){ var $translation='';}
    if($word===''){ var $translation='';}

    // default
    if (!$translation) { var $translation = $word}
  	return $translation;
  }

  // ------------------------------------------------------------------
	// --- public functions
	return {
		de: function($word) {
			return translate_de($word);
		}
	}

}();


