( function( blocks ) {
  if ( ! blocks ) {
    return;
  }

  // Theme-Specific Block Styles.
  blocks.registerBlockStyle( 'core/blockquote', {
    name: 'large',
    label: 'Large',
  } );

} )( wp && wp.blocks );