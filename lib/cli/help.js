var add_spaces = require( '../utils' ).add_spaces;

module.exports = function ( generators ){
  var help = [ 'Usage: coke [command] [argument(s)]\n', 'Commands:' ];
  var commands = [
    [ '-v', '--version', 'Display coke version' ],
    [ 'h', 'help', 'Display usage information' ],
    [ 'n', 'new', 'Create a new coke app' ],
    [ 'g', 'generate [generator] [args] [options]', 'Generate code templates' ],
    [ 'r', 'routes [filter]', 'Display application routes'],
    [ 's', 'server', 'Run coke server']
  ];
  var max_len = 0;

  commands.forEach( function( cmd ){
    if( cmd[ 1 ].length > max_len ){
      max_len = cmd[ 1 ].length;
    }
  });

  commands.forEach( function( cmd ){
    help.push( '  ' + add_spaces( cmd[ 0 ] + ',', 4 ) +
      add_spaces( cmd[ 1 ], max_len + 1 ) + cmd[ 2 ]);
  });

  help.push( '\nAvailable generators:' );
  help.push( '  ' + generators );
  console.log( help.join('\n'));
};
