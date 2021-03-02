<template>
<main class="main">
    <div class="wrapper">
        <div class="row no-gutters">
            <BreadcrumbComponent :pageName="pageName" />
            <div class="col-lg-12">
                <div class="text-content col-md-24">
                    <h3><strong><span style="color:#006400;">Оплата может быть произведена двумя&nbsp;способами:</span></strong></h3>
                    <h4 style="line-height: 30px;">1. Наличными при доставке курьером (cash).<br>
                        Оплата производится только после того, как товар&nbsp;был доставлен и соответствует &nbsp;вашему заказа.</h4>
                    <h4 style="line-height: 30px;">2. Банковский перевод.</h4>
                    <h4 style="line-height: 30px;">В случае оплаты банковским&nbsp;переводом,доставка товара осуществляется
                        после того как деньги поступили на наш счет.&nbsp;После этого с вами свяжется наш&nbsp;менеджер, для того,
                        обсудить деталий получения товара.</h4>
                    <h4 style="line-height: 30px;">Абсолютно любой товар представленный на нашем сайте Вы можете приобрести в кредит!</h4>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import BreadcrumbComponent from './../../components/common_components/BreadcrumbComponent.vue'
export default {
    name:'GaranteePage',
    components: {
        BreadcrumbComponent
    },
    data() {
        return {
            pageName: 'Условия доставки',
        }
    },
    mounted() {
        this.pageName;
    }
}
</script>
