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