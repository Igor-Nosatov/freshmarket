<template>
<main class="main">
    <div class="wrapper">
        <div class="row no-gutters">
            <BreadcrumbComponent :pageName="pageName" />
            <div class="col-lg-12">
                <div class="tab-pane-inner">
                    <div>
                        <h3 class="font-weight-bold">Условия доставки по&nbsp;Кишиневу:</h3>
                    </div>
                    <ul class="list1">
                        <li>Доставка заказов по&nbsp;Кишиневу осуществляется бесплатно. Стоимость доставки в&nbsp;пригороды Кишинева составляет 100&nbsp;лей.</li>
                        <li>Доставка с&nbsp;понедельника по&nbsp;пятницу осуществляется с&nbsp;10:00 до&nbsp;22:00&nbsp;в 3&nbsp;временных интервала (10:00&nbsp;— 14:00, 14:00&nbsp;— 18:00, 18:00&nbsp;— 22:00).<br>В&nbsp;субботу доставка осуществляется с&nbsp;10:00 до&nbsp;18:00 без временных интервалов</li>
                        <li>Доставка осуществляется только для товаров, входящих в&nbsp;состав заказа.<br>Транспортировка нескольких товаров с&nbsp;целью выбора одного из&nbsp;них на&nbsp;месте доставки не&nbsp;производится.</li>
                        <li>Курьер созвонится с&nbsp;вами за&nbsp;30&nbsp;минут до&nbsp;доставки.</li>
                        <li>В&nbsp;обязанности службы доставки не&nbsp;входит перемещение изделия по&nbsp;квартире, монтаж и&nbsp;подключение, демонстрация потребительских характеристик и&nbsp;обучение покупателя.</li>
                    </ul>
                    <div class="b_attention">
                        <p>Обращаем внимание на&nbsp;то, что при получении товар должен быть проверен на&nbsp;комплектность и&nbsp;отсутствие внешних повреждений самим покупателем. Ставя подпись в&nbsp;гарантийном талоне, вы&nbsp;подтверждаете, что не&nbsp;имеете претензий к&nbsp;товару и&nbsp;продавцу.</p>
                        <p>Если товар доставлен и&nbsp;соответствует всем гарантийным обязательствам, но&nbsp;вы&nbsp;по&nbsp;каким-то причинам передумали его покупать, вам придется оплатить дорожные расходы курьера и&nbsp;стоимость доставки. Поэтому прежде, чем отправлять заказ, убедитесь, что выбрали именно ту&nbsp;модель, которую действительно хотите купить.</p>
                    </div>
                    <p><strong>Подъем крупногабаритных товаров на&nbsp;этаж или внос в&nbsp;дом:</strong></p>
                    <ul class="list1">
                        <li>Крупногабаритная техника и&nbsp;мебель доставляется до&nbsp;подъезда клиента или ворот частного дома.</li>
                        <li>Подъем товара на&nbsp;этаж или занос в&nbsp;дом, при желании клиента, осуществляется за&nbsp;деньги.</li>
                        <li>Минимальная стоимость подъема единицы крупногабаритной техники составляет 100 лей и&nbsp;включает в&nbsp;себя подъем техники на&nbsp;лифте до&nbsp;квартиры клиента или лестнице до&nbsp;третьего этажа.</li>
                        <li>При отсутствии лифта либо при невозможности поднять крупногабаритный товар в&nbsp;лифте начиная с&nbsp;четвертого этажа стоимость подъема будет составлять 20&nbsp;лей за&nbsp;этаж.</li>
                        <li>Если клиент поможет курьеру поднять товар, то&nbsp;стоимость подъема уменьшится наполовину.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import BreadcrumbComponent from './../../components/common_components/BreadcrumbComponent.vue'
export default {
    name:'DeliveryPage',
    components: {
        BreadcrumbComponent
    },
    data() {
        return {
            pageName: 'Условия доставки'
        }
    },
    mounted() {
        this.pageName;
    }
}
</script>
