/* ========================================================================
 * # Main JS file
 *    Docs:
 *    http://api.jquery.com/
 *    https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know
 *    https://github.com/peterkokot/awesome-jquery
 ========================================================================*/
(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
        //buttons listener
        $('.tabs__header-block').on('click', function(e){

            let className = 'tabs__header-block--active';
            let fullClassName ='.tabs__header-block.'+className;
            let $active = $(fullClassName);
            let id = $($active).data('id');
            let newId = e.currentTarget.dataset.id;
            if( id == newId){ return;}
            
            $($active).removeClass( className );
            e.currentTarget.classList.add( className );

            // show new tab
            $('.tabs__body.tab-'+id).addClass('tabs__body--inactive');
            $('.tabs__body.tab-'+newId).removeClass('tabs__body--inactive');

        })
    });
    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {
		
    });
    // Scripts that will run on window resize
    $(window).on('resize', function () {
		
    });
})(jQuery); // Fully reference jQuery after this point..