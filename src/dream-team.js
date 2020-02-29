module.exports = function createDreamTeam(members) {
  var newArr = [];
  if ( members == null){
    return false;
  }
  for(var i=0; i < members.length; i++){
  if (typeof members[i] == "string"){
    members[i] = members[i].replace(/\s+/g,'');
    newArr.push(members[i][0].toUpperCase());
  }
 }  return newArr.sort().join('');
}