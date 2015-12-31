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