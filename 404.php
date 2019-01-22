<?php include_once('functions.php'); ?>
<?php include_once('partials/header.php');?>
<?php include_once('partials/menu.php'); ?>

<section id="two" class="no-padding" style="margin-top: 20px;">
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div class="page-404">
                    <div class="col-md-4">
                        <img class="img-responsive wow fadeIn" data-wow-delay=".3s" src="<?php echo base_url(); ?>assets/images/404.jpg" alt="<?php echo title_site(null);?>">
                    </div>
                   <div class="col-md-8">
                       <h1 class="wow fadeIn" data-wow-delay=".3s">Desculpe, a página não foi encontrada!</h1>
                       <p>Alguma coisa deu errado no site, mas muita coisa vai dar certo com o Sicoob Consórcios.</p>
                       <p>Em breve, solucionaremos o problema. Tente novamente mais tarde.</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include_once('partials/products.php'); ?>

<?php include_once('partials/footer.php');?>