<?php
/*
Template Name: Homepage
*/
?>

<?php echo do_shortcode( '[responsive_slider]' ); ?>

<div class="large-12 medium-12 small-12 column">
    <?php get_template_part('templates/page', 'header'); ?>
    <?php get_template_part('templates/content', 'page'); ?>

    <div class="row">
        <div class="small-9 medium-9 small-12">
            <?php
                for ( $i = 1; $i <= 4; $i++ ) {
                    $tabHeader  = get_field('home-box_' . $i . '_title');
                    $tabContent = get_field('home-box_' . $i . '_text');
                    $tabImage   = get_field('home-box_' . $i . '_image'); ?>

                    <div class="service-tile">
                        <h3><?php echo $tabHeader; ?></h3>
                        <div class="tile-box">
                            <?php if ( !is_null($tabImage['sizes']['service-tile-thumb']) ) : ?>
                                <img class="right" src="<?php echo $tabImage['sizes']['service-tile-thumb']; ?>" alt="<?php echo $tabHeader; ?>">
                            <?php endif ?>
                            <?php echo $tabContent; ?>
                        </div>
                    </div>
                <?php
                }
            ?>

        </div>
    </div>
</div>