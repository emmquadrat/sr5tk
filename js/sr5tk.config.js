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
          }
        }

}; // closing variable scope '$config'