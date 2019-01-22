<?php include_once('partials/banner.php'); ?>
    <section id="two" class="no-padding" style="margin-top: 20px;">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                    <div class="feature">
                        <i class="wow fadeIn" data-wow-delay=".3s"><img class="img-responsive"  src="<?php echo base_url(); ?>assets/images/segunda-via-boleto.png" alt="<?php echo title_site(null);?>"></i>
                        <div class="feature-text">
                            <p class="text-muted">Aqui você pode retirar a segunda via de boleto do seu consórcio. Assim você fica sempre em dia evita juros e fica tranquilo na hora de fechar as contas</p>
                        </div>
                        <a href="<?php echo base_url(); ?>segunda-via-do-boleto.php" class="btn btn-detalhes btn-detalhes-first">+ DETALHES</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12  text-center">
                    <div class="feature">
                        <i class="wow fadeIn" data-wow-delay=".3s"><img class="img-responsive"  src="<?php echo base_url(); ?>assets/images/oferte-seu-lance.png" alt="<?php echo title_site(null);?>"></i>
                        <div class="feature-text">
                            <p class="text-muted">O próximo contemplado no Consórcio Ponta pode ser você. Dê um lance e aumente ainda mais suas chances!</p>
                        </div>
                        <a href="<?php echo base_url(); ?>oferte-seu-lance.php" class="btn btn-detalhes btn-detalhes-first">+ DETALHES</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12  text-center">
                    <div class="feature">
                        <i class="wow fadeIn" data-wow-delay=".3s">
                            <img class="img-responsive" src="assets/images/calendario.png" alt=""/>
                            <div class="controllerscalendar">
                                <div class="selelecionevencimento">Selecione seu Vencimento</div>
                                <div class="row">
                                    <div class="col-md-12  mes mes1" <?php if(date('m') == 1):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('j1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('j2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes2" <?php if(date('m') == 2):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('f1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('f2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes3" <?php if(date('m') == 3):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('m1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('m2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes4" <?php if(date('m') == 4):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('a1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('a2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes5" <?php if(date('m') == 5):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('mm1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('mm2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes6" <?php if(date('m') == 6):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('jn1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('jn2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes7" <?php if(date('m') == 7):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('jl1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('jl2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes8" <?php if(date('m') == 8):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('ag1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('ag2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes9" <?php if(date('m') == 9):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('s1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('s2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes10" <?php if(date('m') == 10):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('o1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('o2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes11" <?php if(date('m') == 11):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('n1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('n2');">Dia 10</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mes mes12" <?php if(date('m') == 12):?> style="display: block;" <?php else: ?>  style="display: none" <?php endif; ?>>
                                        <div class="mesbtn s1" onclick="enableMes('d1');">Dia 05</div>
                                        <div class="mesbtn s2" onclick="enableMes('d2');">Dia 10</div>
                                    </div>
                                </div>
                            </div>
                            <img class="img-responsive" src="assets/images/calendariocolor.png" alt=""  style="margin:auto!important;"/>
                        </i>
                        <div class="calendario">
                            <div style="overflow:hidden;" class="wow fadeIn" data-wow-delay=".5s">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div id="datetimepicker12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php include_once('partials/products.php'); ?>