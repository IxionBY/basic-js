const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ( sampleActivity == null || sampleActivity == undefined){
    return false;
  }
  if (typeof (sampleActivity)!="string"){
    return false;
  }
  if (isNaN(parseFloat(sampleActivity))){
    return false;
  }
  if(Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 0 || Number(sampleActivity) == 0){
    return false;
  }
    var sampleActivityNew = parseFloat(sampleActivity);
    return Math.ceil(age = (Math.log(MODERN_ACTIVITY/sampleActivityNew))*HALF_LIFE_PERIOD/0.693)
};