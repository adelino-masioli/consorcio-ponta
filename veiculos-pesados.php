<?php include_once('functions.php'); ?>
<?php include_once('partials/header.php');?>
<?php include_once('partials/menu.php'); ?>

<?php echo select_banner(base_url().'assets/images/banner_veiculos_pesados.jpg', title_site(null)); ?>

<section id="two" class="no-padding">
    <div class="container content-text-pages">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 col-md-12 col-sm-12 col-xs-12"><br/>
                <p class="text-muted text-center">O Consórcio Ponta é o parceiro ideal para você realizar a aquisição de caminhões, implementos rodoviários, máquinas ou equipamentos agrícolas. De forma planejada, em até 144 meses e sem pagar juros. Encontre um ponto de venda mais próximo e conheça nossas excelentes taxas e condições.</p>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <p class="wow fadeIn text-center" data-wow-delay=".3s"><a target="_blank" href="<?php echo base_url().'downloads/contrato_sicoob_consorcios_veiculos_pesados.pdf'; ?>" class="download">BAIXAR CONTRATO</a></p>
            </div>
        </div>

    </div>
</section>

<?php include_once('partials/footer.php');?>