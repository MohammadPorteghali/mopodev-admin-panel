<template>
  <div class="ma-5" v-if="$vuetify.theme.dark">
    <highcharts :options="chartOptions" dir="ltr"></highcharts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'pie',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          backgroundColor: '#252B3E',
          plotBorderColor: '#606063'
        },
        title: {
          text: 'Stacked bar chart',
          style: {
            color: '#E0E0E3',
          }
        },
        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
          labels: {
            style: {
              color: '#E0E0E3'
            }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          title: {
            style: {
              color: '#A0A0A3'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total fruit consumption',
            style: {
              color: '#A0A0A3'
            }
          },
          labels: {
            style: {
              color: '#E0E0E3'
            }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          tickWidth: 1,
        },
        legend: {
          reversed: true,
          backgroundColor: '#252B3E',
          itemStyle: {
            color: '#E0E0E3'
          },
          itemHoverStyle: {
            color: '#FFF'
          },
          itemHiddenStyle: {
            color: '#606063'
          },
          title: {
            style: {
              color: '#C0C0C0'
            }
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          style: {
            color: '#F0F0F0'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }, {
            name: 'Safari',
            y: 4.18
          }, {
            name: 'Other',
            y: 7.05
          }]
        }],
        colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
          '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      }
    }
  }
}
</script>

<style></style>
