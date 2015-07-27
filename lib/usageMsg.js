module.exports = function(f) {

  var output = '';

  if(f) {
    output += 'cal: illegal option -- ' + f + '\n'
  }

    output += 'usage: cal [-jy] [[month] year]\n'
            + '       cal [-j] [-m month] [year]\n'
            + '       ncal [-Jjpwy] [-s country_code] [[month] year]\n'
            + '       ncal [-Jeo] [year]\n';

  return output;

};
