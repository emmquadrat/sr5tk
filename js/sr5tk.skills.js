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
