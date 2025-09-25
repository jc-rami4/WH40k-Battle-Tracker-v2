// JS Code Improved (Cause I sure as hell did NOT make that last one well)
// First, we start with the home page
// The JS needed for this will just be changing image types
// There will be a need for randomizer



// Home Page JS

    // Image Arrays
    const primaryMissions = [
        "primary-missions/PM_burden-of-trust.svg",
        "primary-missions/PM_hidden-supplies.svg",
        "primary-missions/PM_linchpin.svg",
        "primary-missions/PM_purge-the-foe.svg",
        "primary-missions/PM_scorched-earth.svg",
        "primary-missions/PM_supply-drop.svg",
        "primary-missions/PM_take-and-hold.svg",
        "primary-missions/PM_terraform.svg",
        "primary-missions/PM_the-ritual.svg",
        "primary-missions/PM_unexploded-ordinance.svg"
    ];
    const terrainLayouts = [
        "terrain_layouts/layout1.png",
        "terrain_layouts/layout2.png",
        "terrain_layouts/layout3.png",
        "terrain_layouts/layout4.png",
        "terrain_layouts/layout5.png",
        "terrain_layouts/layout6.png",
        "terrain_layouts/layout7.png",
        "terrain_layouts/layout8.png"
    ];
    const deployZones = [
        "deployment_zones/DZ_crucible-of-battle.svg",
        "deployment_zones/DZ_dawn-of-war.svg", 
        "deployment_zones/DZ_hammer-and-anvil.svg", 
        "deployment_zones/DZ_search-and-destroy.svg", 
        "deployment_zones/DZ_sweeping-engagement.svg",
        "deployment_zones/DZ_tipping-point.svg"
    ];
    const twistList = [
        "twist-rules/Tw_adapt-or-die.svg",
        "twist-rules/Tw_bloodlust.svg",
        "twist-rules/Tw_high-octane.svg",
        "twist-rules/Tw_lords-of-war.svg",
        "twist-rules/Tw_martial-pride.svg",
        "twist-rules/Tw_night-fighting.svg",
        "twist-rules/Tw_point-blank.svg",
        "twist-rules/Tw_rapid-escalation.svg",
        "twist-rules/Tw_ruinscape.svg"
    ];

    // Element IDs
    const deployZonesId = document.getElementById('deploy_zn-img');
    const terrainLayoutId = document.getElementById('terrain-img');
    const primaryMissionHomeId = document.getElementById('primary-img-home');
    const twistsId = document.getElementById('twist-img');

    function imageRandom(imageList, imageId){
        randomMax = imageList.length;
        randomNum = Math.floor(Math.random() * randomMax);
        imageId.src = imageList[randomNum];
    };

    function imageManual(imageList, imageId, num){
        imageId.src = imageList[num];
    };

    imageRandom(primaryMissions);
    imageRandom(terrainLayouts);
    imageRandom(deployZones);
    imageRandom(twistList);




// Rounds JS




