<div class="navlightgreen">
    <div class="container-fluid">
        <a title="<?php echo title_site(null);?>" href="<?php echo base_url(); ?>"><img src="<?php echo base_url(); ?>assets/images/brand.png" class="img-responsive" alt="<?php echo title_site(null);?>"></a>
    </div>
</div>

<div class="navdarkgreen">
    <div class="container-fluid">
        <div class="row">
            <form action="https://webatendimento.consorcioponta.com.br/frmCorccCnsLogin.aspx" name="area_consorciado" id="chronoform_area_consorciado" method="post">
                <input id="edtTipoAcesso_0" type="hidden" name="edtTipoAcesso" value="logingrupo">
                <div class="col-xs-5 col-sm-5 col-lg-5">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-lg-6"><h1 class="text-uppercase">Área do Consorciado</h1></div>
                        <div class="col-xs-12 col-sm-6 col-lg-6"><input type="text" class="form-control" id="edtGrupo" name="edtGrupo" maxlength="10" size="10" maxlength="14" size="14"  placeholder="GRUPO" required></div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-5 col-lg-5 input-cotas">
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 col-lg-4 input-cotas-cota"><input type="text" class="form-control" name="edtCota" id="edtCota" maxlength="10" size="10" placeholder="COTA" required></div>
                        <div class="col-xs-12 col-sm-7 col-lg-7">
                            <div class="input-group">
                                <input type="password" class="form-control" name="edtSenha" placeholder="SENHA" required>
                                <span class="input-group-btn">
                                        <button type="submit" class="btn btn-default btn-enter">ENTRAR</button>
                                     </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-2 col-lg-2">
                    <div class="row">
                        <div class="col-md-12"><button type="button" class="btn btn-default btn-esqueci-senha" onclick="$(location).attr('href','https://webatendimento.sicoobconsorcios.com.br/frmCorccCnsEsqueciSenha.aspx');"><span class="hidden-lg hidden-md">RECUPERAR SENHA</span> <span class="hidden-sm hidden-xs"><strong>1º ACESSO/ESQUECI MINHA SENHA</strong></span></button></div>
                        <div class="col-md-12 hidden"><button type="button" class="btn btn-default btn-esqueci-senha" onclick="$(location).attr('href','http://cooperativa.consorcionacionalsicoob.com.br/Web_Atendimento/frmCorccCnsEsqueciSenha.aspx');"><span class="hidden-lg hidden-md">RECUPERAR SENHA</span> <span class="hidden-sm hidden-xs">ESQUECI MINHA SENHA</span></button></div>
                        <div class="col-xs-6 col-sm-4  col-lg-4 hidden"><button type="button" class="btn btn-default btn-login">CRIAR LOGIN</button></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse" id="bs-navbar">
            <ul class="nav navbar-nav">
                <li><a class="<?php echo active_menu('sicoob-consorcios'); ?>" href="<?php echo base_url(); ?>consorcio-ponta.php">Ponta Administradora de Consórcios</a></li>
                <li><a class="<?php echo active_menu_array(array('oferte-seu-lance','segunda-via-do-boleto')); echo active_menu('institucional'); ?> vertical-align" href="<?php echo base_url(); ?>institucional.php">Institucional</a></li>
                <li><a class="<?php echo active_menu('fique-por-dentro'); ?> vertical-align" href="<?php echo base_url(); ?>fique-por-dentro.php">Fique por Dentro</a></li>
                <li><a class="<?php echo active_menu('imoveis'); ?> vertical-align" href="<?php echo base_url(); ?>imoveis.php">Imóveis</a></li>
                <li><a class="<?php echo active_menu('veiculos'); ?> vertical-align" href="<?php echo base_url(); ?>veiculos.php">Veículos</a></li>
                <li><a class="<?php echo active_menu('veiculos-pesados'); ?> vertical-align" href="<?php echo base_url(); ?>veiculos-pesados.php">Veículos Pesados</a></li>
                <li><a class="<?php echo active_menu('motos'); ?> vertical-align" href="<?php echo base_url(); ?>motos.php">Motos</a></li>
                <li><a class="<?php echo active_menu('servicos'); ?> vertical-align" href="<?php echo base_url(); ?>servicos.php">Serviços</a></li>
                <li><a class="<?php echo active_menu('informacoes-sobre-o-grupo'); ?>" href="<?php echo base_url(); ?>informacoes-sobre-o-grupo.php">Informações sobre seu Grupo</a></li>
                <li><a class="<?php echo active_menu_array(array('contato', 'ouvidoria')); ?> vertical-align" href="<?php echo base_url(); ?>ouvidoria.php">Ouvidoria</a></li>
            </ul>
        </div>
    </div>
</nav>