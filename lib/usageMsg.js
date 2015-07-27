module.exports = function(f) {

  var output = '';
  output += 'cal: illegal option -- ' + f + '\n'
          + 'usage: cal [-jy] [[month] year]\n'
          + '       cal [-j] [-m month] [year]\n'
          + '       ncal [-Jjpwy] [-s country_code] [[month] year]\n'
          + '       ncal [-Jeo] [year]\n';
  return output;

};
