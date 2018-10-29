<template>
    <div id="container">
        <p>f2</p>
        <canvas id="chart"></canvas>
    </div>
</template>

<script>
import F2 from '@antv/f2';

export default {
    name: 'home',
    data() {
        return {
            mockData: [
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 115 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 },
            ]
        }
    },
    methods: {
        createChart() {

            const chart = new F2.Chart({
                id: 'chart',
                width: '500',
                height: '500'
            });

            chart.source(this.mockData);
            chart.interval().position('genre*sold');
            chart.render();

        }
    },
    mounted() {
        this.createChart();
    }
}
</script>

<style>

</style>
