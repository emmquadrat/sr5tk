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
